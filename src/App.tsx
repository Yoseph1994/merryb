import React, { useState, useEffect } from 'react';
import { UserStudyState, Topic, LessonItem, ExamAttempt, TopicId, ExamQuestion } from './types';
import { ALL_TOPICS, getTopicById, getLessonItemById, getExamQuestionsForTopics } from './data';
import { loadStudyState, saveStudyState, recordExamAttempt } from './utils/storage';
import { Navigation, ActiveTab } from './components/layout/Navigation';
import { Header } from './components/layout/Header';
import { CheatSheetModal } from './components/layout/CheatSheetModal';
import { NameModal } from './components/layout/NameModal';
import { HomeView } from './components/home/HomeView';
import { LearnTopicList } from './components/learn/LearnTopicList';
import { TopicDetailView } from './components/learn/TopicDetailView';
import { LessonPlayer } from './components/learn/LessonPlayer';
import { ExamSetupView } from './components/exams/ExamSetupView';
import { ExamEngine } from './components/exams/ExamEngine';
import { ExamResultView } from './components/exams/ExamResultView';
import { ProgressView } from './components/progress/ProgressView';

export function App() {
  const [studyState, setStudyState] = useState<UserStudyState>(loadStudyState);
  const [activeTab, setActiveTab] = useState<ActiveTab>('home');

  // Sub-view states for Learn
  const [selectedTopic, setSelectedTopic] = useState<Topic | null>(null);
  const [activeLesson, setActiveLesson] = useState<LessonItem | null>(null);

  // Sub-view states for Exams
  const [examState, setExamState] = useState<'setup' | 'running' | 'result'>('setup');
  const [examQuestions, setExamQuestions] = useState<ExamQuestion[]>([]);
  const [examSelectedTopics, setExamSelectedTopics] = useState<TopicId[]>(['tenses']);
  const [examIsTimed, setExamIsTimed] = useState(false);
  const [lastExamAttempt, setLastExamAttempt] = useState<ExamAttempt | null>(null);

  // Modals
  const [cheatSheetTopic, setCheatSheetTopic] = useState<Topic | null>(null);
  const [showNameModal, setShowNameModal] = useState(false);

  // Apply theme to document element
  useEffect(() => {
    document.documentElement.setAttribute('data-theme', studyState.theme);
  }, [studyState.theme]);

  const updateState = (updater: (prev: UserStudyState) => UserStudyState) => {
    setStudyState(prev => {
      const next = updater(prev);
      saveStudyState(next);
      return next;
    });
  };

  const handleToggleTheme = () => {
    updateState(prev => ({
      ...prev,
      theme: prev.theme === 'dark' ? 'light' : 'dark'
    }));
  };

  const handleUpdateName = (newName: string) => {
    updateState(prev => ({
      ...prev,
      userName: newName
    }));
  };

  const handleResetProgress = () => {
    const fresh: UserStudyState = {
      userName: studyState.userName,
      theme: studyState.theme,
      lessonProgress: {},
      examHistory: [],
      weakSpots: []
    };
    setStudyState(fresh);
    saveStudyState(fresh);
    setActiveLesson(null);
    setSelectedTopic(null);
    setExamState('setup');
    setActiveTab('home');
  };

  // Find last active lesson & topic for the continue card
  let lastActiveLesson: LessonItem | undefined;
  let lastActiveTopic: Topic | undefined;
  if (studyState.lastActiveLessonId) {
    const found = getLessonItemById(studyState.lastActiveLessonId);
    if (found) {
      lastActiveLesson = found.lesson;
      lastActiveTopic = found.topic;
    }
  }

  // Handle Tab Switch
  const handleTabChange = (tab: ActiveTab) => {
    setActiveTab(tab);
    // Reset transient sub-views
    if (tab !== 'learn') {
      setActiveLesson(null);
    }
    if (tab !== 'exams') {
      setExamState('setup');
    }
  };

  // Start Exam Flow
  const handleStartExam = (selectedTopicIds: TopicId[], count: number, timed: boolean) => {
    const allAvailable = getExamQuestionsForTopics(selectedTopicIds);
    // Shuffle and pick
    const shuffled = [...allAvailable].sort(() => 0.5 - Math.random());
    const picked = shuffled.slice(0, Math.min(count, shuffled.length));

    setExamQuestions(picked);
    setExamSelectedTopics(selectedTopicIds);
    setExamIsTimed(timed);
    setExamState('running');
  };

  const handleFinishExam = (attempt: ExamAttempt) => {
    const updated = recordExamAttempt(attempt);
    setStudyState(updated);
    setLastExamAttempt(attempt);
    setExamState('result');
  };

  // Practice a weak spot directly
  const handlePracticeWeakSpot = (lessonItemId: string) => {
    const found = getLessonItemById(lessonItemId);
    if (found) {
      setSelectedTopic(found.topic);
      setActiveLesson(found.lesson);
      setActiveTab('learn');
    }
  };

  return (
    <div className="app-layout">
      {/* Side Rail (Desktop) & Bottom Navigation (Mobile) */}
      <Navigation activeTab={activeTab} onTabChange={handleTabChange} />

      {/* Main Viewport */}
      <main className="main-viewport">
        <div className="content-column">
          {/* Header */}
          <Header
            studyState={studyState}
            onToggleTheme={handleToggleTheme}
            onEditName={() => setShowNameModal(true)}
          />

          {/* 1. HOME TAB */}
          {activeTab === 'home' && (
            <HomeView
              topics={ALL_TOPICS}
              studyState={studyState}
              lastActiveLesson={lastActiveLesson}
              lastActiveTopic={lastActiveTopic}
              onResumeLesson={(lesson) => {
                const found = getLessonItemById(lesson.id);
                if (found) {
                  setSelectedTopic(found.topic);
                  setActiveLesson(lesson);
                  setActiveTab('learn');
                }
              }}
              onSelectTopic={(topic) => {
                setSelectedTopic(topic);
                setActiveTab('learn');
              }}
              onStartExamTab={() => setActiveTab('exams')}
            />
          )}

          {/* 2. LEARN TAB */}
          {activeTab === 'learn' && (
            <>
              {activeLesson && selectedTopic ? (
                <LessonPlayer
                  lesson={activeLesson}
                  topic={selectedTopic}
                  onExit={() => {
                    setActiveLesson(null);
                    setStudyState(loadStudyState());
                  }}
                  onOpenCheatSheet={() => setCheatSheetTopic(selectedTopic)}
                  onNextLesson={() => {
                    const currentIndex = selectedTopic.lessonItems.findIndex(l => l.id === activeLesson.id);
                    if (currentIndex >= 0 && currentIndex + 1 < selectedTopic.lessonItems.length) {
                      setActiveLesson(selectedTopic.lessonItems[currentIndex + 1]);
                    } else {
                      setActiveLesson(null);
                    }
                    setStudyState(loadStudyState());
                  }}
                />
              ) : selectedTopic ? (
                <TopicDetailView
                  topic={selectedTopic}
                  studyState={studyState}
                  onSelectLesson={(lesson) => setActiveLesson(lesson)}
                  onOpenCheatSheet={() => setCheatSheetTopic(selectedTopic)}
                  onBack={() => setSelectedTopic(null)}
                />
              ) : (
                <LearnTopicList
                  topics={ALL_TOPICS}
                  studyState={studyState}
                  onSelectTopic={(topic) => setSelectedTopic(topic)}
                />
              )}
            </>
          )}

          {/* 3. EXAMS TAB */}
          {activeTab === 'exams' && (
            <>
              {examState === 'setup' && (
                <ExamSetupView
                  topics={ALL_TOPICS}
                  availableQuestionsCount={60}
                  onStart={handleStartExam}
                />
              )}
              {examState === 'running' && (
                <ExamEngine
                  questions={examQuestions}
                  selectedTopics={examSelectedTopics}
                  isTimed={examIsTimed}
                  onFinish={handleFinishExam}
                  onExit={() => setExamState('setup')}
                />
              )}
              {examState === 'result' && lastExamAttempt && (
                <ExamResultView
                  attempt={lastExamAttempt}
                  studyState={studyState}
                  onRetake={() => handleStartExam(examSelectedTopics, lastExamAttempt.questionCount, examIsTimed)}
                  onPracticeWeakSpots={() => {
                    if (lastExamAttempt.mistakes.length > 0 && lastExamAttempt.mistakes[0].lessonItemId) {
                      handlePracticeWeakSpot(lastExamAttempt.mistakes[0].lessonItemId);
                    } else {
                      setActiveTab('learn');
                    }
                  }}
                  onGoHome={() => {
                    setExamState('setup');
                    setActiveTab('home');
                  }}
                />
              )}
            </>
          )}

          {/* 4. PROGRESS TAB */}
          {activeTab === 'progress' && (
            <ProgressView
              topics={ALL_TOPICS}
              studyState={studyState}
              onPracticeWeakSpot={handlePracticeWeakSpot}
              onResetProgress={handleResetProgress}
            />
          )}
        </div>
      </main>

      {/* Cheat Sheet Bottom Sheet Modal */}
      {cheatSheetTopic && (
        <CheatSheetModal
          topic={cheatSheetTopic}
          onClose={() => setCheatSheetTopic(null)}
        />
      )}

      {/* Name Edit Modal */}
      {showNameModal && (
        <NameModal
          currentName={studyState.userName}
          onSave={handleUpdateName}
          onClose={() => setShowNameModal(false)}
        />
      )}
    </div>
  );
}

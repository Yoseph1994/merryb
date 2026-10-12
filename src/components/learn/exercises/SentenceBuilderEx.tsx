import React, { useState, useEffect } from 'react';
import { RotateCcw } from 'lucide-react';
import { PracticeExercise } from '../../../types';

interface Props {
  exercise: PracticeExercise;
  selectedAnswer: any;
  isSubmitted: boolean;
  onSelect: (val: any) => void;
}

export const SentenceBuilderEx: React.FC<Props> = ({
  exercise,
  selectedAnswer,
  isSubmitted,
  onSelect
}) => {
  const [selectedWords, setSelectedWords] = useState<string[]>([]);
  const [availableWords, setAvailableWords] = useState<{ id: number; text: string; used: boolean }[]>([]);

  useEffect(() => {
    const initial = (exercise.jumbledWords || []).map((text, id) => ({ id, text, used: false }));
    setAvailableWords(initial);
    setSelectedWords([]);
  }, [exercise]);

  const handleTapAvailable = (item: { id: number; text: string; used: boolean }) => {
    if (isSubmitted || item.used) return;
    const nextSelected = [...selectedWords, item.text];
    setSelectedWords(nextSelected);

    setAvailableWords(prev =>
      prev.map(w => (w.id === item.id ? { ...w, used: true } : w))
    );

    onSelect(nextSelected.join(' '));
  };

  const handleTapSelected = (wordIndex: number) => {
    if (isSubmitted) return;
    const wordToRemove = selectedWords[wordIndex];
    const nextSelected = selectedWords.filter((_, idx) => idx !== wordIndex);
    setSelectedWords(nextSelected);

    // Free the first used instance in availableWords
    let freed = false;
    setAvailableWords(prev =>
      prev.map(w => {
        if (!freed && w.text === wordToRemove && w.used) {
          freed = true;
          return { ...w, used: false };
        }
        return w;
      })
    );

    onSelect(nextSelected.join(' '));
  };

  const handleReset = () => {
    if (isSubmitted) return;
    setSelectedWords([]);
    setAvailableWords(prev => prev.map(w => ({ ...w, used: false })));
    onSelect('');
  };

  return (
    <div>
      <div style={{ fontSize: '0.85rem', color: 'var(--text-secondary)', marginBottom: '8px' }}>
        Tap word chips in order to construct the correct sentence:
      </div>

      {/* Target construction slot */}
      <div
        style={{
          minHeight: '60px',
          padding: '12px 16px',
          background: 'var(--bg-surface-subtle)',
          borderRadius: 'var(--radius-md)',
          border: '1.5px dashed var(--border-medium)',
          display: 'flex',
          flexWrap: 'wrap',
          gap: '8px',
          alignItems: 'center',
          marginBottom: '16px'
        }}
      >
        {selectedWords.length === 0 ? (
          <span style={{ color: 'var(--text-muted)', fontSize: '0.9rem' }}>Tap words below to place them here...</span>
        ) : (
          selectedWords.map((word, idx) => (
            <button
              key={idx}
              onClick={() => handleTapSelected(idx)}
              disabled={isSubmitted}
              style={{
                background: 'var(--accent-subtle)',
                border: '1.5px solid var(--accent-primary)',
                color: 'var(--accent-primary)',
                fontWeight: 600,
                padding: '10px 16px',
                borderRadius: 'var(--radius-md)',
                fontSize: '1rem',
                minHeight: '44px',
                display: 'inline-flex',
                alignItems: 'center',
                cursor: isSubmitted ? 'default' : 'pointer'
              }}
            >
              {word}
            </button>
          ))
        )}
      </div>

      {/* Available words bank */}
      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '10px', marginBottom: '14px' }}>
        {availableWords.map(item => (
          <button
            key={item.id}
            onClick={() => handleTapAvailable(item)}
            disabled={item.used || isSubmitted}
            style={{
              background: 'var(--bg-surface)',
              border: '1.5px solid var(--border-medium)',
              color: 'var(--text-main)',
              fontWeight: 600,
              padding: '10px 16px',
              borderRadius: 'var(--radius-md)',
              fontSize: '1rem',
              minHeight: '44px',
              display: 'inline-flex',
              alignItems: 'center',
              cursor: item.used || isSubmitted ? 'default' : 'pointer',
              opacity: item.used ? 0.25 : 1
            }}
          >
            {item.text}
          </button>
        ))}
      </div>

      {!isSubmitted && selectedWords.length > 0 && (
        <button
          onClick={handleReset}
          className="btn-ghost"
          style={{ padding: '4px 10px', fontSize: '0.8rem', display: 'flex', alignItems: 'center', gap: '6px' }}
        >
          <RotateCcw size={14} /> Clear order
        </button>
      )}
    </div>
  );
};

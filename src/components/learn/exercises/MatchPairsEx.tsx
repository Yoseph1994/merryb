import React, { useState } from 'react';
import { Check } from 'lucide-react';
import { PracticeExercise } from '../../../types';

interface Props {
  exercise: PracticeExercise;
  selectedAnswer: any;
  isSubmitted: boolean;
  onSelect: (val: any) => void;
}

export const MatchPairsEx: React.FC<Props> = ({
  exercise,
  selectedAnswer,
  isSubmitted,
  onSelect
}) => {
  const pairs = exercise.pairs || [];
  const [selectedLeft, setSelectedLeft] = useState<string | null>(null);
  const [userMatches, setUserMatches] = useState<Record<string, string>>({});

  const handleTapLeft = (leftText: string) => {
    if (isSubmitted || userMatches[leftText]) return;
    setSelectedLeft(leftText);
  };

  const handleTapRight = (rightText: string) => {
    if (isSubmitted || !selectedLeft) return;
    const nextMatches = { ...userMatches, [selectedLeft]: rightText };
    setUserMatches(nextMatches);
    setSelectedLeft(null);

    // If all matched, submit
    if (Object.keys(nextMatches).length === pairs.length) {
      onSelect(nextMatches);
    }
  };

  return (
    <div>
      <div style={{ fontSize: '0.85rem', color: 'var(--text-secondary)', marginBottom: '14px' }}>
        Tap an item on the left, then tap its match on the right:
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px' }}>
        {/* Left column */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
          {pairs.map((p, idx) => {
            const isMatched = !!userMatches[p.left];
            const isSelected = selectedLeft === p.left;

            return (
              <button
                key={idx}
                onClick={() => handleTapLeft(p.left)}
                disabled={isSubmitted || isMatched}
                style={{
                  padding: '10px 14px',
                  borderRadius: 'var(--radius-sm)',
                  border: isSelected
                    ? '2px solid var(--accent-primary)'
                    : isMatched
                    ? '1.5px solid var(--color-success-border)'
                    : '1px solid var(--border-medium)',
                  background: isMatched
                    ? 'var(--color-success-bg)'
                    : isSelected
                    ? 'var(--accent-subtle)'
                    : 'var(--bg-surface)',
                  color: 'var(--text-main)',
                  fontWeight: 600,
                  fontSize: '0.92rem',
                  textAlign: 'left',
                  cursor: isMatched || isSubmitted ? 'default' : 'pointer'
                }}
              >
                {p.left} {isMatched && <Check size={14} style={{ display: 'inline', marginLeft: 4 }} color="var(--color-success-icon)" />}
              </button>
            );
          })}
        </div>

        {/* Right column */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
          {pairs.map((p, idx) => {
            const matchedLeftKey = Object.keys(userMatches).find(k => userMatches[k] === p.right);
            const isMatched = !!matchedLeftKey;

            return (
              <button
                key={idx}
                onClick={() => handleTapRight(p.right)}
                disabled={isSubmitted || isMatched}
                style={{
                  padding: '10px 14px',
                  borderRadius: 'var(--radius-sm)',
                  border: isMatched
                    ? '1.5px solid var(--color-success-border)'
                    : '1px solid var(--border-medium)',
                  background: isMatched ? 'var(--color-success-bg)' : 'var(--bg-surface)',
                  color: 'var(--text-main)',
                  fontWeight: 600,
                  fontSize: '0.92rem',
                  textAlign: 'left',
                  cursor: isMatched || isSubmitted ? 'default' : 'pointer'
                }}
              >
                {p.right}
              </button>
            );
          })}
        </div>
      </div>
    </div>
  );
};

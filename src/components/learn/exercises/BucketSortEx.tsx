import React, { useState, useEffect } from 'react';
import { Check, X } from 'lucide-react';
import { PracticeExercise } from '../../../types';

interface Props {
  exercise: PracticeExercise;
  selectedAnswer: any;
  isSubmitted: boolean;
  onSelect: (val: any) => void;
}

export const BucketSortEx: React.FC<Props> = ({
  exercise,
  selectedAnswer,
  isSubmitted,
  onSelect
}) => {
  const buckets = exercise.buckets || ['Bucket A', 'Bucket B'];
  const items = exercise.itemsToSort || [];

  // Map of itemIndex -> bucketIndex
  const [placements, setPlacements] = useState<Record<number, number>>({});
  const [activeItemIndex, setActiveItemIndex] = useState<number>(0);

  useEffect(() => {
    setPlacements({});
    setActiveItemIndex(0);
  }, [exercise]);

  const handlePlaceItem = (bucketIdx: number) => {
    if (isSubmitted || activeItemIndex >= items.length) return;
    const next = { ...placements, [activeItemIndex]: bucketIdx };
    setPlacements(next);

    const nextIndex = activeItemIndex + 1;
    setActiveItemIndex(nextIndex);

    if (nextIndex >= items.length) {
      onSelect(next);
    }
  };

  const currentItem = items[activeItemIndex];

  return (
    <div>
      <div style={{ fontSize: '0.85rem', color: 'var(--text-secondary)', marginBottom: '14px' }}>
        Sort each item into its matching category:
      </div>

      {/* Active item to sort */}
      {currentItem && !isSubmitted && (
        <div
          style={{
            background: 'var(--bg-surface)',
            border: '2px solid var(--accent-primary)',
            borderRadius: 'var(--radius-md)',
            padding: '16px',
            textAlign: 'center',
            marginBottom: '16px',
            boxShadow: 'var(--shadow-sm)'
          }}
        >
          <span style={{ fontSize: '0.75rem', color: 'var(--text-muted)', textTransform: 'uppercase', display: 'block', marginBottom: '4px' }}>
            Item {activeItemIndex + 1} of {items.length}
          </span>
          <span style={{ fontSize: '1.2rem', fontWeight: 700, color: 'var(--text-main)' }}>
            "{currentItem.text}"
          </span>
        </div>
      )}

      {/* Buckets */}
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '14px' }}>
        {buckets.map((bName, bIdx) => (
          <div
            key={bIdx}
            style={{
              border: '1.5px solid var(--border-medium)',
              borderRadius: 'var(--radius-md)',
              background: 'var(--bg-surface-subtle)',
              padding: '14px',
              minHeight: '140px',
              display: 'flex',
              flexDirection: 'column'
            }}
          >
            <div style={{ fontWeight: 700, fontSize: '0.95rem', color: 'var(--text-main)', marginBottom: '10px', textAlign: 'center' }}>
              {bName}
            </div>

            {/* List of items placed in this bucket */}
            <div style={{ flex: 1, display: 'flex', flexDirection: 'column', gap: '6px', marginBottom: '10px' }}>
              {items.map((item, iIdx) => {
                if (placements[iIdx] !== bIdx) return null;
                const isCorrect = item.correctBucketIndex === bIdx;

                return (
                  <div
                    key={iIdx}
                    style={{
                      padding: '6px 10px',
                      borderRadius: 'var(--radius-sm)',
                      background: 'var(--bg-surface)',
                      fontSize: '0.88rem',
                      fontWeight: 600,
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'space-between',
                      border: isSubmitted
                        ? isCorrect
                          ? '1px solid var(--color-success-border)'
                          : '1px solid var(--color-error-border)'
                        : '1px solid var(--border-subtle)'
                    }}
                  >
                    <span>{item.text}</span>
                    {isSubmitted && isCorrect && <Check size={14} color="var(--color-success-icon)" />}
                    {isSubmitted && !isCorrect && <X size={14} color="var(--color-error-icon)" />}
                  </div>
                );
              })}
            </div>

            {/* Place button if still sorting */}
            {!isSubmitted && currentItem && (
              <button
                className="btn btn-primary"
                onClick={() => handlePlaceItem(bIdx)}
                style={{ width: '100%', padding: '8px', fontSize: '0.85rem', minHeight: '38px' }}
              >
                Sort Here
              </button>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

import React from 'react';
import { ExplanationStep } from '../../types';

interface Props {
  step: ExplanationStep;
  stepNumber: number;
  totalSteps: number;
  onNext: () => void;
  onPrev: () => void;
  canPrev: boolean;
}

export const ExplanationStepView: React.FC<Props> = ({
  step,
  stepNumber,
  totalSteps,
  onNext,
  onPrev,
  canPrev
}) => {
  const visual = step.visual;

  return (
    <div className="card explanation-card">
      {/* Step counter */}
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '16px' }}>
        <span style={{ fontSize: '0.8rem', fontWeight: 700, color: 'var(--accent-primary)', textTransform: 'uppercase', letterSpacing: '0.5px' }}>
          Concept Step {stepNumber} of {totalSteps}
        </span>
      </div>

      {/* Step Title */}
      {step.title && (
        <h3 style={{ fontSize: '1.35rem', fontWeight: 700, color: 'var(--text-main)', marginBottom: '12px', lineHeight: 1.3 }}>
          {step.title}
        </h3>
      )}

      {/* Explanation Text (Short, Simple, max ~40 words) */}
      <p style={{ fontSize: '1.08rem', color: 'var(--text-secondary)', lineHeight: 1.65, marginBottom: '24px' }}>
        {step.text}
      </p>

      {/* Visual Component Render */}
      {visual && (
        <div style={{ marginBottom: '28px' }}>
          {/* 1. Formula Visual */}
          {visual.type === 'formula' && visual.formulaTokens && (
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                flexWrap: 'wrap',
                gap: '8px',
                padding: '18px 14px',
                background: 'var(--bg-surface-subtle)',
                borderRadius: 'var(--radius-md)',
                fontSize: '1rem',
                fontWeight: 600
              }}
            >
              {visual.formulaTokens.map((tok, idx) => {
                let badgeBg = 'transparent';
                let textColor = 'var(--text-main)';

                if (tok.highlight) {
                  if (tok.color === 'past') {
                    badgeBg = 'var(--time-past-bg)';
                    textColor = 'var(--time-past)';
                  } else if (tok.color === 'present') {
                    badgeBg = 'var(--time-present-bg)';
                    textColor = 'var(--time-present)';
                  } else if (tok.color === 'future') {
                    badgeBg = 'var(--time-future-bg)';
                    textColor = 'var(--time-future)';
                  } else {
                    badgeBg = 'var(--accent-subtle)';
                    textColor = 'var(--accent-primary)';
                  }
                }

                return (
                  <span
                    key={idx}
                    style={{
                      background: badgeBg,
                      color: textColor,
                      padding: tok.highlight ? '5px 12px' : '0 2px',
                      borderRadius: tok.highlight ? 'var(--radius-sm)' : '0'
                    }}
                  >
                    {tok.text}
                  </span>
                );
              })}
            </div>
          )}

          {/* 2. Timeline Visual */}
          {visual.type === 'timeline' && visual.items && (
            <div
              style={{
                display: 'flex',
                flexDirection: 'column',
                gap: '12px',
                padding: '16px',
                background: 'var(--bg-surface-subtle)',
                borderRadius: 'var(--radius-md)'
              }}
            >
              {visual.items.map((item, idx) => {
                let borderCol = 'var(--accent-primary)';
                if (item.color === 'past') borderCol = 'var(--time-past)';
                if (item.color === 'present') borderCol = 'var(--time-present)';
                if (item.color === 'future') borderCol = 'var(--time-future)';

                return (
                  <div
                    key={idx}
                    style={{
                      borderLeft: `4px solid ${borderCol}`,
                      paddingLeft: '12px'
                    }}
                  >
                    <div style={{ fontWeight: 700, fontSize: '0.85rem', color: borderCol, textTransform: 'uppercase' }}>
                      {item.label}
                    </div>
                    <div style={{ color: 'var(--text-main)', fontSize: '0.98rem', fontWeight: 500 }}>
                      {item.value}
                    </div>
                  </div>
                );
              })}
            </div>
          )}

          {/* 3. Chips Visual */}
          {visual.type === 'chips' && visual.items && (
            <div className="visual-chips-grid">
              {visual.items.map((chip, idx) => (
                <div
                  key={idx}
                  style={{
                    background: 'var(--bg-surface-subtle)',
                    border: '1px solid var(--border-subtle)',
                    borderRadius: 'var(--radius-md)',
                    padding: '14px 16px'
                  }}
                >
                  <div style={{ fontSize: '0.8rem', fontWeight: 700, color: 'var(--accent-primary)', textTransform: 'uppercase', marginBottom: '2px' }}>
                    {chip.label}
                  </div>
                  {chip.value && (
                    <div style={{ fontSize: '0.95rem', color: 'var(--text-main)', fontWeight: 500 }}>
                      {chip.value}
                    </div>
                  )}
                </div>
              ))}
            </div>
          )}

          {/* 4. Comparison Visual */}
          {visual.type === 'comparison' && (
            <div className="visual-comparison-grid">
              {visual.leftSide && (
                <div
                  style={{
                    padding: '16px',
                    borderRadius: 'var(--radius-md)',
                    background: 'var(--bg-surface-subtle)',
                    border: '1px solid var(--border-subtle)'
                  }}
                >
                  <div style={{ fontSize: '0.8rem', fontWeight: 700, color: 'var(--text-muted)', textTransform: 'uppercase', marginBottom: '6px' }}>
                    {visual.leftSide.label}
                  </div>
                  <div style={{ fontSize: '0.98rem', color: 'var(--text-main)', lineHeight: 1.5 }}>
                    {visual.leftSide.text}
                  </div>
                </div>
              )}
              {visual.rightSide && (
                <div
                  style={{
                    padding: '16px',
                    borderRadius: 'var(--radius-md)',
                    background: 'var(--accent-subtle)',
                    border: '1px solid rgba(79, 70, 229, 0.25)'
                  }}
                >
                  <div style={{ fontSize: '0.8rem', fontWeight: 700, color: 'var(--accent-primary)', textTransform: 'uppercase', marginBottom: '6px' }}>
                    {visual.rightSide.label}
                  </div>
                  <div style={{ fontSize: '0.98rem', color: 'var(--text-main)', fontWeight: 500, lineHeight: 1.5 }}>
                    {visual.rightSide.text}
                  </div>
                </div>
              )}
            </div>
          )}

          {/* 5. Table Visual */}
          {visual.type === 'table' && visual.headers && visual.rows && (
            <div className="visual-table-wrapper">
              <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: '0.9rem' }}>
                <thead>
                  <tr style={{ background: 'var(--bg-surface-subtle)', borderBottom: '1px solid var(--border-subtle)' }}>
                    {visual.headers.map((h, i) => (
                      <th key={i} style={{ padding: '10px 14px', textAlign: 'left', fontWeight: 700, color: 'var(--text-secondary)' }}>
                        {h}
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {visual.rows.map((row, rIdx) => (
                    <tr key={rIdx} style={{ borderBottom: rIdx < visual.rows!.length - 1 ? '1px solid var(--border-subtle)' : 'none' }}>
                      {row.map((cell, cIdx) => (
                        <td key={cIdx} style={{ padding: '10px 14px', color: 'var(--text-main)' }}>
                          {cell}
                        </td>
                      ))}
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}
        </div>
      )}

      {/* Navigation Buttons */}
      <div className="step-nav-footer">
        {canPrev ? (
          <button className="btn btn-secondary" onClick={onPrev}>
            Back
          </button>
        ) : <div />}

        <button className="btn btn-primary" onClick={onNext}>
          {stepNumber === totalSteps ? 'Start Practice' : 'Continue'}
        </button>
      </div>
    </div>
  );
};

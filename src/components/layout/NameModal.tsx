import React, { useState } from 'react';
import { X, User } from 'lucide-react';

interface Props {
  currentName: string;
  onSave: (newName: string) => void;
  onClose: () => void;
}

export const NameModal: React.FC<Props> = ({ currentName, onSave, onClose }) => {
  const [name, setName] = useState(currentName);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (name.trim()) {
      onSave(name.trim());
      onClose();
    }
  };

  return (
    <div className="modal-overlay" onClick={onClose} role="dialog" aria-modal="true">
      <div className="bottom-sheet" onClick={e => e.stopPropagation()} style={{ maxWidth: '420px', margin: 'auto' }}>
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '16px' }}>
          <h3 style={{ fontSize: '1.2rem', fontWeight: 700, color: 'var(--text-main)', display: 'flex', alignItems: 'center', gap: '8px' }}>
            <User size={18} color="var(--accent-primary)" /> Student Name
          </h3>
          <button className="btn-ghost btn-icon-only" onClick={onClose} aria-label="Close">
            <X size={18} />
          </button>
        </div>

        <form onSubmit={handleSubmit}>
          <div style={{ marginBottom: '20px' }}>
            <label style={{ display: 'block', fontSize: '0.85rem', color: 'var(--text-secondary)', marginBottom: '8px' }}>
              Enter name for score certificates and greetings:
            </label>
            <input
              type="text"
              value={name}
              onChange={e => setName(e.target.value)}
              placeholder="e.g. Merry"
              maxLength={30}
              autoFocus
              style={{
                width: '100%',
                padding: '12px 14px',
                borderRadius: 'var(--radius-md)',
                border: '1.5px solid var(--border-medium)',
                background: 'var(--bg-surface-subtle)',
                color: 'var(--text-main)',
                fontSize: '1rem',
                fontFamily: 'var(--font-sans)',
                outline: 'none'
              }}
            />
          </div>

          <div style={{ display: 'flex', justifyContent: 'flex-end', gap: '10px' }}>
            <button type="button" className="btn btn-secondary" onClick={onClose}>
              Cancel
            </button>
            <button type="submit" className="btn btn-primary" disabled={!name.trim()}>
              Save Name
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

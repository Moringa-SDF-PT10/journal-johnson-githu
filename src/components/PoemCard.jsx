import React from "react";

const PoemCard = ({ poem, onToggleRead }) => {
  return (
    <div className="card">
      <header className="card-header">
        <h3 className="card-title">{poem.title}</h3>
      </header>
      <section className="card-content">
        <p className="card-text">{poem.body}</p>
      </section>
      <footer className="card-footer">
        <button
          className="toggle-button"
          onClick={() => onToggleRead(poem.id)}
        >
          {poem.isRead ? "UnMark" : "Mark as Important"}
        </button>
      </footer>

      <style jsx>{`
        .card {
          margin-bottom: 1rem;
          overflow: hidden;
          border: 1px solid #e5e7eb; /* gray-200 */
          border-radius: 0.5rem;
          background-color: white;
          box-shadow: 0 1px 2px rgba(0, 0, 0, 0.05);
          transition: box-shadow 0.3s ease;
        }
        .card:hover {
          box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
        }
        .card-header {
          padding: 0.75rem 1rem;
          border-bottom: 1px solid #f3f4f6; /* gray-100 */
        }
        .card-title {
          margin: 0;
          font-size: 1.25rem;
          font-weight: 600;
          color: #111827; /* gray-900 */
        }
        .card-content {
          padding: 0.75rem 1rem;
        }
        .card-text {
          margin: 0;
          white-space: pre-wrap;
          color: #4b5563; /* gray-700 */
        }
        .card-footer {
          padding: 0.5rem 1rem;
          border-top: 1px solid #f3f4f6; /* gray-100 */
          display: flex;
          justify-content: flex-end;
        }
        .toggle-button {
          font-size: 0.875rem;
          padding: 0.25rem 0.75rem;
          border: 1px solid #d1d5db; /* gray-300 */
          border-radius: 0.375rem;
          background-color: transparent;
          color: #374151; /* gray-700 */
          cursor: pointer;
          transition: background-color 0.2s ease, box-shadow 0.2s ease;
        }
        .toggle-button:hover {
          background-color: #f3f4f6; /* gray-100 */
        }
        .toggle-button:focus {
          outline: none;
          box-shadow: 0 0 0 2px rgba(156, 163, 175, 0.5); /* focus ring */
        }
      `}</style>
    </div>
  );
};

export default PoemCard;

import { useState } from "react";
import { v4 as uuidv4 } from "uuid";

const PoemForm = ({ onAddPoem }) => {
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!title.trim() || !body.trim()) return;

    const newPoem = {
      id: uuidv4(),
      title: title.trim(),
      body: body.trim(),
      isRead: false,
    };

    onAddPoem(newPoem);
    setTitle("");
    setBody("");
  };

  return (
    <div className="card mb-6">
      <form onSubmit={handleSubmit}>
        <header className="card-header">
          <h2 className="card-title">Create a New Journal</h2>
        </header>

        <section className="card-content space-y-4">
          <div className="form-group space-y-1">
            <label htmlFor="title" className="label">
              Title
            </label>
            <input
              id="title"
              type="text"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              placeholder="Enter Journal title"
              required
              className="input"
            />
          </div>

          <div className="form-group space-y-1">
            <label htmlFor="body" className="label">
              Content
            </label>
            <textarea
              id="body"
              value={body}
              onChange={(e) => setBody(e.target.value)}
              placeholder="Write your Journal here"
              required
              className="textarea"
              rows={6}
            />
          </div>
        </section>

        <footer className="card-footer">
          <button type="submit" className="button">
            Add Journal
          </button>
        </footer>
      </form>

      <style jsx>{`
        .mb-6 {
          margin-bottom: 1.5rem;
        }
        .card {
          border: 1px solid #e5e7eb; /* gray-200 */
          border-radius: 0.5rem;
          background: white;
          box-shadow: 0 1px 2px rgba(0, 0, 0, 0.05);
          overflow: hidden;
          transition: box-shadow 0.3s ease;
        }
        .card:hover {
          box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
        }
        .card-header {
          padding: 1rem;
          border-bottom: 1px solid #f3f4f6; /* gray-100 */
        }
        .card-title {
          margin: 0;
          font-size: 1.25rem;
          font-weight: 600;
          color: #111827; /* gray-900 */
        }
        .card-content {
          padding: 1rem;
        }
        .space-y-4 > :not(:last-child) {
          margin-bottom: 1rem;
        }
        .space-y-1 > :not(:last-child) {
          margin-bottom: 0.25rem;
        }
        .label {
          font-size: 0.875rem;
          font-weight: 500;
          color: #374151; /* gray-700 */
          display: block;
        }
        .input,
        .textarea {
          width: 100%;
          padding: 0.5rem 0.75rem;
          font-size: 1rem;
          border: 1px solid #d1d5db; /* gray-300 */
          border-radius: 0.375rem;
          color: #111827; /* gray-900 */
          background-color: white;
          resize: vertical;
          transition: border-color 0.2s ease, box-shadow 0.2s ease;
        }
        .input:focus,
        .textarea:focus {
          outline: none;
          border-color: #2563eb; /* blue-600 */
          box-shadow: 0 0 0 3px rgba(59, 130, 246, 0.3); /* blue focus */
        }
        .textarea {
          min-height: 150px;
        }
        .card-footer {
          padding: 0.75rem 1rem;
          border-top: 1px solid #f3f4f6; /* gray-100 */
          display: flex;
          justify-content: flex-end;
        }
        .button {
          background-color: transparent;
          border: 1px solid #3b82f6; /* blue-500 */
          color: #3b82f6;
          padding: 0.5rem 1rem;
          font-size: 1rem;
          font-weight: 600;
          border-radius: 0.375rem;
          cursor: pointer;
          transition: background-color 0.2s ease, color 0.2s ease;
        }
        .button:hover {
          background-color: #3b82f6;
          color: white;
        }
        .button:focus {
          outline: none;
          box-shadow: 0 0 0 3px rgba(59, 130, 246, 0.5);
        }
      `}</style>
    </div>
  );
};

export default PoemForm;

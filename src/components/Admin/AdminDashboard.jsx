import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './AdminDashboard.css';

const AdminDashboard = () => {
  const [messages, setMessages] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem('adminToken');
    if (!token) {
      navigate('/admin/login');
      return;
    }

    fetchMessages();
  }, [navigate]);

  const fetchMessages = async () => {
    try {
      const response = await fetch('/api/admin/messages', {
        headers: {
          'Authorization': `Bearer ${localStorage.getItem('adminToken')}`
        }
      });

      if (!response.ok) {
        throw new Error('Failed to fetch messages');
      }

      const data = await response.json();
      setMessages(data);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  const handleLogout = () => {
    localStorage.removeItem('adminToken');
    navigate('/admin/login');
  };

  const handleDeleteMessage = async (messageId) => {
    try {
      const response = await fetch(`/api/admin/messages/${messageId}`, {
        method: 'DELETE',
        headers: {
          'Authorization': `Bearer ${localStorage.getItem('adminToken')}`
        }
      });

      if (!response.ok) {
        throw new Error('Failed to delete message');
      }

      setMessages(prev => prev.filter(msg => msg.id !== messageId));
    } catch (err) {
      setError(err.message);
    }
  };

  if (loading) {
    return <div className="loading">Loading...</div>;
  }

  return (
    <div className="admin-dashboard">
      <header className="admin-header">
        <h1>Chatbot Admin Dashboard</h1>
        <button onClick={handleLogout} className="logout-button">
          Logout
        </button>
      </header>

      {error && <div className="error-message">{error}</div>}

      <div className="messages-container">
        <h2>Recent Messages</h2>
        <div className="messages-list">
          {messages.map(message => (
            <div key={message.id} className="message-item">
              <div className="message-header">
                <span className="message-sender">
                  {message.isBot ? 'Bot' : 'User'}
                </span>
                <span className="message-time">
                  {new Date(message.timestamp).toLocaleString()}
                </span>
              </div>
              <div className="message-content">{message.text}</div>
              <div className="message-actions">
                <button 
                  onClick={() => handleDeleteMessage(message.id)}
                  className="delete-button"
                >
                  Delete
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard; 
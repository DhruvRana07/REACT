import React, { useEffect } from 'react';

const Notification = ({ message, onClose, type }) => {
  useEffect(() => {
    const timer = setTimeout(() => {
      onClose();
    }, 3000);

    return () => clearTimeout(timer); 
  }, [onClose]);

  const notificationStyle = {
    backgroundColor: type === 'success' ? '#28a745' : '#e74c3c', 
    color: 'white',
    padding: '15px',
    borderRadius: '5px',
    boxShadow: '0 2px 10px rgba(0, 0, 0, 0.2)',
    position: 'fixed',
    top: '20px',
    right: '20px',
    zIndex: 1000,
  };

  return (
    <div style={notificationStyle}>
      {message}
    </div>
  );
};

export default Notification;

import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPaperPlane } from '@fortawesome/free-solid-svg-icons';

const ChatInput = ({ onSendMessage }) => {
  const [text, setText] = useState('');

  const handleChange = (e) => {
    setText(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (text.trim() !== '') {
      onSendMessage(text);
      setText('');
    }
  };

  return (
    <form onSubmit={handleSubmit} style={{ display: 'flex', alignItems: 'center', padding: '10px', borderTop: '1px solid #ddd' }}>
      <input 
        type="text" 
        value={text} 
        onChange={handleChange} 
        placeholder="Type a message..." 
        style={{ flex: 1, padding: '8px', border: '2px solid #007bff', borderRadius: '25px', marginRight: '10px' }}
      />
      <button type="submit" style={{ backgroundColor: 'transparent', border: 'none', cursor: 'pointer' }}>
        <FontAwesomeIcon icon={faPaperPlane} style={{ color: '#007bff', fontSize: '20px' }} />
      </button>
    </form>
  );
};

export default ChatInput;

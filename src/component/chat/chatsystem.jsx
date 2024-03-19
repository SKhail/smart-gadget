// ChatSystem.js
import React from 'react';
import ChatWindow from './ChatWindow';
import ChatInput from './ChatInput';
import './style.css'; // Import your CSS file

const ChatSystem = ({ messages, onSendMessage, onClose }) => {
  return (
    <div className="chat-system">
      <div className="chat-header">
        Chat
        <button className="close-button" onClick={onClose}>X</button>
      </div>
      <ChatWindow messages={messages} />
      <ChatInput onSendMessage={onSendMessage} />
    </div>
  );
};

export default ChatSystem;

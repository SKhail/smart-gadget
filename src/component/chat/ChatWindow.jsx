
import React from 'react';
import Message from './Message';

//import css
import './style.css';


const ChatWindow = ({ messages }) => {
    // Check if messages is undefined or null
    if (!messages) {
      return <div>No messages available</div>;
    }
  
    return (
      <div className="chat-window">
        {messages.map((message, index) => (
          <Message key={index} message={message} />
        ))}
      </div>
    );
  };

  export default ChatWindow;
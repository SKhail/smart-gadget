import React from 'react'
import Message from './Message'

//import css
import './style.css'

const ChatWindow = ({ messages }) => {
  // Check if messages is undefined or null
  if (!messages) {
    return <div>No messages available</div>
  }

  // Function to check if a welcome message should be displayed
  const shouldDisplayWelcomeMessage = () => {
    // Check if there are no messages or if the first message is not from the user
    return !messages.length || messages[0].sender !== 'user'
  }

  // Render the chat window with messages
  return (
    <div className='chat-window'>
      {/* Render the welcome message if necessary */}
      {shouldDisplayWelcomeMessage() && <Message key='welcome' message={{ sender: 'system', text: 'Welcome to Smart Gadget! How can we assist you today?' }} />}

      {/* Render each message */}
      {messages.map((message, index) => (
        <Message key={index} message={message} />
      ))}
    </div>
  )
}

export default ChatWindow

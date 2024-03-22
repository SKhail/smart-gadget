import React, { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPaperPlane } from '@fortawesome/free-solid-svg-icons'

const ChatInput = ({ onSendMessage }) => {
  const [text, setText] = useState('')

  const handleChange = (e) => {
    setText(e.target.value)
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    if (text.trim() !== '') {
      onSendMessage(text)
      setText('')
    }
  }

  return (
    <form onSubmit={handleSubmit} style={{ display: 'flex', alignItems: 'center', padding: '10px', borderTop: '1px solid #ddd' }}>
      <input
        type='text'
        value={text}
        onChange={handleChange}
        placeholder='Type a message...'
        style={{ flex: 1, padding: '8px', border: '2px solid #007bff', borderRadius: '25px', marginRight: '10px', outline: 'none' }}
      />
      <button
        type='submit'
        style={{
          backgroundColor: '#007bff',
          border: 'none',
          color: '#fff',
          padding: '8px 12px',
          borderRadius: '25px',
          cursor: 'pointer',
          transition: 'background-color 0.3s ease',
        }}
        onMouseEnter={(e) => (e.target.style.backgroundColor = '#0056b3')}
        onMouseLeave={(e) => (e.target.style.backgroundColor = '#007bff')}
      >
        <FontAwesomeIcon icon={faPaperPlane} style={{ fontSize: '20px' }} />
        <span style={{ marginLeft: '5px' }}></span>
      </button>
    </form>
  )
}

export default ChatInput

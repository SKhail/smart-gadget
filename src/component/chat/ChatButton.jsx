// ChatButton.js
import React from 'react'

import { FaComments } from 'react-icons/fa'

const ChatButton = ({ onClick }) => {
  return (
    <button className='chat-button' onClick={onClick}>
      <FaComments />
    </button>
  )
}

export default ChatButton

import React from 'react'
import '../Styles/Main.css'
import { ChatEngine } from 'react-chat-engine'

const Main = () => {
  return (
    <div className='chatbox'>
    <ChatEngine
    height="100vh"
    projectID="3d26d2c9-69c1-4cb3-824c-61671253b9ac"
    userName="Vegeks"
    userSecret="1234321"
    />
    </div>
  )
}

export default Main

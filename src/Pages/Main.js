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
    <div className='footer'>
     <article className="contact__option">
            <h4>Ask your query</h4>
            <a href="mailto:dummy@gmail.com" className="btn btn-primary">Send</a>
           </article>
           <article className="contact__option">
            <h4>Share your thoughts</h4>
            <a href="mailto:dummy@gmail.com" className="btn btn-primary">Send</a>
           </article>
           <article className="contact__option">
            <h4>Post something</h4>
            <a href="mailto:dummy@gmail.com" className="btn btn-primary">Send</a>
           </article>
           </div>
    </div>
  )
}

export default Main
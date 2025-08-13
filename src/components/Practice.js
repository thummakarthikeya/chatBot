import React, { useState } from 'react'

const Practice = () => {
    const [input, setInput] = useState("");
    const [output, setoutput] = useState("");

    function  handleSend(){
        
    }


  return (
    <div>
        <h1>Chat Bot</h1>

        <p className='output'></p>
        <input className='input' type='text' placeholder='type your message...' value={input} onChange={(e) => setInput(e.target.value)}  onkeydown={(e)=> e.key === "Enter" && handleSend()} />
    </div>
  )
}

export default Practice

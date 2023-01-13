import { useState } from 'react'
import './App.css'

import { io } from "socket.io-client";
import { useEffect } from 'react';

function App() {
  const socket = io('http://localhost:3000');
  const [text, setText] = useState('')

  useEffect(()=>{
    socket.on("connect", () => {
      console.log(socket.id); // x8WIv7-mJelg7on_ALbx
    });

    socket.on("message", (arg)=>{
      console.log(arg)
    })
  },[])

  function handleSubmit(){
    socket.emit('message', text)
    setText('')
  }

  return (
    <div>
      <div>{text}</div>
      <div>
        <input value={text} onChange={(e)=>setText(e.target.value)} />
      </div>
      <button onClick={handleSubmit}>Enviar</button>
    </div>
  )
}

export default App

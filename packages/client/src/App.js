import React, { useState, useEffect } from 'react'

function App() {
  const [base, setBase] = useState(8)
  const [msg, setMsg] = useState('')

  useEffect(() => {
    fetch(`/api/ms/${base}`)
      .then(data => data.json())
      .then(message => setMsg(message.msg))
  }, [base])

  return (
    <div>
      <p>{msg}</p>
      <button aria-label="button" type="button" onClick={() => setBase(Math.floor(Math.random() * 100))}>
        Click to get Lucky Number!
      </button>
    </div>
  )
}

export default App

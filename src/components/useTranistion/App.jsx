import React, { useState, useTransition } from 'react'
import NAMES from './data.json'

const App = () => {
    const [query, setQuery] = useState('')
    const [inputValue, setInputValue] = useState(query)
    const [isPending, startTransition] = useTransition()
    const changeHandler = (e) => {
        setInputValue(e.target.value)
        startTransition(() => setQuery(e.target.value) )
    }

    const filteredNames = NAMES.filter(item => {
        return item.first_name.includes(query) || item.last_name.includes(query)
    })

  return (
    <div>
        <input type="text" value={inputValue} onChange={changeHandler} />
        {isPending && <p>Updating list ...</p>}
      {filteredNames.map((item) => (
        <p key={item.id}>{item.first_name}  {item.last_name}</p>
      ))}
    </div>
  )
}

export default App

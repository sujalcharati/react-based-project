import { useState } from 'react'
import { useDebounce } from '../hooks/useDebounce'

export function DebounceDemo() {
  const [text, setText] = useState('')
  const debounced = useDebounce(text, 500)

  return (
    <div className="demo">
      <h2>4. useDebounce ⭐⭐⭐</h2>
      <p className="hint">Type fast. The debounced value only updates 500ms after you stop.</p>
      <input
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Type quickly..."
      />
      <p>Live: <code>{text || '(empty)'}</code></p>
      <p>Debounced: <code>{debounced || '(empty)'}</code></p>
    </div>
  )
}

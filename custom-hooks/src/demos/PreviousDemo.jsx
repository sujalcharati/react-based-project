import { useState } from 'react'
import { usePrevious } from '../hooks/usePrevious'

export function PreviousDemo() {
  const [count, setCount] = useState(0)
  const prevCount = usePrevious(count)

  return (
    <div className="demo">
      <h2>2. usePrevious ⭐⭐</h2>
      <p className="hint">Returns the value from the previous render.</p>
      <p>Now: <code>{count}</code> &nbsp; Before: <code>{String(prevCount)}</code></p>
      <button onClick={() => setCount(count + 1)}>+1</button>
      <button onClick={() => setCount(count - 1)}>-1</button>
    </div>
  )
}

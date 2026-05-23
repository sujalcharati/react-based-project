import { useToggle } from '../hooks/useToggle'

export function ToggleDemo() {
  const [isOn, toggle] = useToggle(false)

  return (
    <div className="demo">
      <h2>1. useToggle ⭐</h2>
      <p className="hint">Flip a boolean with one function.</p>
      <p>Status: <code>{String(isOn)}</code></p>
      <button onClick={toggle}>Toggle</button>
    </div>
  )
}

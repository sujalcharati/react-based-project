import { useLocalStorage } from '../hooks/useLocalStorage'

export function LocalStorageDemo() {
  const [name, setName] = useLocalStorage('demo-name', '')

  return (
    <div className="demo">
      <h2>3. useLocalStorage ⭐⭐⭐</h2>
      <p className="hint">Type a name, then refresh the page. It should still be there.</p>
      <input
        value={name ?? ''}
        onChange={(e) => setName(e.target.value)}
        placeholder="Type something..."
      />
      <p>Stored value: <code>{name || '(empty)'}</code></p>
    </div>
  )
}

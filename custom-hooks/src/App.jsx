import { ToggleDemo } from './demos/ToggleDemo'
import { PreviousDemo } from './demos/PreviousDemo'
import { LocalStorageDemo } from './demos/LocalStorageDemo'

export default function App() {
  return (
    <div style={{ maxWidth: 700, margin: '0 auto' }}>
      <h1>Custom Hooks Practice</h1>
      <p style={{ color: '#94a3b8' }}>
        Implement each hook in <code>src/hooks/</code>. The demos below will
        light up as you finish each one. Work top-to-bottom (easy → hard).
      </p>
      <ToggleDemo />
      <PreviousDemo />
      <LocalStorageDemo />
    </div>
  )
}

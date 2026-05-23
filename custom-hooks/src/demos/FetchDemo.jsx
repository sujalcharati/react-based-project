import { useState } from 'react'
import { useFetch } from '../hooks/useFetch'

export function FetchDemo() {
  const [name, setName] = useState('pikachu')
  const { data, loading, error } = useFetch(
    `https://pokeapi.co/api/v2/pokemon/${name}`
  )

  return (
    <div className="demo">
      <h2>5. useFetch ⭐⭐⭐⭐</h2>
      <p className="hint">Pick a Pokémon — the hook handles loading, error, and refetch on URL change.</p>
      <div>
        <button onClick={() => setName('pikachu')}>pikachu</button>
        <button onClick={() => setName('charizard')}>charizard</button>
        <button onClick={() => setName('bulbasaur')}>bulbasaur</button>
        <button onClick={() => setName('notarealmon')}>(broken url)</button>
      </div>
      <div style={{ marginTop: '0.75rem' }}>
        {loading && <p className="status">Loading...</p>}
        {error && <p className="status">Error: {error.message}</p>}
        {data && !loading && (
          <div>
            <p>Name: <code>{data.name}</code></p>
            <p>Height: <code>{data.height}</code> &nbsp; Weight: <code>{data.weight}</code></p>
            {data.sprites?.front_default && (
              <img src={data.sprites.front_default} alt={data.name} width="96" />
            )}
          </div>
        )}
      </div>
    </div>
  )
}

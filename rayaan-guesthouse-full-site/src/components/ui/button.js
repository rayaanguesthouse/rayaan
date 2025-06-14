export function Button({ children }) {
  return <button style={{
    background: '#2563eb',
    color: '#fff',
    padding: '0.5rem 1rem',
    borderRadius: '1rem',
    border: 'none',
    cursor: 'pointer',
    fontSize: '1rem'
  }}>{children}</button>;
}

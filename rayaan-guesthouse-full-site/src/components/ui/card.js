export function Card({ children }) {
  return <div style={{
    background: '#fff',
    borderRadius: '1rem',
    boxShadow: '0 4px 10px rgba(0,0,0,0.1)',
    padding: '1rem',
    overflow: 'hidden'
  }}>{children}</div>;
}

export function CardContent({ children }) {
  return <div style={{ paddingTop: '0.5rem' }}>{children}</div>;
}

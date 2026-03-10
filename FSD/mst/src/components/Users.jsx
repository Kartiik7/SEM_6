import { useState, useEffect } from 'react';

function Users() {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then((response) => {
        if (!response.ok) {
          throw new Error('Failed to fetch users');
        }
        return response.json();
      })
      .then((data) => {
        setUsers(data);
        setLoading(false);
      })
      .catch((err) => {
        setError(err.message);
        setLoading(false);
      });
  }, []);

  if (loading) return <p style={{ textAlign: 'center', marginTop: '40px' }}>Loading users...</p>;
  if (error) return <p style={{ textAlign: 'center', color: 'red' }}>Error: {error}</p>;

  return (
    <div style={{ maxWidth: '600px', margin: '40px auto', fontFamily: 'sans-serif' }}>
      <h2 style={{ borderBottom: '2px solid #333', paddingBottom: '8px' }}>User List</h2>
      <ul style={{ listStyle: 'none', padding: 0 }}>
        {users.map((user) => (
          <li
            key={user.id}
            style={{
              padding: '12px 16px',
              marginBottom: '10px',
              border: '1px solid #ddd',
              borderRadius: '6px',
              backgroundColor: '#111',
            }}
          >
            <strong>{user.name}</strong>
            <br />
            <span style={{ color: '#555' }}>{user.email}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Users;
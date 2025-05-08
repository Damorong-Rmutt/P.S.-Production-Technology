import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Login.css';


export default function Login() {
  const navigate = useNavigate(); // ✅ ใช้ navigate

  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleLogin = (e) => {
    e.preventDefault();
    fetch('http://192.168.1.153:5000/api/admin/login', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ username, password })
    })
      .then(res => res.json())
      .then(data => {
        if (data.token) {
          localStorage.setItem('adminToken', data.token);
          navigate('/dashboard'); // ✅ redirect ไปยัง dashboard
        } else {
          setError(data.error || 'เข้าสู่ระบบไม่สำเร็จ กรุณาตรวจสอบ Username หรือ Password');
        }
      })
      .catch(() => setError('ไม่สามารถเชื่อมต่อเซิร์ฟเวอร์ได้'));
  };

  return (

    
    <div className="login-container">
      <form className="login-form" onSubmit={handleLogin}>
        <h2>Admin Login</h2>
        {error && <p className="error-message">{error}</p>}
        <input
          type="text"
          placeholder="Username"
          value={username}
          onChange={e => setUsername(e.target.value)}
          required
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={e => setPassword(e.target.value)}
          required
        />
        <button type="submit">Login</button>
      </form>
    </div>
  );
}

import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { FaUser, FaLock } from 'react-icons/fa'; // ✅ เพิ่ม icons
import './Login.css';
const API_BASE = import.meta.env.VITE_API_BASE;
export default function Login() {
  const navigate = useNavigate();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');


  const handleLogin = (e) => {
    e.preventDefault();
    fetch(`${API_BASE}/admin/login`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ username, password })
    })
      .then(res => res.json())
      .then(data => {
        if (data.token) {
          localStorage.setItem('adminToken', data.token);
          navigate('/dashboard');
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

        {/* ✅ Username with icon */}
        <div className="input-with-icon">
          <FaUser className="input-icon" />
          <input
            type="text"
            placeholder="Username"
            value={username}
            onChange={e => setUsername(e.target.value)}
            required
          />
        </div>

        {/* ✅ Password with icon */}
        <div className="input-with-icon">
          <FaLock className="input-icon" />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={e => setPassword(e.target.value)}
            required
          />
        </div>

        <button type="submit" className='login-btn'>Login</button>
      </form>
    </div>
  );
}

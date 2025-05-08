import { useNavigate } from 'react-router-dom';

export default function Dashboard() {
  const navigate = useNavigate(); // ใช้ navigate เพื่อนำทาง

  const handleLogout = () => {
    localStorage.removeItem('adminToken'); // 🔥 ลบ token ออกจาก localStorage
    navigate('/login'); // 🔥 กลับไปหน้า Login
  };

  return (
    <div>
      <h1>ยินดีต้อนรับเข้าสู่หน้า Dashboard</h1>
      <button onClick={handleLogout} style={{ marginTop: '20px', padding: '10px 20px', fontSize: '16px' }}>
        Logout
      </button>
    </div>
  );
}

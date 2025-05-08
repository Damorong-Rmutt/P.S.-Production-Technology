import React from 'react';
import '../../styles.css'; // ถ้ามี CSS เดิม
import "./Footer.css"
import { Link } from 'react-router-dom'

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">
        {/* 👉 คอลัมน์ที่ 1 */}
        <div className="footer-column">
          <h4>เกี่ยวกับเรา</h4>
          <ul>
            <li><a href="/Frontend/templete/home.html">ข้อมูลบริษัท</a></li>
            <li><a href="#">นักลงทุนสัมพันธ์</a></li>
            <li><a href="#">การรักษาความปลอดภัยทางไซเบอร์</a></li>
            <li><a href="#">ความยั่งยืน</a></li>
            <li><a href="#">มุ่งเน้นคุณภาพ</a></li>
            <li><a href="#">ติดต่อเรา</a></li>
          </ul>
        </div>

        {/* 👉 คอลัมน์ที่ 2 */}
        <div className="footer-column">
          <h4>ห้องข่าว</h4>
          <ul>
            <li><a href="#">บล็อก</a></li>
            <li><a href="#">ข่าวล่าสุด</a></li>
            <li><a href="#">เรื่องราวความสำเร็จ</a></li>
            <li><a href="#">การกล่าวถึงในข่าว</a></li>
          </ul>
        </div>

        {/* 👉 คอลัมน์ที่ 3 */}
        <div className="footer-column">
          <h4>กิจกรรม</h4>
          <ul>
            <li><a href="#">Hikvision Live</a></li>
            <li><a href="#">รายการกิจกรรม</a></li>
          </ul>
        </div>

        {/* 👉 คอลัมน์ที่ 4 */}
        <div className="footer-column">
          <h4>ลิงก์</h4>
          <ul>
            <li><a href="#">Hikvision eLearning</a></li>
            <li><a href="#">สถานที่ซื้อ</a></li>
            <li><a href="#">เทคโนโลยีหลัก</a></li>
            <li><a href="#">แผนผังเว็บไซต์</a></li>
          </ul>
        </div>

        {/* 👉 ปุ่ม */}
        <div className="footer-column footer-buttons">
          <img src='/static/ID-Line2.png' alt='ID-Line' className='footer-img' ></img>
          <Link to='/contacts'><div className="footer-btn"> 🎧 ติดต่อเรา </div></Link>
        </div>
      </div>
 
    </footer>
  );
}

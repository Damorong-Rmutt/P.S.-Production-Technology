import './WhatNew.css';

export default function WhatsNew() {
  return (
    <section className="whats-new-section">
      <h2><span className="red-text">What's</span> news</h2>
      <div className="whats-new-grid">
        <div className="whats-new-item wide">
          <img src="https://place-hold.it/930x300" alt="AIoT Technologies" />
          <div className="overlay">
            <h3>Hikvision AIoT Technologies</h3>
            <p>Explore our advantages in AIoT techs</p>
          </div>
        </div>
        <div className="whats-new-item">
          <img src="https://place-hold.it/415x300" alt="Quick Guide" />
          <div className="overlay">
            <h3>Quick Guide for Project-Oriented Premium Products</h3>
            <p>Download and Explore</p>
          </div>
        </div>
        <div className="whats-new-item">
          <img src="https://place-hold.it/415x250" alt="Green Practice" />
          <div className="overlay">
            <h3>Our Green Practice</h3>
            <p>Towards a greener footprint</p>
          </div>
        </div>
        <div className="whats-new-item">
          <img src="https://place-hold.it/415x250" alt="Perimeter Solution" />
          <div className="overlay">
            <h3>Perimeter Protection Solution</h3>
            <p>Advanced AI solutions for perimeter</p>
          </div>
        </div>
        <div className="whats-new-item">
          <img src="https://place-hold.it/415x250" alt="Hikvision Blog" />
          <div className="overlay">
            <h3>Hikvision Blog</h3>
            <p>Top 5 trends for AIoT in 2025</p>
          </div>
        </div>
      </div>
    </section>
  );
}
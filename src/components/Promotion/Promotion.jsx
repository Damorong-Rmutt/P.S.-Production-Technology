import './Promotion.css';

export default function Promotion() {
  return (
    <div className="promotion-container">
      <div className="promotion-grid">
        <div className="promotion-large">
          <img src="https://place-hold.it/950x400" alt="Promotion Notebook" />
        </div>
        <div className="promotion-small">
          <img src="https://place-hold.it/370x200" alt="Promotion OLED" />
        </div>
        <div className="promotion-small">
          <img src="https://place-hold.it/370x200" alt="Songkran Gaming Fest" />
        </div>
      </div>
    </div>
  );
}



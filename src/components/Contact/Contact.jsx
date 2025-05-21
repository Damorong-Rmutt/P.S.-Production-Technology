import React from "react";
import "./Contact.css";
import {
  FaMapMarkerAlt,
  FaPhoneAlt,
  FaEnvelope,
  FaLine,
  FaFacebook,
} from "react-icons/fa";

// Reusable contact card component
const ContactCard = ({ icon, label, detail, color }) => (
  <div className="contact-card">
    <div className="icon-circle" style={{ backgroundColor: `${color}1A` }}>
      {React.cloneElement(icon, { className: "card-icon", style: { color } })}
    </div>
    <p className="card-label">{label}</p>
    <p className="card-detail">{detail}</p>
  </div>
);

function Contact() {
  return (
    <div className="contact-container">
      <h2>Contact Us</h2>

      {/* Contact Cards */}
      <div className="card-grid">
        <ContactCard
          icon={<FaMapMarkerAlt />}
          label="ที่อยู่"
          detail="43 ซ.สุเหร่าคลองหนึ่ง 13 แยก 1 บางชัน คลองสามวา กทม. 10510"
          color="#7c3aed"
        />
        <ContactCard
          icon={<FaPhoneAlt />}
          label="โทรศัพท์"
          detail="02-077-4149"
          color="#16a34a"
        />
        <ContactCard
          icon={<FaEnvelope />}
          label="อีเมล"
          detail="pspro9999@gmail.com"
          color="#dc2626"
        />
        <ContactCard
          icon={<FaLine />}
          label="Line ID"
          detail="@pspro9999"
          color="#00c300"
        />
        <ContactCard
          icon={<FaFacebook />}
          label="Facebook"
          detail="P.S.Production Technology"
          color="#1877f2"
        />
      </div>

      {/* Google Map */}
      <div className="contact-map">
        <iframe
          title="google-map"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3873.9187551407285!2d100.70508787509195!3d13.843915186557615!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x311d65c60b61d2e7%3A0x6647ac82d86bf448!2sP.S.Production%20Technology!5e0!3m2!1sth!2sth!4v1746607942701!5m2!1sth!2sth"
          width="100%"
          height="100%"
          style={{ border: "0" }}
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
    </div>
  );
}

export default Contact;

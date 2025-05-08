import React, { useState } from 'react';
import './Payment.css';

const Payment = () => {
  const menuItems = ['วิธีการชำระเงิน', 'การคืนเงินและสินค้า', 'การจัดส่ง'];

  const paymentSteps = [
    'หลังจากสั่งซื้อสินค้าแล้วให้โอนเงินเข้าบัญชีธนาคาร',
    'หลังจากโอนเงินแล้ว กรุณาแจ้งหลักฐานการโอนผ่าน SMS หรือแสกนเพื่อแจ้งผ่าน LINE OA: @cctv.th',
    'ลูกค้าสามารถตรวจสอบราคาสินค้าและโปรโมชั่นล่าสุดได้',
    'จากนั้นสามารถรอติดต่อลำดับการสั่งซื้อ หากต้องการรายละเอียดเพิ่มเติม ติดต่อที่เบอร์ 093-6942204',
    'ลูกค้าสามารถตรวจสอบราคาสินค้าและโปรโมชั่นล่าสุดได้'
  ];

  const refundPolicy = [
    'สามารถคืนสินค้าได้ภายใน 7 วันหลังจากได้รับสินค้า',
    'สินค้าต้องอยู่ในสภาพสมบูรณ์ ไม่มีร่องรอยการใช้งานหรือความเสียหาย',
    'แนบใบเสร็จรับเงินหรือหลักฐานการซื้อทุกครั้งที่ขอคืน',
    'บริษัทจะดำเนินการคืนเงินภายใน 7 วันหลังจากตรวจสอบสินค้าเรียบร้อย',
    'หากเป็นสินค้าที่ชำรุดจากการขนส่ง กรุณาแจ้งภายใน 24 ชั่วโมง'
  ];

  const shippingInfo = [
    'จัดส่งสินค้าทางขนส่งเอกชนภายใน 1–2 วันหลังจากได้รับยอดชำระ',
    'ระยะเวลาจัดส่งโดยประมาณ 2–5 วันทำการ ขึ้นอยู่กับพื้นที่ปลายทาง',
    'มีบริการจัดส่งแบบด่วนพิเศษ (Express) ภายใน 1 วัน ในเขตกรุงเทพฯ และปริมณฑล',
    'ค่าจัดส่งคิดตามน้ำหนักและระยะทาง โดยจะแสดงให้ลูกค้าเห็นก่อนยืนยันการสั่งซื้อ',
    'หลังจัดส่งจะมีเลขพัสดุ (Tracking Number) แจ้งทาง SMS หรือ LINE ภายใน 24 ชม.'
  ];

  const [activeMenu, setActiveMenu] = useState(menuItems[0]);

  const renderContent = () => {
    let contentArray = [];

    if (activeMenu === 'วิธีการชำระเงิน') contentArray = paymentSteps;
    else if (activeMenu === 'การคืนเงินและสินค้า') contentArray = refundPolicy;
    else if (activeMenu === 'การจัดส่ง') contentArray = shippingInfo;

    return contentArray.map((text, index) => (
      <div className="payment-step" key={index}>
        <div className="payment-step-number">{index + 1}</div>
        <div className="payment-step-text">{text}</div>
      </div>
    ));
  };

  return (
    <div className="payment-page">
      <div className="payment-sidebar">
        <ul>
          {menuItems.map((item, index) => (
            <li
              key={index}
              className={activeMenu === item ? 'active' : ''}
              onClick={() => setActiveMenu(item)}
            >
              {item}
            </li>
          ))}
        </ul>
      </div>
      <div className="payment-content">
        <h2>{activeMenu}</h2>
        {renderContent()}
      </div>
    </div>
  );
};

export default Payment;

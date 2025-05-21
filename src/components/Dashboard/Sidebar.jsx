import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Sidebar.css";
import "./Dashboard.css"; // สำหรับ modal styling

function Sidebar() {
  const navigate = useNavigate();
  const [showExitModal, setShowExitModal] = useState(false);
  const [nextAction, setNextAction] = useState(null);

  const handleLeavePage = () => {
    setShowExitModal(true);
    setNextAction(() => () => {
      localStorage.removeItem("adminToken");
      navigate("/login");
    });
  };

  const handleCancelExit = () => {
    setShowExitModal(false);
    setNextAction(null);
  };

  const handleConfirmExit = () => {
    setShowExitModal(false);
    if (nextAction) nextAction();
  };

  return (
    <>
      <div className="sidebar">
        <h2>Admin</h2>
        <ul>
          <li onClick={() => navigate("/dashboard")}>🏠 หน้าหลัก</li>
          <li onClick={() => navigate("/admin/products/1/edit")}>✏️ แก้ไขสินค้า</li>
          <li onClick={handleLeavePage}>🔓 ออกจากระบบ</li>
        </ul>
      </div>

      {/* ✅ Modal ออกจากระบบ */}
      {showExitModal && (
        <div className="modal-overlay">
          <div className="modal-box">
            <p>
              ⚠️ คุณยังไม่ได้ Logout<br />
              คุณแน่ใจหรือไม่ว่าต้องการออกจากหน้านี้?
            </p>
            <div className="modal-buttons">
              <button className="confirm" onClick={handleConfirmExit}>
                ออกจากหน้า
              </button>
              <button className="cancel" onClick={handleCancelExit}>
                ยกเลิก
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default Sidebar;

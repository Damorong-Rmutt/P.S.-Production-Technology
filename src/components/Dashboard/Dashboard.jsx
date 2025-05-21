import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Sidebar from "./Sidebar";
import "./Sidebar.css";
import "./Dashboard.css";

function Dashboard() {
  const navigate = useNavigate();
  const [showExitModal, setShowExitModal] = useState(false);
  const [nextAction, setNextAction] = useState(null);

  useEffect(() => {
    const handleBeforeUnload = (e) => {
      const token = localStorage.getItem("adminToken");
      if (token) {
        e.preventDefault();
        e.returnValue = "";
        setShowExitModal(true);
        return "";
      }
    };

    window.addEventListener("beforeunload", handleBeforeUnload);
    return () => {
      window.removeEventListener("beforeunload", handleBeforeUnload);
    };
  }, []);

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
    <div>
      <Sidebar />
      <div style={{ marginLeft: "220px", padding: "30px", flex: 1 }}>
        <h1>ยินดีต้อนรับ Admin</h1>

        <div className="quickmenu">
          <h2>🔖 Quickmenu</h2>
          <div className="quickmenu-grid">
            <div
              className="quickmenu-item"
              onClick={() => navigate("/admin/products/create")}
            >
              ➕ เพิ่มสินค้า
            </div>
            <div
              className="quickmenu-item"
              onClick={() => navigate("/admin/products")}
            >
              📦 รายการสินค้า
            </div>
            <div
              className="quickmenu-item"
              onClick={() => navigate("/admin/categories")}
            >
              📁 จัดการหมวดหมู่
            </div>
            <div
              className="quickmenu-item"
              onClick={() => navigate("/admin/settings")}
            >
              ⚙️ ตั้งค่า
            </div>
            <div className="quickmenu-item" onClick={handleLeavePage}>
              🚪 ออกจากหน้านี้
            </div>
          </div>
        </div>

        {showExitModal && (
          <div className="modal-overlay">
            <div className="modal-box">
              <p>
                ⚠️ คุณยังไม่ได้ Logout
                <br />
                คุณแน่ใจหรือไม่ว่าต้องการออกจากหน้านี้?
              </p>
              <div className="modal-buttons">
                <button onClick={handleConfirmExit} className="confirm">
                  ออกจากหน้า
                </button>
                <button onClick={handleCancelExit} className="cancel">
                  ยกเลิก
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default Dashboard;

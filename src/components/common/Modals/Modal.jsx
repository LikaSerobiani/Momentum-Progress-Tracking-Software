import React from "react";
import "../../../styles/modal.css";

const Modal = ({ isModalOpen, children, onClose, padding }) => {
  if (isModalOpen !== true) {
    return null;
  }

  const handleBackgroundClick = (e) => {
    if (e.target.classList.contains("modal")) {
      onClose();
    }
  };

  return (
    <section className="modal" onClick={handleBackgroundClick}>
      <article className="modal-content" style={{ padding }}>
        <div className="w-full h-full">{children}</div>
      </article>
    </section>
  );
};

export default Modal;

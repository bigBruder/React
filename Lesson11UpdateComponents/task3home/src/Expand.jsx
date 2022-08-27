import React from 'react';

const Expand = ({ isOpen, children, title, onClick }) => {
  let toggle;
  if (isOpen) {
    toggle = 'fas fa-chevron-up';
  } else {
    toggle = 'fas fa-chevron-down';
  }
  return (
    <div className="expand border">
      <div className="expand__header">
        <span className="expand__title">{title}</span>
        <button className="expand__toggle-btn" onClick={onClick}>
          <i className={toggle}></i>
        </button>
      </div>
      {isOpen ? <div className="expand__content">{children}</div> : <div></div>}
    </div>
  );
};
export default Expand;

import React from 'react';

const Expand = ({ isOpen, children, title, onClick }) => (
  <div className="expand border">
    <div className="expand__header">
      <span className="expand__title">{title}</span>
      <button className="expand__toggle-btn" onClick={onClick}>
        {isOpen ? <i className="fas fa-chevron-up"></i> : <i className="fas fa-chevron-down"></i>}
      </button>
    </div>
    {isOpen ? <div className="expand__content">{children}</div> : <div></div>}
  </div>
);

export default Expand;

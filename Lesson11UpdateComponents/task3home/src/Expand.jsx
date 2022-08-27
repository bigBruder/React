import React from 'react';

const Expand = ({ isOpen, children, title, onClick }) => {
  const content = isOpen ? <div className="expand__content">{children}</div> : <div></div>;

  const chevron = isOpen ? (
    <i className="fas fa-chevron-down"></i>
  ) : (
    <i className="fas fa-chevron-up"></i>
  );

  return (
    <div className="expand border">
      <div className="expand__header">
        <span className="expand__title">{title}</span>
        <button className="expand__toggle-btn" onClick={onClick}>
          {chevron}
        </button>
      </div>
      {content}
    </div>
  );
};

export default Expand;

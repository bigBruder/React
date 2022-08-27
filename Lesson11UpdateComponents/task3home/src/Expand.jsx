import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronUp, faChevronDown } from '@fortawesome/free-solid-svg-icons';

const Expand = ({ isOpen, children, title, onClick }) => {
  const content = isOpen ? <div className="expand__content">{children}</div> : <div></div>;

  const chevron = isOpen ? (
    <FontAwesomeIcon icon={faChevronUp} />
  ) : (
    <FontAwesomeIcon icon={faChevronDown} />
  );

  return (
    <div className="expand border">
      <div className="expand__header">
        <span className="expand__title">{title}</span>
        <button className="expand__toggle-btn" onClick={onClick}>
          <i>{chevron}</i>
        </button>
      </div>
      {content}
    </div>
  );
};

export default Expand;

import React from 'react';
import PropTypes from 'prop-types';
import styles from '../../pages/styles.css';

function CandidateModal({ show, children, close, plusClick }) {
  const showHideClassName = show ? 'display-block' : 'display-none';

  return (
    <section className={styles[showHideClassName]}>
      <section className="modal-main">
        {children}
        <button onClick={plusClick}>Add Point</button>
        <p onClick={close}>Close Modal</p>
      </section>
    </section>
  );
}

CandidateModal.propTypes = {
  show: PropTypes.bool.isRequired,
  children: PropTypes.node.isRequired,
  close: PropTypes.func.isRequired,
  plusClick: PropTypes.func.isRequired
};

export default CandidateModal;

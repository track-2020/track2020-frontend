import React from 'react';
import PropTypes from 'prop-types';
import styles from '../../pages/styles.css';

function CandidateModal({ show, children, close }) {
  const showHideClassName = show ? 'display-block' : 'display-none';

  return (
    <section className={styles[showHideClassName]}>
      <section className="modal-main">
        {children}
        <p onClick={close}>Close Modal</p>
      </section>
    </section>
  );
}

CandidateModal.propTypes = {
  show: PropTypes.bool.isRequired,
  children: PropTypes.node.isRequired,
  close: PropTypes.bool.isRequired
};

export default CandidateModal;

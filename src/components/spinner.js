import React from 'react';

const Spinner = () => {
  return (
    <div style={styles.spinnerContainer}>
      <div style={styles.loader}></div>
    </div>
  );
};

const styles = {
  spinnerContainer: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '300px',
  },
  loader: {
    border: '6px solid #f3f3f3',
    borderTop: '6px solid #007BFF',
    borderRadius: '50%',
    width: '50px',
    height: '50px',
    animation: 'spin 1s linear infinite'
  }
};

// Inject keyframes into the document
const styleSheet = document.styleSheets[0];
styleSheet.insertRule(`@keyframes spin {
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
}`, styleSheet.cssRules.length);

export default Spinner;

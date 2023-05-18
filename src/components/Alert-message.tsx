import React from 'react';

const Alert = ({ type, message }) => {
  const alertClasses = `bg-${type}-100 border-l-4 border-${type}-500 text-${type}-700 p-4`;
  
  return (
    <div className={alertClasses} role="alert">
      <p className="font-bold">{type}</p>
      <p>{message}</p>
    </div>
  );
};

const MyComponent = () => {
  return (
    <div>
      <Alert type="success" message="Your changes have been saved." />
      <Alert type="failed" message="An error occurred. Please try again." />
      <Alert type="processing" message="This action cannot be undone." />
    </div>
  );
};

export default MyComponent;
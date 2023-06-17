import React from 'react';
import { FaCheckCircle, FaTimesCircle, FaSpinner } from 'react-icons/fa';

interface AlertProps {
  variant: 'success' | 'failure' | 'processing';
  message: string;
}

const Alert: React.FC<AlertProps> = ({ variant, message }) => {
  let icon;
  let backgroundColor;
  let iconClasses = 'w-6 h-6 mr-2';
  let alertClasses = 'bg-gray-500 border-l-4 border-gray-600 text-white p-4';

  switch (variant) {
    case 'success':
      icon = <FaCheckCircle className={iconClasses} />;
      backgroundColor = 'bg-green-100';
      break;
    case 'failure':
      icon = <FaTimesCircle className={iconClasses} />;
      backgroundColor = 'bg-red-100';
      break;
    case 'processing':
      icon = <FaSpinner className={`${iconClasses} animate-spin`} />;
      backgroundColor = 'bg-blue-100';
      break;
    default:
      break;
  }

  return (
    <div className="flex items-center justify-center">
      <div className="bg-black w-64 text-white p-4">
        <div className={`${alertClasses} ${backgroundColor} rounded-lg flex items-center`} role="alert">
          {icon}
          <p>{message}</p>
        </div>
      </div>
    </div>
  );
};

export default Alert;
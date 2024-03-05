import React from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate

// Updated Button component to accept `navigateTo` prop
const Button = ({
  label,
  iconUrl,
  backgroundColor,
  textColor,
  borderColor,
  fullWidth,
  navigateTo, // Path to navigate to on click
}) => {
  const navigate = useNavigate(); // Initialize navigate function

  const handleClick = () => {
    if (navigateTo) navigate(navigateTo); // Use navigate function with `navigateTo` path
  };

  return (
    <>
      <button 
        onClick={handleClick} // Attach handleClick to the button's onClick event
        className={`flex justify-center items-center gap-2 px-7 py-4 border font-montserrat text-lg leading-none
          ${backgroundColor ? `${backgroundColor} ${textColor} ${borderColor}` : "bg-coral-blue text-white border-coral-blue"}
          rounded-full ${fullWidth && "w-full"}
        `}
      >
        {label}
        {iconUrl && <img src={iconUrl} alt="icon" className='ml-2 rounded-full w-5 h-5' />}
      </button>
    </>
  );
};

export default Button;

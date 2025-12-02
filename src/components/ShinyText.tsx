import './ShinyText.css';

const ShinyText = ({ text, disabled = false, speed = 5, className = '' }) => {
  // Animation disabled for performance
  return (
    <span className={className}>
      {text}
    </span>
  );
};

export default ShinyText;


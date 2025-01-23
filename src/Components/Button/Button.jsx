import './Button.scss'

const Button = ({ children, onClick, type, className }) => {
  return (
    <button onClick={onClick} className={`button ${className}`} type={type}>
      {children}
    </button>
  );
};

export default Button;

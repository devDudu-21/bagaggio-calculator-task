import PropTypes from "prop-types";

const Button = ({ label, onClick, className }) => {
  const classNames = className.split(" ");

  const buttonClassName = classNames.join(" ");

  return (
    <button className={buttonClassName} onClick={onClick}>
      {label}
    </button>
  );
};

Button.propTypes = {
  label: PropTypes.oneOfType([PropTypes.string, PropTypes.element]).isRequired,
  onClick: PropTypes.func.isRequired,
  className: PropTypes.string,
};

export default Button;

import PropTypes from "prop-types";

export default function Button({ children, onClick, disabled = false, variant = "primary", className = "", ...props }) {
  const baseStyles = "px-4 py-2 rounded-lg transition focus:outline-none focus:ring-2 focus:ring-offset-2";
  const variantStyles = {
    primary: "bg-blue-500 text-white hover:bg-blue-600 focus:ring-blue-500",
    secondary: "bg-gray-300 text-gray-800 hover:bg-gray-400 focus:ring-gray-300 disabled:opacity-50",
    success: "bg-green-500 text-white hover:bg-green-600 focus:ring-green-500",
  };

  return (
    <button
      onClick={onClick}
      disabled={disabled}
      className={`${baseStyles} ${variantStyles[variant]} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
}

Button.propTypes = {
  children: PropTypes.node.isRequired,
  onClick: PropTypes.func,
  disabled: PropTypes.bool,
  variant: PropTypes.oneOf(["primary", "secondary", "success"]),
  className: PropTypes.string,
};
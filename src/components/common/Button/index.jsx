const Button = ({
  title,
  onClick,
  variant = "primary",
  className = "",
  type = "button",
  children,
}) => {
  const baseStyle =
    "font-firaGo font-medium flex items-center justify-center gap-2";

  const variants = {
    primary: `
      bg-primary rounded-[5px] py-[10px] px-[20px] text-[16px] hover:bg-secondary text-white transition-all ease-out duration-300
      hover:bg-secondary hover:scale-105
      active:scale-95
    `,
    secondary: `
      bg-white rounded-[5px] border border-primary py-[10px] px-[20px] text-[16px] text-grey 
      hover:border-secondary transition-all ease-out duration-300
      hover:scale-105
      active:scale-95
    `,
    roundedFull: `
      bg-primary text-white rounded-[20px] py-[8px] px-[20px] text-[16px] hover:bg-secondary w-[155px]`,
  };

  const buttonStyle = `${baseStyle} ${variants[variant]} ${className}`;

  return (
    <button type={type} onClick={onClick} className={buttonStyle}>
      {children}
      <span>{title}</span>
    </button>
  );
};

export default Button;

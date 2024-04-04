import React, { ReactNode, ButtonHTMLAttributes } from 'react';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  icon?: ReactNode; // Icon can be any React node (e.g., an SVG, an icon component)
  btntype?: 'default' | 'filled' | 'outlined'
  disablebtn?: boolean
}

const Button: React.FC<ButtonProps> = ({ children, icon, ...props }) => {
  const { btntype = 'default', className, disablebtn } = props
  return (
    <button {...props} className={( disablebtn ? 'btn-disable' : `${btntype} ${className}` )}>
      {icon && <span className="button-icon">{icon}</span>}
      <span className="button-text">{children}</span>
    </button>
  );
};

export default Button;
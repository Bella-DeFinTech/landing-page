import { CSSProperties, ReactNode } from "react";

export const Image: React.FC<{
  children: ReactNode;
  className?: string;
  style?: CSSProperties;
  src: string;
  width?: number;
  height?: number;
  onClick?: () => void;
}> = ({
  children,
  src,
  width,
  height,
  style = {},
  className = "",
  onClick,
}) => (
  <div
    className={`icon ${className}`}
    onClick={onClick}
    style={{
      backgroundImage: `url(${src})`,
      width: width ? `${width}rem` : "auto",
      height: height ? `${height}rem` : "auto",
      ...style,
    }}
  >
    {children}
  </div>
);

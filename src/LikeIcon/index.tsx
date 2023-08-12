import { useState } from "react";
import "./index.css";

interface LikeIconProps {
  showHoverAnimation?: boolean;
  value?: boolean;
  onChange?: (value: boolean) => void;
}

export const LikeIcon = ({
  showHoverAnimation = true,
  value,
  onChange,
}: LikeIconProps) => {
  const [isLike, setIsLike] = useState<boolean>(value || false);
  const [isHover, setIsHover] = useState<boolean>(false);
  return (
    <div
      className={`
      like-icon 
      ${showHoverAnimation && isHover ? "like-icon-hover-animation" : ""} 
      ${isLike ? "like-icon-click-animation" : ""}`}
      onClick={() => {
        setIsLike(!isLike);
        onChange?.(isLike);
        setIsHover(false);
      }}
      onMouseEnter={() => {
        if (!isLike) {
          setIsHover(true);
        }
      }}
      onMouseLeave={() => {
        setIsHover(false);
      }}
    />
  );
};

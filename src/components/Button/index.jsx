import React, { useState } from 'react';
import Button from '@mui/material/Button';

const CustomButton = ({ text, variant, style, link, hoverStyle }) => {
const [isHovered, setIsHovered] = useState(false);

const handleMouseEnter = () => {
setIsHovered(true);
};

const handleMouseLeave = () => {
setIsHovered(false);
};

const buttonStyle = {
...style,
...(isHovered ? hoverStyle : {}),
};
return (
<a href={link} target="_blank" style={{ textDecoration: 'none' }} onMouseEnter={handleMouseEnter}
  onMouseLeave={handleMouseLeave}>
  <Button variant={variant} style={buttonStyle}>
    {text}
  </Button>
</a>
)
};


export default CustomButton;
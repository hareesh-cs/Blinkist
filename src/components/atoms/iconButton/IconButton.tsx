import { IconButton, SvgIconProps } from '@mui/material';

export interface IconButtonProps {
  children: SvgIconProps;
  onClick?: React.MouseEvent;
}

function IconButtonComponent({ children }: IconButtonProps) {
  return <IconButton data-textid="3">{children}</IconButton>;
}

export default IconButtonComponent;

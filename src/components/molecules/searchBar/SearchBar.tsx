/* eslint-disable react/require-default-props */
import { styled } from '@mui/material';

import ShowIcon from '../../atoms/Icons/showIcon';
import iconPath from '../../atoms/Icons/iconPath';

interface SearchBarProps {
  placeholder?: string;
}

function SearchBar({ placeholder }: SearchBarProps) {
  const StyledDiv = styled('div')({
    marginLeft: '18.5%',
    marginTop: '58px',
    width: '45%',
    padding: '0px',
    svg: {
      position: 'absolute',
      padding: '2px',
    },
    input: {
      paddingLeft: '6%',
      paddingBottom: '1%',
      fontSize: '24px',
      outline: '0',
      lineHeight: '30px',
      borderWidth: '0 0 2px',
    },
  });
  const Input = styled('input')({
    '::placeholder': {
      fontWeight: '700',
      fontSize: '24px',
      lineHeight: '30.17px',
      color: 'textColors.textColor3',
    },
  });
  return (
    <StyledDiv>
      <ShowIcon
        width="20"
        height="20"
        viewBox="0 0 20 20"
        d={iconPath.searchIcon}
      />
      <Input type="text" placeholder={placeholder} size={50} />
    </StyledDiv>
  );
}

export default SearchBar;

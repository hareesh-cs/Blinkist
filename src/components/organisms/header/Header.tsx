/* eslint-disable @typescript-eslint/no-var-requires */
/* eslint-disable object-curly-newline */
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import { Button, Container, Typography } from '@mui/material';
import { Link } from 'react-router-dom';
import ExpandNav from '../../molecules/expandNav/ExpandNav';
import ShowIcon from '../../atoms/Icons/showIcon';
import iconPath from '../../atoms/Icons/iconPath';
import Avatar from '../../atoms/Avatar/Avatar';

const img = require('../../atoms/Images/logo.png');

function Header() {
  return (
    <Container>
      <Box sx={{ flexGrow: 1, ml: 7, mr: 5 }} data-testid="header">
        <AppBar position="static" sx={{ bgcolor: '#FFFFFF' }} elevation={0}>
          <Toolbar>
            <Link to="/">
              <img src={img} width="124.09px" height="26px" alt="logo" />
            </Link>
            <IconButton>
              <ShowIcon
                width="20"
                height="20"
                viewBox="0 0 20 20"
                d={iconPath.searchIcon}
              />
            </IconButton>
            <ExpandNav />
            <Typography
              variant="body1"
              component="h6"
              fontSize={16}
              sx={{ color: '#03314B', ml: 5 }}
            >
              My Library
            </Typography>
            <Box sx={{ ml: 65, textAlign: 'right' }}>
              <Button sx={{ flexShrink: 1 }}>
                <Avatar letter="A" />
                <ShowIcon
                  width="14"
                  height="8"
                  viewBox="0 0 14 8"
                  d={iconPath.downArrowIcon}
                />
              </Button>
            </Box>
          </Toolbar>
        </AppBar>
      </Box>
    </Container>
  );
}

export default Header;

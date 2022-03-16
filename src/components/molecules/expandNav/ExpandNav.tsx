/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable react/jsx-props-no-spreading */
import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import {
  Divider,
  IconButton,
  IconButtonProps,
  Stack,
  styled,
  Container,
} from '@mui/material';
import { Link } from 'react-router-dom';
import ShowIcon from '../../atoms/Icons/showIcon';
import iconPath from '../../atoms/Icons/iconPath';

const style = {
  position: 'absolute' as const,
  ml: -80,
  width: '1570px',
  top: '88%',
  height: '400px',
  bgcolor: '#F1F6F4',
  padding: '0px 0px 0px 14.5px',
};

const Menu = styled(Box)`
  display: flex;
  align-items: center;
  &:hover {
    color: #116be9;
  }
`;

const HeadTypography = styled(Typography)`
  font-size: 16px;
  font-weight: bold;
  font-family: Cera Pro;
  line-height: 24px;i
  color: #6d787e;
  &:hover {
    color: #116be9;
  }
`;

const StyledTypography = styled(Typography)`
  font-size: 16px;
  font-weight: 400;
  font-family: Cera Pro;
  padding-left: 8px;
  color: #6d787e;
  &:hover {
    color: #116be9;
  }
`;

const StyledLink = styled(Link)`
  color: #6d787e;
  text-decoration: none;
  &:hover {
    color: #116be9;
  }
`;

interface ExpandMoreProps extends IconButtonProps {
  expand: boolean;
}

const ExpandMore = styled((props: ExpandMoreProps) => {
  const { expand, ...other } = props;
  return <IconButton {...other} />;
})(({ theme, expand }) => ({
  transform: !expand ? 'rotate(0deg)' : 'rotate(180deg)',
  marginLeft: 6,
  transition: theme.transitions.create('transform', {
    duration: theme.transitions.duration.shortest,
  }),
}));

const UBox = styled(Box)`
  &:hover {
    border-bottom-color: #2ce080;
  }
`;

export default function ExpandNav() {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(!open);
  const handleClose = () => setOpen(!open);

  return (
    <>
      <Button
        onClick={handleOpen}
        sx={{ textTransform: 'none', flexShrink: 1 }}
        data-testid="expand"
      >
        <UBox
          sx={{
            display: 'flex',
            alignItems: 'center',
            borderBottom: '2px solid white',
          }}
        >
          <Typography sx={{ color: 'black', cursor: 'pointer' }} fontSize={16}>
            Explore
          </Typography>
          <ExpandMore expand={open} onClick={handleClose}>
            <ShowIcon
              width="14"
              height="8"
              viewBox="0 0 14 8"
              d={iconPath.downArrowIcon}
            />
          </ExpandMore>
        </UBox>
      </Button>
      {open && (
        <Box onClick={handleClose} sx={{ zIndex: 999 }} data-testid="popup">
          <Box sx={style}>
            <Container sx={{ pt: 3 }}>
              <Box sx={{ ml: 15 }}>
                <Stack direction="row" spacing="180px" sx={{ pb: '24px' }}>
                  <HeadTypography>Explore by category</HeadTypography>
                  <HeadTypography>See recently added titles</HeadTypography>
                  <HeadTypography>See popular titles</HeadTypography>
                </Stack>
                <Divider
                  sx={{ borderBottom: '2px solid #042330', width: '93%' }}
                />
                <Box
                  sx={{
                    pt: '32px',
                    maxWidth: 880,
                    display: 'flex',
                    justifyContent: 'space-between',
                  }}
                >
                  <Stack direction="column" spacing="20.11px">
                    <Menu>
                      <ShowIcon
                        width="16"
                        height="23"
                        viewBox="0 0 16 23"
                        d={iconPath.entrepreneurshipIcon}
                      />
                      <StyledTypography sx={{ textDecoration: 'none' }}>
                        <StyledLink to="/entrepreneurship">
                          Entrepreneurship
                        </StyledLink>
                      </StyledTypography>
                    </Menu>

                    <Menu>
                      <ShowIcon
                        width="18"
                        height="20"
                        viewBox="0 0 18 20"
                        d={iconPath.scienceIcon}
                      />
                      <StyledTypography>
                        <StyledLink to="/science">Science</StyledLink>
                      </StyledTypography>
                    </Menu>
                    <Menu>
                      <ShowIcon
                        width="19"
                        height="22"
                        viewBox="0 0 19 22"
                        d={iconPath.economicsIcon}
                      />
                      <StyledTypography>
                        <StyledLink to="/economics">Economics</StyledLink>
                      </StyledTypography>
                    </Menu>
                    <Menu>
                      <ShowIcon
                        width="20"
                        height="20"
                        viewBox="0 0 20 20"
                        d={iconPath.corporateCultureIcon}
                      />
                      <StyledTypography>
                        <StyledLink to="/corporate_culture">
                          Corporate Culture
                        </StyledLink>
                      </StyledTypography>
                    </Menu>
                    <Menu>
                      <ShowIcon
                        width="19"
                        height="20"
                        viewBox="0 0 19 20"
                        d={iconPath.psychologyIcon}
                      />
                      <StyledTypography>Psychology</StyledTypography>
                    </Menu>
                    <Menu>
                      <ShowIcon
                        width="18"
                        height="19"
                        viewBox="0 0 18 19"
                        d={iconPath.natureIcon}
                      />
                      <StyledTypography>Nature & Environment</StyledTypography>
                    </Menu>
                  </Stack>
                  <Stack direction="column" spacing="20.11px">
                    <Menu>
                      <ShowIcon
                        width="20"
                        height="20"
                        viewBox="0 0 20 20"
                        d={iconPath.politicsIcon}
                      />
                      <StyledTypography>Politics</StyledTypography>
                    </Menu>
                    <Menu>
                      <ShowIcon
                        width="22"
                        height="20"
                        viewBox="0 0 22 20"
                        d={iconPath.hospitalIcon}
                      />
                      <StyledTypography>Health & Nutrition</StyledTypography>
                    </Menu>
                    <Menu>
                      <ShowIcon
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        d={iconPath.motivationIcon}
                      />
                      <StyledTypography>
                        Motivation & Inspiration
                      </StyledTypography>
                    </Menu>
                    <Menu>
                      <ShowIcon
                        width="20"
                        height="20"
                        viewBox="0 0 20 20"
                        d={iconPath.careerIcon}
                      />
                      <StyledTypography>Career & Success</StyledTypography>
                    </Menu>
                  </Stack>
                  <Stack direction="column" spacing="20.11px">
                    <Menu>
                      <ShowIcon
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        d={iconPath.comSkillsIcon}
                      />
                      <StyledTypography>Communication Skills</StyledTypography>
                    </Menu>
                    <Menu>
                      <ShowIcon
                        width="23"
                        height="19"
                        viewBox="0 0 23 19"
                        d={iconPath.sexRelationIcon}
                      />
                      <StyledTypography>Sex & Relationship</StyledTypography>
                    </Menu>
                  </Stack>
                </Box>
              </Box>
            </Container>
          </Box>
        </Box>
      )}
    </>
  );
}

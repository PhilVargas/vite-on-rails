import { AppBar, Box, Button, GlobalStyles, Toolbar } from '@mui/material';
import Logo from 'images/react.svg';
import { Outlet, Link as RouterLink } from 'react-router-dom';

const HomeLayout = () => {
  return (
    <>
      <GlobalStyles
        styles={{ ul: { margin: 0, padding: 0, listStyle: 'none' } }}
      />
      <AppBar
        position="static"
        color="default"
        elevation={0}
        sx={{ borderBottom: (theme) => `1px solid ${theme.palette.divider}` }}
      >
        <Toolbar sx={{ flexWrap: 'wrap' }}>
          <Box sx={{ flexGrow: 1 }}>
            <Button
              color="primary"
              to="/"
              sx={{ my: 1, mx: 1.5 }}
              component={RouterLink}
            >
              <img
                src={Logo}
                alt="aShareX"
                style={{ width: 40, backgroundColor: 'inherit' }}
              />
            </Button>
          </Box>
        </Toolbar>
      </AppBar>
      <Outlet />
    </>
  );
};

export default HomeLayout;

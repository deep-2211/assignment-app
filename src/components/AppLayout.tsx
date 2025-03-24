import { useEffect, useState } from 'react';
import { Outlet, useLocation } from 'react-router';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import Toolbar from '@mui/material/Toolbar';
import AppNavBar from './AppNavbar';
import IconToolbar from './IconToolbar';
import { AppConfig } from '../config/AppConfig';

export default function AppLayout() {
  const { iconDrawerWidth, iconDrawerExpandedWidth } = AppConfig;

  const location = useLocation();
  const [drawerOpened, setDrawerOpened] = useState(false);

  useEffect(() => {
    setDrawerOpened(false);
  }, [location]);

  function handleDrawerToggle() {
    setDrawerOpened((d) => !d);
  }

  return (
    <>
      <Box sx={{ paddingInlineStart: `${iconDrawerWidth}px` }}>
        <AppNavBar />
        <Drawer
          variant="permanent"
          sx={{
            width: drawerOpened
              ? `${iconDrawerExpandedWidth}px`
              : iconDrawerWidth,
            flexShrink: 0,
            [`& .MuiDrawer-paper`]: {
              width: drawerOpened
                ? `${iconDrawerExpandedWidth}px`
                : iconDrawerWidth,
            },
          }}
        >
          <IconToolbar
            drawer={drawerOpened}
            onDrawerToggle={() => handleDrawerToggle()}
          />
        </Drawer>
        <Box component="main" sx={{ flexGrow: 1 }}>
          <Toolbar />
          <Box
            paddingInlineStart={
              drawerOpened
                ? `${iconDrawerExpandedWidth - iconDrawerWidth}px`
                : 0
            }
          >
            <Outlet />
          </Box>
        </Box>
      </Box>
    </>
  );
}

import { useTranslation } from 'react-i18next';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Badge from '@mui/material/Badge';
import MenuIcon from '@mui/icons-material/Menu';
import NotificationsIcon from '@mui/icons-material/Notifications';
import SettingsIcon from '@mui/icons-material/Settings';
import LoginRibbon from './LoginRibbon';
import LanguageSwitcher from './LanguageSwitcher';
import ThemeSwitcher from './ThemeSwitcher';
import SearchField from './Search';
import { IconPosition } from '../types/Common';

export default function AppNavBar() {
  const { t } = useTranslation();

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar
        color="inherit"
        position="fixed"
        elevation={0}
        sx={{
          zIndex: (theme) => theme.zIndex.drawer + 1,
        }}
      >
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="open drawer"
            sx={{ mr: 2 }}
          >
            <MenuIcon />
          </IconButton>
          <Box sx={{ flexGrow: 1 }} />
          <Box sx={{ display: 'flex', columnGap: 1, marginInlineEnd: -10 }}>
            <Box sx={{ width: 450 }}>
              <SearchField
                placeholder={t('ph_text__top_search')}
                iconPosition={IconPosition.END}
              />
            </Box>
            <IconButton
              size="large"
              aria-label="show 17 new notifications"
              color="inherit"
            >
              <Badge badgeContent={17} color="error">
                <NotificationsIcon />
              </Badge>
            </IconButton>
          </Box>
          <Box sx={{ flexGrow: 1 }} />
          <Box sx={{ display: 'flex', columnGap: 1, alignItems: 'center' }}>
            <ThemeSwitcher />
            <LanguageSwitcher />
            <IconButton size="large" edge="end" color="inherit">
              <SettingsIcon />
            </IconButton>
          </Box>
        </Toolbar>
      </AppBar>
      <LoginRibbon />
    </Box>
  );
}

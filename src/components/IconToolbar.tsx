import { useState } from 'react';
import { Box, styled, Toolbar } from '@mui/material';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import List from '@mui/material/List';
import MapsHomeWorkOutlinedIcon from '@mui/icons-material/MapsHomeWorkOutlined';
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import DescriptionOutlinedIcon from '@mui/icons-material/DescriptionOutlined';
import AppSettingsAltOutlinedIcon from '@mui/icons-material/AppSettingsAltOutlined';
import RequestPageOutlinedIcon from '@mui/icons-material/RequestPageOutlined';
import FileCopyOutlinedIcon from '@mui/icons-material/FileCopyOutlined';
import LibraryAddCheckOutlinedIcon from '@mui/icons-material/LibraryAddCheckOutlined';
import AssessmentOutlinedIcon from '@mui/icons-material/AssessmentOutlined';
import WarningAmberOutlinedIcon from '@mui/icons-material/WarningAmberOutlined';
import TimelineOutlinedIcon from '@mui/icons-material/TimelineOutlined';
import PhoneIphoneOutlinedIcon from '@mui/icons-material/PhoneIphoneOutlined';
import AccordionMenus from './AccordionMenus';

const IconButton = styled(ListItemButton)(({ theme }) => ({
  display: 'inline-flex',
  padding: theme.spacing(1.5, 0),
  borderRadius: theme.shape.borderRadius,
  '&.current': {
    backgroundColor: theme.appColors.teal,
  },
}));

const ExpendedMenuDrawer = styled('div')(({ theme }) => ({
  display: 'flex',
  flex: 1,
  padding: theme.spacing(1, 0),
  borderInlineStart: `1px solid ${theme.palette.divider}`,
  overflowY: 'auto',
}));

type Props = {
  drawer: boolean;
  onDrawerToggle: (menuIdx: number) => void;
};

const NavMenus = [
  {
    icon: <MapsHomeWorkOutlinedIcon />,
    label: 'My Organization',
    tooltip: '',
    link: '#',
  },
  {
    icon: <HomeOutlinedIcon />,
    label: 'Home',
    tooltip: '',
    link: '#',
  },
  {
    icon: <DescriptionOutlinedIcon />,
    label: 'Documents',
    tooltip: '',
    link: '#',
  },
  {
    icon: <AppSettingsAltOutlinedIcon />,
    label: 'App Settings',
    tooltip: '',
    link: '#',
  },
  {
    icon: <RequestPageOutlinedIcon />,
    label: 'Expenses',
    tooltip: '',
    link: '#',
  },
  {
    icon: <AssessmentOutlinedIcon />,
    label: 'Assessments',
    tooltip: '',
    link: '#',
  },
  {
    icon: <FileCopyOutlinedIcon />,
    label: 'Reports',
    tooltip: '',
    link: '#',
  },
  {
    icon: <LibraryAddCheckOutlinedIcon />,
    label: 'Approvals',
    tooltip: '',
    link: '#',
  },
  {
    icon: <WarningAmberOutlinedIcon />,
    label: 'Errors',
    tooltip: '',
    link: '#',
  },
  {
    icon: <TimelineOutlinedIcon />,
    label: 'Analysis',
    tooltip: '',
    link: '#',
  },
];

const UserMenus = [
  {
    icon: <PhoneIphoneOutlinedIcon />,
    label: 'My App',
    tooltip: '',
    link: '#',
  },
];

export default function IconToolbar({ drawer, onDrawerToggle }: Props) {
  const [activeMenuIndex, setActiveMenuIndex] = useState(0);

  function handleMenuClick(index: number) {
    setActiveMenuIndex(index);
    onDrawerToggle(index);
  }

  return (
    <>
      <Toolbar />
      <Box
        sx={{
          display: 'flex',
          backgroundColor: (theme) => theme.palette.background.default,
          overflow: 'hidden',
          height: '100%',
        }}
      >
        <Box
          sx={{
            paddingInline: 0.5,
            display: 'flex',
            flexDirection: 'column',
            height: '100%',
            overflowY: 'auto',
            overflowX: 'hidden',
          }}
        >
          <List sx={{ display: 'grid', rowGap: 1, paddingBlock: 2 }}>
            {NavMenus.map((menu, index) => (
              <ListItem key={index} disablePadding>
                <IconButton
                  className={activeMenuIndex === index ? 'current' : ''}
                  onClick={() => handleMenuClick(index)}
                >
                  <ListItemIcon sx={{ justifyContent: 'center' }}>
                    {menu.icon}
                  </ListItemIcon>
                </IconButton>
              </ListItem>
            ))}
          </List>
          <Divider style={{ marginBlockStart: 'auto' }} />
          <List>
            {UserMenus.map((menu, index) => (
              <ListItem
                key={index}
                disablePadding
                onClick={() => handleMenuClick(-1)}
              >
                <IconButton>
                  <ListItemIcon sx={{ justifyContent: 'center' }}>
                    {menu.icon}
                  </ListItemIcon>
                </IconButton>
              </ListItem>
            ))}
          </List>
        </Box>
        {drawer && (
          <ExpendedMenuDrawer>
            <AccordionMenus />
          </ExpendedMenuDrawer>
        )}
      </Box>
    </>
  );
}

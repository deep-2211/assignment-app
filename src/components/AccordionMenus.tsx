import { NavLink } from 'react-router';
import { Box, styled } from '@mui/material';
import { useTranslation } from 'react-i18next';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

import DashboardOutlinedIcon from '@mui/icons-material/DashboardOutlined';
import PeopleAltOutlinedIcon from '@mui/icons-material/PeopleAltOutlined';
import FileCopyOutlinedIcon from '@mui/icons-material/FileCopyOutlined';
import AccountTreeOutlinedIcon from '@mui/icons-material/AccountTreeOutlined';
import RestorePageOutlinedIcon from '@mui/icons-material/RestorePageOutlined';
import ManageAccountsOutlinedIcon from '@mui/icons-material/ManageAccountsOutlined';
import AccessTimeOutlinedIcon from '@mui/icons-material/AccessTimeOutlined';
import VerifiedOutlinedIcon from '@mui/icons-material/VerifiedOutlined';

const MenuButton = styled(NavLink)(({ theme }) => ({
  padding: theme.spacing(1.5, 2),
  display: 'flex',
  alignItems: 'center',
  borderRadius: theme.shape.borderRadius * 2,
  marginBlockEnd: theme.spacing(0.5),
  textDecoration: 'none',
  color: theme.palette.text.primary,
  transition: 'all 0.3s',
  ':hover, &.active': {
    backgroundColor: theme.appColors.blue.main,
    color: theme.palette.common.white,
  },
}));

export default function AccordionMenus() {
  const { t } = useTranslation();

  const uLinks = [
    {
      label: t('menu_lbl__users_overview'),
      link: 'users-overview',
    },
    {
      label: t('menu_lbl__users_dept'),
      link: 'departments',
    },
    {
      label: t('menu_lbl__users_key_templates'),
      link: 'key-templates',
    },
  ];
  return (
    <Box width={'100%'} paddingInline={2}>
      <Accordion
        defaultExpanded
        sx={{
          backgroundColor: 'transparent',
          '&:before': {
            display: 'none',
          },
        }}
      >
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1-content"
          id="panel1-header"
        >
          <Typography component="h3" fontWeight={600}>
            My Company LTD.
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Accordion
            sx={{
              backgroundColor: 'transparent',
              '&:before': {
                display: 'none',
              },
            }}
          >
            <AccordionSummary style={{ paddingInline: 0 }}>
              <DashboardOutlinedIcon />
              <Typography component="span" marginInlineStart={2}>
                {t('menu_lbl__overview')}
              </Typography>
            </AccordionSummary>
          </Accordion>
          <Accordion
            defaultExpanded
            sx={{
              backgroundColor: 'transparent',
              '&:before': {
                display: 'none',
              },
            }}
          >
            <AccordionSummary
              style={{ paddingInline: 0 }}
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel1-content"
              id="panel1-header"
            >
              <PeopleAltOutlinedIcon />
              <Typography component="span" marginInlineStart={2}>
                {t('menu_lbl__users')}
              </Typography>
            </AccordionSummary>
            <AccordionDetails
              sx={(theme) => ({
                borderInlineStart: `1px solid ${theme.palette.divider}`,
              })}
            >
              {uLinks.map((item, i) => (
                <MenuButton key={i} to={item.link}>
                  {item.label}
                </MenuButton>
              ))}
            </AccordionDetails>
          </Accordion>
          <Accordion
            sx={{
              backgroundColor: 'transparent',
              '&:before': {
                display: 'none',
              },
            }}
          >
            <AccordionSummary style={{ paddingInline: 0 }}>
              <FileCopyOutlinedIcon />
              <Typography component="span" marginInlineStart={2}>
                {t('menu_lbl__order_history')}
              </Typography>
            </AccordionSummary>
          </Accordion>
          <Accordion
            sx={{
              backgroundColor: 'transparent',
              '&:before': {
                display: 'none',
              },
            }}
          >
            <AccordionSummary style={{ paddingInline: 0 }}>
              <RestorePageOutlinedIcon />
              <Typography component="span" marginInlineStart={2}>
                {t('menu_lbl__multi_change')}
              </Typography>
            </AccordionSummary>
          </Accordion>
          <Accordion
            sx={{
              backgroundColor: 'transparent',
              '&:before': {
                display: 'none',
              },
            }}
          >
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              style={{ paddingInline: 0 }}
              aria-controls="panel3-content"
              id="panel3-header"
            >
              <AccountTreeOutlinedIcon />
              <Typography component="span" marginInlineStart={2}>
                Kaldsflow
              </Typography>
            </AccordionSummary>
            <AccordionDetails
              sx={(theme) => ({
                borderInlineStart: `1px solid ${theme.palette.divider}`,
              })}
            ></AccordionDetails>
          </Accordion>
          <Accordion
            sx={{
              backgroundColor: 'transparent',
              '&:before': {
                display: 'none',
              },
            }}
          >
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              style={{ paddingInline: 0 }}
              aria-controls="panel4-content"
              id="panel4-header"
            >
              <ManageAccountsOutlinedIcon />
              <Typography component="span" marginInlineStart={2}>
                {t('menu_lbl__number_overview')}
              </Typography>
            </AccordionSummary>
            <AccordionDetails
              sx={(theme) => ({
                borderInlineStart: `1px solid ${theme.palette.divider}`,
              })}
            ></AccordionDetails>
          </Accordion>
          <Accordion
            sx={{
              backgroundColor: 'transparent',
              '&:before': {
                display: 'none',
              },
            }}
          >
            <AccordionSummary style={{ paddingInline: 0 }}>
              <AccessTimeOutlinedIcon />
              <Typography component="span" marginInlineStart={2}>
                {t('menu_lbl__time_management')}
              </Typography>
            </AccordionSummary>
          </Accordion>
          <Accordion
            sx={{
              backgroundColor: 'transparent',
              '&:before': {
                display: 'none',
              },
            }}
          >
            <AccordionSummary style={{ paddingInline: 0 }}>
              <VerifiedOutlinedIcon />
              <Typography component="span" marginInlineStart={2}>
                {t('menu_lbl__licenses')}
              </Typography>
            </AccordionSummary>
          </Accordion>
        </AccordionDetails>
      </Accordion>
    </Box>
  );
}

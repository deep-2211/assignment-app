import { Box } from '@mui/material';
import { useTranslation } from 'react-i18next';
import { styled } from '@mui/material/styles';

const LoginInfo = styled('div')(({ theme }) => ({
  ...theme.typography.button,
  backgroundColor: theme.appColors.pink,
  borderBottomLeftRadius: theme.shape.borderRadius * 2,
  color: theme.palette.common.white,
  padding: theme.spacing(1, 2),
  minWidth: 250,
  position: 'absolute',
  right: 0,
}));

const Ribbon = styled('div')(({ theme }) => ({
  flexGrow: 1,
  marginInlineEnd: 'auto',
  borderBlockStart: '4px solid',
  borderBlockStartColor: theme.appColors.pink,
}));

export default function LoginRibbon() {
  const { t } = useTranslation();
  return (
    <Box
      sx={{
        display: 'flex',
        position: 'fixed',
        top: '64px',
        insetInline: 0,
        zIndex: (theme) => theme.zIndex.drawer + 1,
      }}
    >
      <Ribbon />
      <LoginInfo>
        {t('text__logged_in_user')} <span>User_NAME</span>{' '}
      </LoginInfo>
    </Box>
  );
}

import { useTranslation } from 'react-i18next';
import { Box, Drawer, IconButton, Typography } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import ModeEditOutlinedIcon from '@mui/icons-material/ModeEditOutlined';
import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined';
import BusinessOutlinedIcon from '@mui/icons-material/BusinessOutlined';
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import BusinessCenterOutlinedIcon from '@mui/icons-material/BusinessCenterOutlined';
import TranslateOutlinedIcon from '@mui/icons-material/TranslateOutlined';
import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined';
import PasswordOutlinedIcon from '@mui/icons-material/PasswordOutlined';
import useAppContext from '../hooks/useAppContext';

const panelWidth = 440;

const ListHeader = ({ text }: { text: string }) => {
  return (
    <Box
      sx={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        padding: (theme) => theme.spacing(1, 2),
        backgroundColor: (theme) => theme.palette.background.default,
        border: (theme) => `1px solid ${theme.palette.divider}`,
        borderRadius: 2,
        marginBlock: (theme) => theme.spacing(4, 2),
      }}
    >
      <Typography variant="body1" fontWeight={500}>
        {text}
      </Typography>
      <IconButton>
        <ModeEditOutlinedIcon />
      </IconButton>
    </Box>
  );
};

const ListItem = ({
  label,
  value,
  icon,
}: {
  label: string;
  value: string;
  icon: React.ReactNode;
}) => {
  return (
    <Box
      sx={{
        display: 'flex',
        columnGap: 1.5,
        alignItems: 'center',
        paddingBlock: 1,
      }}
    >
      <Box
        sx={{
          height: 40,
          aspectRatio: 1,
          backgroundColor: (theme) => theme.appColors.blue.main,
          borderRadius: '50%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          color: (theme) => theme.palette.common.white,
        }}
      >
        {icon}
      </Box>
      <Box>
        <Typography variant="body2">{label}</Typography>
        <Typography variant="subtitle1" fontWeight={500}>
          {value}
        </Typography>
      </Box>
    </Box>
  );
};

export default function InfoPanel() {
  const { t } = useTranslation();
  const { selectedUser, selectUser } = useAppContext();
  return (
    <Drawer
      sx={{
        zIndex: (theme) => theme.zIndex.drawer + 1,
      }}
      variant="temporary"
      anchor="right"
      open={selectedUser !== null}
      onClose={() => {}}
    >
      {selectedUser && (
        <>
          <Box
            sx={{
              width: panelWidth,
              py: 2,
              backgroundColor: (theme) => theme.palette.background.default,
            }}
          >
            <Box
              sx={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                padding: (theme) => theme.spacing(4, 4, 0, 4),
              }}
            >
              <Typography variant="h6">{selectedUser.fullName}</Typography>
              <IconButton
                aria-label="close panel"
                size="small"
                onClick={() => selectUser(null)}
              >
                <CloseIcon fontSize="inherit" />
              </IconButton>
            </Box>

            <Box px={4} pb={4}>
              <ListHeader text={t('lbl_infopanel__user_info')} />
              <ListItem
                label={t('table_col__name')}
                value={selectedUser.fullName}
                icon={<PersonOutlineOutlinedIcon />}
              />
              <ListItem
                label={t('table_col__email')}
                value={selectedUser.email}
                icon={<EmailOutlinedIcon />}
              />
              <ListItem
                label={t('table_col__dept')}
                value={selectedUser.department}
                icon={<BusinessOutlinedIcon />}
              />
              <ListItem
                label={t('table_col__position')}
                value={selectedUser.designation}
                icon={<BusinessCenterOutlinedIcon />}
              />
              <ListItem
                label={t('table_col__note')}
                value={selectedUser.notes}
                icon={<ModeEditOutlinedIcon />}
              />
              <ListItem
                label={t('table_col__address')}
                value={selectedUser.address}
                icon={<HomeOutlinedIcon />}
              />
              <ListItem
                label={t('table_col__lang')}
                value={selectedUser.language}
                icon={<TranslateOutlinedIcon />}
              />
              <ListHeader text={t('lbl_infopanel__login_info')} />
              <ListItem
                label={t('table_col__uname_pass')}
                value={selectedUser.username}
                icon={<PasswordOutlinedIcon />}
              />
            </Box>
          </Box>
        </>
      )}
    </Drawer>
  );
}

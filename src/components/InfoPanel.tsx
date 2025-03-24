import { useTranslation } from 'react-i18next';
import { alpha, Box, Drawer, IconButton, InputBase, List, styled, Typography } from '@mui/material';
import SaveOutlinedIcon from '@mui/icons-material/SaveOutlined';
import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined';
import ModeEditOutlinedIcon from '@mui/icons-material/ModeEditOutlined';
import CloseIcon from '@mui/icons-material/Close';
import BusinessOutlinedIcon from '@mui/icons-material/BusinessOutlined';
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import BusinessCenterOutlinedIcon from '@mui/icons-material/BusinessCenterOutlined';
import TranslateOutlinedIcon from '@mui/icons-material/TranslateOutlined';
import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined';
import PasswordOutlinedIcon from '@mui/icons-material/PasswordOutlined';
import useAppContext from '../hooks/useAppContext';
import { useEffect, useState } from 'react';
import { User } from '../types/User';
import { ListHeader } from './ListHeader';
import { ListItem } from './ListItem';
import { PANEL } from '../util/constant';

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: 'inherit',
  width: '100%',
  '& .MuiInputBase-input': {
    padding: theme.spacing(1.5),
  },
  border: `1px solid ${alpha(theme.palette.divider, 0.15)}`,
  borderRadius: theme.shape.borderRadius * 2.5,
}));

const defaultUser: User = {
  id: '',
  fullName: '',
  email: '',
  department: '',
  designation: '',
  notes: '',
  address: '',
  language: '',
  username: '',
  phoneNumber: '',
  mobileNo: '',
};

interface InfoPanelProps {
  onSave: (user: User) => void;
};

export default function InfoPanel({ onSave }: InfoPanelProps) {
  const { t } = useTranslation();
  const { selectedUser, selectUser } = useAppContext();
  const [ isEditInfo, setIsEditInfo ] = useState(false);
  const [ isLoginInfoEdit, setLoginInfoEdit ] = useState(false);
  const [ user, setUser ] = useState<User>(defaultUser);

  useEffect(() => {
    if(selectedUser) {
      setUser(selectedUser);
    }
  }, [selectedUser]);

  const ViewModePanel = (
    <List>
      <ListItem
        label={t('table_col__name')}
        value={selectedUser?.fullName ?? ''}
        icon={<PersonOutlineOutlinedIcon />}
      />
      <ListItem
        label={t('table_col__email')}
        value={selectedUser?.email ?? ''}
        icon={<EmailOutlinedIcon />}
      />
      <ListItem
        label={t('table_col__dept')}
        value={selectedUser?.department ?? ''}
        icon={<BusinessOutlinedIcon />}
      />
      <ListItem
        label={t('table_col__position')}
        value={selectedUser?.designation ?? ''}
        icon={<BusinessCenterOutlinedIcon />}
      />
      <ListItem
        label={t('table_col__note')}
        value={selectedUser?.notes ?? ''}
        icon={<ModeEditOutlinedIcon />}
      />
      <ListItem
        label={t('table_col__address')}
        value={selectedUser?.address ?? ''}
        icon={<HomeOutlinedIcon />}
      />
      <ListItem
        label={t('table_col__lang')}
        value={selectedUser?.language ?? ''}
        icon={<TranslateOutlinedIcon />}
      />
    </List>
  );

  const EditPanel = (
    <Box sx={{ display: 'flex', flexDirection: 'column', rowGap: 2 }}>
      <Box sx={{ display: 'flex', alignItems: 'center', columnGap: 1.5 }}>
        <PersonOutlineOutlinedIcon />
        <StyledInputBase
          placeholder={''}
          value={user.fullName}
          onChange={(e) => setUser(
            (user) => ({ ...user, fullName: e.target.value })
          )}
        />
      </Box>
      <Box sx={{ display: 'flex', alignItems: 'center', columnGap: 1.5 }}>
        <EmailOutlinedIcon />
        <StyledInputBase
          placeholder={''}
          value={user.email}
          onChange={(e) => setUser(
            (user) => ({ ...user, email: e.target.value })
          )}
        />
      </Box>
      <Box sx={{ display: 'flex', alignItems: 'center', columnGap: 1.5 }}>
        <BusinessOutlinedIcon />
        <StyledInputBase
          placeholder={''}
          value={user.department}
          onChange={(e) => setUser(
            (user) => ({ ...user, department: e.target.value })
          )}
        />
      </Box>
      <Box sx={{ display: 'flex', alignItems: 'center', columnGap: 1.5 }}>
        <BusinessCenterOutlinedIcon />
        <StyledInputBase
          placeholder={''}
          value={user.designation}
          onChange={(e) => setUser(
            (user) => ({ ...user, designation: e.target.value })
          )}
        />
      </Box>
      <Box sx={{ display: 'flex', alignItems: 'center', columnGap: 1.5 }}>
        <ModeEditOutlinedIcon />
        <StyledInputBase
          placeholder={''}
          value={user.notes}
          onChange={(e) => setUser(
            (user) => ({ ...user, notes: e.target.value })
          )}
        />
      </Box>
      <Box sx={{ display: 'flex', alignItems: 'center', columnGap: 1.5 }}>
        <HomeOutlinedIcon />
        <StyledInputBase
          placeholder={''}
          value={user.address}
          onChange={(e) => setUser(
            (user) => ({ ...user, address: e.target.value })
          )}
        />
      </Box>
      <Box sx={{ display: 'flex', alignItems: 'center', columnGap: 1.5 }}>
        <TranslateOutlinedIcon />
        <StyledInputBase
          placeholder={''}
          value={user.language}
          onChange={(e) => setUser(
            (user) => ({ ...user, language: e.target.value })
          )}
        />
      </Box>
    </Box>
  );

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
              width: PANEL.WIDTH,
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
              <ListHeader
                text={t('lbl_infopanel__user_info')}
                isEditMode={isEditInfo}
                onEdit={() => setIsEditInfo(fl => !fl)}
              />
              {!isEditInfo ? ViewModePanel : EditPanel}
              {isEditInfo && (
                <Box sx={{ display: 'flex', justifyContent: 'end' }} mt={2}>
                  <IconButton
                    sx={{
                      color: (theme) => theme.palette.common.white,
                      backgroundColor: (theme) => theme.appColors.blue.main
                    }}
                    onClick={() => onSave(user)}
                  >
                    <SaveOutlinedIcon />
                  </IconButton>
                </Box>
              )}
              <ListHeader
                text={t('lbl_infopanel__login_info')}
                isEditMode={isLoginInfoEdit}
                onEdit={() => setLoginInfoEdit(e => !e)}
              />
              {!isLoginInfoEdit ? (
                <ListItem
                  label={t('table_col__uname_pass')}
                  value={selectedUser.username}
                  icon={<PasswordOutlinedIcon />}
                />
              ) : ( 
                <Box sx={{ display: 'flex', alignItems: 'center', columnGap: 1.5 }}>
                  <PasswordOutlinedIcon />
                  <StyledInputBase
                    placeholder={''}
                    value={selectedUser?.username}
                    onChange={() => {}}
                  />
                </Box>
              )}
            </Box>
          </Box>
        </>
      )}
    </Drawer>
  );
}

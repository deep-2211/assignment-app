import { Box, Button, Container, IconButton } from '@mui/material';
import FilterAltOutlinedIcon from '@mui/icons-material/FilterAltOutlined';
import ViewWeekOutlinedIcon from '@mui/icons-material/ViewWeekOutlined';
import DeleteOutlinedIcon from '@mui/icons-material/DeleteOutlineOutlined';
import ModeEditOutlinedIcon from '@mui/icons-material/ModeEditOutlined';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import { useEffect, useState } from 'react';
import useAppContext from '../hooks/useAppContext';
import { User } from '../types/User';
import { useTranslation } from 'react-i18next';
import SearchField from './Search';
import { IconPosition } from '../types/Common';
import '../i18n';

export interface UsersTableProps {
  users: User[];
  onDeleteRow?: (id: string) => void;
}

export default function UsersTable({ users, onDeleteRow }: UsersTableProps) {
  const { t } = useTranslation();
  const { selectUser } = useAppContext();
  const [searchText, setSearchText] = useState('');
  const [filteredUsers, setFilteredUsers] = useState<User[] | null>(users);

  useEffect(() => {
    if (searchText) {
      const filteredUsers = users?.filter((user) =>
        user.fullName.toLowerCase().includes(searchText.toLowerCase()),
      );
      setFilteredUsers(filteredUsers);
    } else {
      setFilteredUsers(users);
    }
  }, [searchText, users]);

  const handleDelete = (user: User) => {
    if(onDeleteRow) {
      onDeleteRow(user.id);
    } 
  };

  return (
    <Container>
      <Box
        sx={{
          display: 'flex',
          padding: 3,
          alignItems: 'center',
          marginBlockStart: 4,
        }}
      >
        <Box sx={{ maxWidth: 300, marginInlineStart: -2, marginInlineEnd: 2 }}>
          <SearchField
            placeholder={t('input_placeholder__search')}
            iconPosition={IconPosition.START}
            onInputChange={(text) => setSearchText(text)}
          />
        </Box>
        <Box sx={{ display: 'flex', columnGap: 2, flex: 1 }}>
          <Button color="inherit" startIcon={<FilterAltOutlinedIcon />}>
            Filter
          </Button>
          <Button color="inherit" startIcon={<ViewWeekOutlinedIcon />}>
            Columns (5/7)
          </Button>
          <Button
            disableElevation
            variant="contained"
            sx={{
              marginInlineStart: 'auto',
              backgroundColor: (theme) => theme.appColors.blue.main,
              color: (theme) => theme.palette.common.white,
            }}
          >
            {t('btn__create_user')}
          </Button>
        </Box>
      </Box>
      <TableContainer>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>{t('table_col__name')}</TableCell>
              <TableCell>{t('table_col__dept')}</TableCell>
              <TableCell>{t('table_col__empid')}</TableCell>
              <TableCell>{t('table_col__mobile')}</TableCell>
              <TableCell>{t('table_col__email')}</TableCell>
              <TableCell></TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {filteredUsers?.length ? (
              filteredUsers.map((user) => (
                <TableRow
                  key={user.id}
                  sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                >
                  <TableCell component="th" scope="row">
                    {user.fullName}
                  </TableCell>
                  <TableCell>{user.department}</TableCell>
                  <TableCell>{user.id}</TableCell>
                  <TableCell>{user.mobileNo}</TableCell>
                  <TableCell>{user.email}</TableCell>
                  <TableCell align="right">
                    <IconButton
                      aria-label="edit"
                      color="inherit"
                      onClick={() => selectUser(user)}
                    >
                      <ModeEditOutlinedIcon />
                    </IconButton>
                    <IconButton aria-label="delete" color="inherit" onClick={() => handleDelete(user)}>
                      <DeleteOutlinedIcon />
                    </IconButton>
                  </TableCell>
                </TableRow>
              ))
            ) : (
              <TableRow
                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
              >
                <TableCell colSpan={6} sx={{ p: 0 }}>
                  <Box
                    sx={{
                      display: 'flex',
                      justifyContent: 'center',
                      alignItems: 'center',
                      minHeight: 200,
                      textAlign: 'center',
                    }}
                  >
                    <h2>{t('no_data_found')}</h2>
                  </Box>
                </TableCell>
              </TableRow>
            )}
          </TableBody>
        </Table>
      </TableContainer>
    </Container>
  );
}

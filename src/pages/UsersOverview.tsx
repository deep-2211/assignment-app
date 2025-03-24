import { Box, CircularProgress } from '@mui/material';
import UsersTable from '../components/UsersTable';
import useFetch from '../hooks/useFetch';
import { deleteUser } from '../services/api.service';
import { useState } from 'react';
import InfoPanel from '../components/InfoPanel';

export default function UsersOverview() {
  const [pageLoading, setPageLoading] = useState(false);
  
  const { data, loading, error, refetch } = useFetch('users');

  const handleDeleteUser = (userId: string) => {
    setPageLoading(true);
    deleteUser(userId).then(() => {
      refetch();
      setPageLoading(false);
    });
  };

  if (pageLoading || loading) {
    return (
      <Box
        sx={{
          display: 'flex',
          height: '90dvh',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <CircularProgress />
      </Box>
    );
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <div>
      <UsersTable users={data ?? []} onDeleteRow={handleDeleteUser}/>
      <InfoPanel />
    </div>
  );
}

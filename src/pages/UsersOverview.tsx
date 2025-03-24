import { Box, CircularProgress } from '@mui/material';
import UsersTable from '../components/UsersTable';
import useFetch from '../hooks/useFetch';

export default function UsersOverview() {
  const { data, loading, error } = useFetch('users');
  if (loading) {
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
      <UsersTable users={data ?? []} />
    </div>
  );
}

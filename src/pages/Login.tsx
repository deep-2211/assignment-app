import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import {
  TextField,
  Button,
  Box,
  Typography,
  Container,
  CssBaseline,
} from '@mui/material';
import { doFakeLogin } from '../lib/Authentication';
import { useNavigate } from 'react-router';
import { LoginResponse } from '../types/Login';

export default function Login() {
  const navigate = useNavigate();
  const { t } = useTranslation();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [submitted, setSubmitted] = useState(false);

  localStorage.removeItem('token');

  const handleSubmit = async (
    event: React.FormEvent<HTMLFormElement>,
  ): Promise<void> => {
    event.preventDefault();

    if (submitted) return;

    setSubmitted(true);
    try {
      const response: LoginResponse = await doFakeLogin(email, password);
      localStorage.setItem('token', response?.token);
      navigate('/app');
    } catch (error) {
      window.alert(error);
      setSubmitted(false);
    }
  };

  return (
    <>
      <CssBaseline />
      <Container maxWidth="xs">
        <Box
          display="flex"
          flexDirection="column"
          alignItems="center"
          justifyContent="center"
          minHeight="100vh"
        >
          <Typography variant="h5" gutterBottom>
            {t('heading__login')}
          </Typography>
          <form onSubmit={handleSubmit} style={{ width: '100%' }}>
            <Box display="flex" flexDirection="column" rowGap={2}>
              <TextField
                label={t('lbl__login_email')}
                fullWidth
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <TextField
                label={t('lbl__login_password')}
                type="password"
                fullWidth
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
              <Button
                type="submit"
                variant="contained"
                disableElevation
                fullWidth
                disabled={submitted}
              >
                {t('btn__login')}
              </Button>
            </Box>
          </form>
        </Box>
      </Container>
    </>
  );
}

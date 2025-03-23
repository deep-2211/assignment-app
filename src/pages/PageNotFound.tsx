import { Box } from '@mui/material';
import { useTranslation } from 'react-i18next';

export default function PageNotFound() {
  const { t } = useTranslation();

  return (
    <Box p={3} data-testid="page-not-found">
      <h1>{t('lbl_page__not_found')}</h1>
    </Box>
  );
}

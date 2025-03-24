import Box from '@mui/material/Box';
import IconButton from '@mui/material/IconButton';
import ModeEditOutlinedIcon from '@mui/icons-material/ModeEditOutlined';
import Typography from '@mui/material/Typography';
import CloseIcon from '@mui/icons-material/Close';

interface ListHeaderProps {
  text: string;
  isEditMode?: boolean;
  onEdit: (e: boolean) => void;
}

export const ListHeader = ({
  text,
  isEditMode = false,
  onEdit,
}: ListHeaderProps) => {
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
      {!isEditMode ? (
        <IconButton onClick={() => onEdit(true)}>
          <ModeEditOutlinedIcon />
        </IconButton>
      ) : (
        <Box>
          <IconButton onClick={() => onEdit(false)}>
            <CloseIcon />
          </IconButton>
        </Box>
      )}
    </Box>
  );
};

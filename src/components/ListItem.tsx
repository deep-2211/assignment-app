import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";

interface ListItemProps {
  label: string;
  value: string;
  icon: React.ReactNode;
};

export const ListItem = ({
  label,
  value,
  icon,
}: ListItemProps) => {
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
import { alpha, InputBase, styled } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import { IconPosition } from '../types/Common';

interface SearchProps {
  placeholder: string;
  iconPosition?: IconPosition;
}

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: 'inherit',
  width: '100%',
  '& .MuiInputBase-input': {
    padding: theme.spacing(1),
  },
}));

const Search = styled('div')(({ theme }) => ({
  position: 'relative',
  display: 'flex',
  borderRadius: theme.shape.borderRadius * 2.5,
  border: `1px solid ${alpha(theme.palette.divider, 0.15)}`,
  width: '100%',
  alignItems: 'center',
  padding: theme.spacing(0, 1),
}));

const SearchIconWrapper = styled('div')(({ theme }) => ({
  padding: theme.spacing(0, 1),
  height: '100%',
  position: 'relative',
  pointerEvents: 'none',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
}));

export default function SearchField({
  placeholder,
  iconPosition = IconPosition.END,
}: SearchProps) {
  return (
    <Search>
      {iconPosition === IconPosition.START && (
        <SearchIconWrapper>
          <SearchIcon />
        </SearchIconWrapper>
      )}
      <StyledInputBase
        placeholder={placeholder}
        inputProps={{ 'aria-label': placeholder }}
      />
      {iconPosition === IconPosition.END && (
        <SearchIconWrapper>
          <SearchIcon />
        </SearchIconWrapper>
      )}
    </Search>
  );
}

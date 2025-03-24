import { alpha, InputBase, styled } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import { IconPosition } from '../types/Common';
import { debounce } from 'lodash';

interface SearchProps {
  placeholder: string;
  iconPosition?: IconPosition;
  onInputChange?: (value: string) => void;
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
  onInputChange,
  iconPosition = IconPosition.END,
}: SearchProps) {
  const debouncedSearch = debounce((text: string) => {
    if (onInputChange) {
      onInputChange(text);
    }
  }, 500);

  const doSearch = (searchText: string) => {
    debouncedSearch(searchText);
  };

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
        onChange={(e) => doSearch(e.target.value)}
      />
      {iconPosition === IconPosition.END && (
        <SearchIconWrapper>
          <SearchIcon />
        </SearchIconWrapper>
      )}
    </Search>
  );
}

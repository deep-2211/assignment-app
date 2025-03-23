import { FormControl, InputLabel, MenuItem, Select } from '@mui/material';
import { useTheme } from '../hooks/useTheme';

const ThemeSwitcher = () => {
  const { themeMode, setThemeMode } = useTheme();

  return (
    <FormControl size="small">
      <InputLabel id="colorScheme-select-label">Theme</InputLabel>
      <Select
        labelId="colorScheme-select-label"
        value={themeMode}
        onChange={(e) => setThemeMode(e.target.value)}
        label={'Color Scheme'}
      >
        <MenuItem value="light">Light</MenuItem>
        <MenuItem value="dark">Dark</MenuItem>
        <MenuItem value="system">System</MenuItem>
      </Select>
    </FormControl>
  );
};

export default ThemeSwitcher;

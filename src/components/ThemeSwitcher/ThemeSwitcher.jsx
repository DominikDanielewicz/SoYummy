import { Switch } from './ThemeSwitcher.styled';
import { useDispatch } from 'react-redux';
import { toggleTheme } from '../../redux/theme/themeSlice';
import { selectTheme } from './../../redux/theme/selectors';
import { useSelector } from 'react-redux';

const ThemeSwitcher = () => {
  const dispatch = useDispatch();
  const themeType = useSelector(selectTheme);
  const isDarkMode = themeType === 'dark';

  const handleCheck = () => {
    dispatch(toggleTheme());
  };

  return (
    <Switch
      value={isDarkMode}
      onClick={() => {
        handleCheck();
      }}
    ></Switch>
  );
};

export default ThemeSwitcher;

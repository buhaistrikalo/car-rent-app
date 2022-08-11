import { Stack } from '@mui/material';
import Logo from 'components/Logo';
import NavBlock from 'components/NavBlock';
import SearchBar from 'components/SearchBar';
import styles from './Header.module.scss';

const Header = () => {
    return (
        <Stack direction="row" justifyContent="space-between" className={styles.header}>
            <Stack direction="row" className={styles.logoInput}>
                <Logo fontSize="32px"/>
                <SearchBar />
            </Stack>
            <NavBlock />
        </Stack>
    );
};

export default Header;

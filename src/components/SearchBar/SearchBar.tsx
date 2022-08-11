import React from 'react';
import { IconButton, InputBase, Box } from '@mui/material';
import Iconify from 'components/Iconify';

import styles from './SearchBar.module.scss';

const SearchBar = () => {
    return (
        <Box component="form" className={styles.container}>
            <IconButton
                className={styles.iconButton}
                aria-label="search"
                disableFocusRipple
                disableRipple>
                <Iconify icon="akar-icons:search" />
            </IconButton>
            <InputBase
                className={styles.text}
                placeholder="Search something here"
                inputProps={{ 'aria-label': 'Search something here' }}
            />
            <IconButton className={styles.iconButton} aria-label="settings">
                <Iconify icon="akar-icons:settings-horizontal" />
            </IconButton>
        </Box>
    );
};

export default SearchBar;

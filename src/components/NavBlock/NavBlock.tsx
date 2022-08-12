import { IconButton, Stack } from '@mui/material';
import Iconify from 'components/Iconify';
import styles from './NavBlock.module.scss';

const NavBlock = () => {
    return (
        <Stack direction="row" spacing={'20px'}>
            <IconButton
                aria-label="Likes"
                // disableFocusRipple
                disableRipple
                className={styles.button + ' ' + styles.button__likes}>
                <Iconify icon="icon-park-solid:like" sx={{ fontSize: '20px' }} />
            </IconButton>
            <IconButton
                aria-label="Notifications"
                disableFocusRipple
                disableRipple
                className={styles.button + ' ' + styles.reddote}>
                <Iconify icon="material-symbols:notifications" sx={{ fontSize: '20px' }} />
            </IconButton>
            <IconButton
                aria-label="Settings"
                disableFocusRipple
                disableRipple
                className={styles.button}>
                <Iconify icon="ci:settings-filled" sx={{ fontSize: '20px' }} />
            </IconButton>
            <IconButton
                aria-label="Profile"
                disableFocusRipple
                disableRipple
                className={styles.button}>
                <Iconify icon="fluent:inprivate-account-16-filled" sx={{ fontSize: '20px' }} />
            </IconButton>
        </Stack>
    );
};

export default NavBlock;

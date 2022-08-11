import { IconButton, Stack } from '@mui/material';
import Iconify from 'components/Iconify';
import styles from './NavBlock.module.scss';

const NavBlock = () => {
    return (
        <Stack direction="row">
            <IconButton
                aria-label="Likes"
                disableFocusRipple
                disableRipple
                className={styles.button}>
                <Iconify icon="icon-park-solid:like" />
            </IconButton>
            <IconButton
                aria-label="Notifications"
                disableFocusRipple
                disableRipple
                className={styles.button}>
                <Iconify icon="material-symbols:notifications" />
            </IconButton>
            <IconButton
                aria-label="Settings"
                disableFocusRipple
                disableRipple
                className={styles.button}>
                <Iconify icon="ci:settings-filled" />
            </IconButton>
            <IconButton
                aria-label="Profile"
                disableFocusRipple
                disableRipple
                className={styles.button}>
                <Iconify icon="fluent:inprivate-account-16-filled" />
            </IconButton>
        </Stack>
    );
};

export default NavBlock;

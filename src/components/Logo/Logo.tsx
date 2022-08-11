import { Typography } from '@mui/material';
import styles from './Logo.module.scss';

type LogoProps = {
    fontSize?: string;
};

const Logo = ({ fontSize }: LogoProps) => {
    return (
        <Typography sx={{ fontSize }} className={styles.logo}>
            MORENT
        </Typography>
    );
};

export default Logo;

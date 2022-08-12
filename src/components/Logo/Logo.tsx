import { Box } from '@mui/material';
import { Link } from 'react-router-dom';
import styles from './Logo.module.scss';

type LogoProps = {
    fontSize?: string;
};

const Logo = ({ fontSize }: LogoProps) => {
    return (
        <Link to={'/'} className={styles.container}>
            <Box sx={{ fontSize }} className={styles.logo}>
                MORENT
            </Box>
        </Link>
    );
};

export default Logo;

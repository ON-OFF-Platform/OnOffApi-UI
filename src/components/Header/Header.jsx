import React from 'react';
import styles from './Header.module.scss';
import headerLogo from '@/assets/headerLogo.png';

const Header = () => {
    return (
        <>
         <div className={styles.header}>
            <div className={styles.logo}><img src={headerLogo} /></div>
         </div>   
        </>
    );
};

export default Header;
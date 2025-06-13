import React from 'react';
import styles from './HomePage.module.scss';
import logo from '@/assets/headerLogo.png';

const HomePage = () => {
    return (
        <>
         <div className={styles.main}>
            <div className={styles.logo}><img src={logo} alt='logo'/></div>
            <div className={styles.btn}>
                <div className="btn1">Login</div>
                <div className="btn2">비회원</div>
            </div>
         </div>
        </>
    );
};

export default HomePage;
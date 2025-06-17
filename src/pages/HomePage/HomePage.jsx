import styles from './HomePage.module.scss';
import logo from '@/assets/headerLogo.png';
import { useNavigate } from 'react-router-dom';
import { PATH } from '@/utils/path';

const HomePage = () => {
    const navigation = useNavigate();

    return (
        <>
         <div className={styles.main}>
            <div className={styles.logo}><img src={logo} alt='logo'/></div>
            <div className={styles.btn}>
                <div className="btn1" onClick={() => navigation(PATH.LOGIN)}>LOGIN</div>
                <div className="btn2">JOIN</div>
            </div>
            <div className={styles.guest}>
                <div className={styles.guestBtn}>GUEST</div>
                <div className={styles.entryGuide}>⌗ GUEST 이용은 기능이 제한될 수 있습니다. </div>
            </div>
         </div>
        </>
    );
};

export default HomePage;
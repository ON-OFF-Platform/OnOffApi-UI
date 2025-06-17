import styles from './LoginPage.module.scss';

import logo from '@/assets/headerLogo.png';
import kakao from '@/assets/kakao.png';
import google from '@/assets/google.png';

import { PATH } from '@/utils/path';
import React, { useRef, useState } from 'react';

const LoginPage = () => {
    const [email, setEmail] = useState('');
    const [isEmailFocused, setIsEmailFocused] = useState(false);

    const [password, setPassword] = useState('');
    const [isPasswordFocused, setIsPasswordFocused] = useState(false);

    const [emailError, setEmailError] = useState('');
    const [passwordError, setPasswordError] = useState('');

    const emailRef = useRef();
    const passwordRef = useRef();

    const emailChange = (e) => {
        setEmail(e.target.value)

        if (email.trim()) {
            setEmailError('');
        }
    }

    const passwordChange = (e) => {
        setPassword(e.target.value)

        if (email.trim()) {
            setPasswordError('');
        }
    }

    const login = async () => {
        const isEmailEmpty = !email.trim();
        const isPasswordEmpty = !password.trim();

        let hasError = false;

        if (isEmailEmpty) {
            setEmailError('⌗ 이메일을 입력해주세요.');
            hasError = true;
        } else {
            setEmailError('');
        }

        if (isPasswordEmpty) {
            setPasswordError('⌗ 비밀번호를 입력해주세요.');
            hasError = true;
        } else {
            setPasswordError('');
        }

        if (hasError) {
            // 포커스는 순서대로 지정
            if (isEmailEmpty) {
                emailRef.current?.focus();
            } else if (isPasswordEmpty) {
                passwordRef.current?.focus();
            }
            return;
        }

        try {
            const res = await fetch('/api/auth/login', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ userId: email, password }),
            });

            if (!res.ok) {
                alert('로그인 실패');

                setEmail('');
                setPassword('');

                emailRef.current?.focus;
                return;
            }

            const data = await res.json();
            localStorage.setItem('token', data.token); // 저장
            alert('로그인 성공!');
            // navigate('/dashboard'); 등으로 이동
        } catch (err) {
            console.error(err);
            alert('오류 발생');
        }
    }

    return (
        <>
            <div className={styles.main}>
            <div className={styles.logo}><img src={logo} alt='logo' /></div>
                
            <div className={styles.btn}>
                <div className={styles.inputBox}>
                    <div className={styles.idBox}>
                    <label className={`${styles.label} ${(isEmailFocused || email) ? styles.focused : ''}`}>
                        Email
                    </label>
                    <input
                        type="text"
                        name="id"
                        id="id"
                        className="inputBox1"
                        value={email}
                        ref={emailRef}
                        onFocus={() => setIsEmailFocused(true)}
                        onBlur={() => setIsEmailFocused(false)}
                        onChange={(e) => emailChange(e)}
                    />
                    {emailError && <div className={styles.error}>{emailError}</div>}
                    </div>

                    {/* Password Input */}
                    <div className={styles.pwBox}>
                    <label className={`${styles.label2} ${(isPasswordFocused || password) ? styles.focused2 : ''}`}>
                        Password
                    </label>
                    <input
                        type="password"
                        name="password"
                        id="password"
                        className="inputBox1"
                        value={password}
                        ref={passwordRef}
                        onFocus={() => setIsPasswordFocused(true)}
                        onBlur={() => setIsPasswordFocused(false)}
                        onChange={(e) => passwordChange(e)}
                    />
                    {passwordError && <div className={styles.error}>{passwordError}</div>}
                    </div>
                    
                </div>
                
                <div className={styles.loginBtn}>
                    <div className="btn3" onClick={() => login()}>Login</div>
                </div>

                <div className={styles.social}>
                    <div className={styles.kakaoBtn}><img src={kakao}/></div>
                    <div className={styles.googleBtn}><img src={google}/></div>
                </div>
            </div>
            </div>
        </>
    );
};

export default LoginPage;
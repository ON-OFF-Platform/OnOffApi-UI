import React from 'react';
import styles from './AlertModal.module.scss';

const AlertModal = ({isOpen, closeModal, title, message, onConfirm}) => {
    if (!isOpen) return null;

    const handleBackgroundClick = (e) => {
        if (e.target.classList.contains(styles.alertModal)) {
            if (onConfirm) onConfirm();
            closeModal();
        }
    }

    const handleClose = () => {
        if (onConfirm) onConfirm(); // onConfirm 콜백 실행
        closeModal(); // 모달 닫기
    };

    return (
        <div
          className={styles.alertModal}
          onClick={handleBackgroundClick}
        >
            <div className={styles.alertModalContent}>
                <h2>{title}</h2>

                <p>{message}</p>

                <button
                  className='alertOkBtn'
                  onClick={handleClose}
                >확인</button>
            </div>
            
        </div>
    );
};

export default AlertModal;
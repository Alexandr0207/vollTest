import React from 'react';
import styles from './styles.module.scss'

const Input = ({children}) => {
    return (
        <div className={styles.container}>
            <input className={styles.input}/>
            <div className={styles.addonsContainer}>
                {children}
            </div>
        </div>
    );
};

export default Input;
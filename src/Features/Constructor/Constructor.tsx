import React from 'react';
import styles from './Constructor.module.css'

const Constructor = () => {
    return (
        <div className={styles.Constructor}>
            <span className={styles.ConstructorTitle}>
                Перетащите сюда
            </span>
            <p className={styles.ConstructorDescription}>
                любой элемент из левой панели
            </p>
        </div>
    );
};

export default Constructor;
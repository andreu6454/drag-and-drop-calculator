import React from 'react';
import styles from './Display.module.css'

const Display = () => {
    return (
        <div className={styles.displayShadow}>
            <div className={styles.display}>
                0
            </div>
        </div>
    );
};

export default Display;
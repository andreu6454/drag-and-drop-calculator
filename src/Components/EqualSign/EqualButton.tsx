import React from 'react';
import styles from './EqualButton.module.css'

const EqualButton = () => {
    return (
        <div draggable={true} className={styles.EqualButtonShadow}>
            <div className={styles.EqualButton}>
                =
            </div>
        </div>
    );
};

export default EqualButton;
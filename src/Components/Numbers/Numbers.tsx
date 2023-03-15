import React from 'react';
import styles from './Numbers.module.css'

const Numbers = () => {

    return (
        <div className={styles.NumbersShadow}>
            <div className={styles.Numbers}>
                <div className={styles.SingleNumber}>
                    1
                </div>
                <div className={styles.SingleNumber}>
                    2
                </div>
                <div className={styles.SingleNumber}>
                    3
                </div>
                <div className={styles.SingleNumber}>
                    4
                </div>
                <div className={styles.SingleNumber}>
                    5
                </div>
                <div className={styles.SingleNumber}>
                    6
                </div>
                <div className={styles.SingleNumber}>
                    7
                </div>
                <div className={styles.SingleNumber}>
                    8
                </div>
                <div className={styles.SingleNumber}>
                    9
                </div>
                <div className={styles.DoubleNumber}>
                    0
                </div>
                <div className={styles.SingleNumber}>
                    ,
                </div>
            </div>
        </div>
    );
};

export default Numbers;
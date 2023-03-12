import React from 'react';
import styles from './Operators.module.css'

const Operators = () => {
    return (
        <div draggable={true} className={styles.OperatorsShadow}>
            <div className={styles.Operators}>
                <div className={styles.OperatorsItem}>
                    /
                </div>
                <div className={styles.OperatorsItem}>
                    x
                </div>
                <div className={styles.OperatorsItem}>
                    -
                </div>
                <div className={styles.OperatorsItem}>
                    =
                </div>
            </div>
        </div>
    );
};

export default Operators;
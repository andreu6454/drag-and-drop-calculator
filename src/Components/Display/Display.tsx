import React from 'react';
import styles from './Display.module.css'
import {useAppSelector} from "../../Store/Store";

const Display = () => {
    const count = useAppSelector(state => state.constructorItems.value)

    return (
        <div className={styles.displayShadow}>
            <div className={styles.display}>
                {count}
            </div>
        </div>
    );
};

export default Display;
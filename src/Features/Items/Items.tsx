import React from 'react';
import styles from './Items.module.css'
import Display from "../../Components/Display/Display";
import Operators from "../../Components/Operators/Operators";
import Numbers from "../../Components/Numbers/Numbers";
import EqualButton from "../../Components/EqualSign/EqualButton";

const Items = () => {
    return (
        <div className={styles.Items}>
            <Display/>
            <Operators/>
            <Numbers/>
            <EqualButton/>
        </div>
    );
};

export default Items;
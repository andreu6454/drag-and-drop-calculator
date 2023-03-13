import React from 'react';
import styles from './Items.module.css'
import Display from "../../Components/Display/Display";
import Operators from "../../Components/Operators/Operators";
import Numbers from "../../Components/Numbers/Numbers";
import EqualButton from "../../Components/EqualSign/EqualButton";

const Items = () => {
        const items = [
            {component: <Display key={1}/>, order: 0, isUsed: false, isDragged: false},
            {component: <Operators key={2}/>, order: 1, isUsed: false, isDragged: false},
            {component: <Numbers key={3}/>, order: 2, isUsed: false, isDragged: false},
            {component: <EqualButton key={4}/>, order: 3, isUsed: false, isDragged: false}
        ]

        const sortItems = (a: any, b: any) => {
            if (a.order > b.order) {
                return 1
            } else {
                return -1
            }
        }

        const mappedItems = items.sort(sortItems).map((el) => {
            return el.component
        })
        return (
            <div className={styles.Items}>
                {mappedItems}
            </div>
        );
    }
;

export default Items;
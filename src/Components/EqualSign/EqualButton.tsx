import React from 'react';
import styles from './EqualButton.module.css'

const EqualButton = () => {

    function dragStartHandler(e: React.DragEvent<HTMLDivElement>) {

    }

    function dragLeaveHandle(e: React.DragEvent<HTMLDivElement>) {


    }

    function dragEnterHandle(e: React.DragEvent<HTMLDivElement>) {

    }

    return (
        <div
            onDragStart={dragStartHandler}
            onDragLeave={dragLeaveHandle}
            onDragEnter={dragEnterHandle}
            draggable
            className={styles.EqualButtonShadow}>
            <div className={styles.EqualButton}>
                =
            </div>
        </div>
    );
};

export default EqualButton;
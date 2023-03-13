import React from 'react';
import styles from './Constructor.module.css'
import AddPhotoAlternateOutlinedIcon from '@mui/icons-material/AddPhotoAlternateOutlined';
import {useAppSelector} from "../../Store/Store";

const Constructor = () => {

    const isDragged = useAppSelector(state => state.app.isDragged)

    const constructorItems: any = []


    function dragOverHandle(e: React.DragEvent<HTMLDivElement>) {
        e.preventDefault()
        e.currentTarget.style.backgroundColor = '#F0F9FF';
    }

    function dragLeaveHandle(e: React.DragEvent<HTMLDivElement>) {
        e.preventDefault()
        e.currentTarget.style.backgroundColor = '#FFFFFF';
    }

    function dropHandle(e: React.DragEvent<HTMLDivElement>) {
        e.preventDefault()
        e.currentTarget.style.backgroundColor = '#FFFFFF';
    }


    return (
        <div onDragOver={dragOverHandle}
             onDragLeave={dragLeaveHandle}
             onDrop={dropHandle}
             className={isDragged ? `${styles.Constructor} ${styles.bgColor}` : styles.Constructor} key={'Constructor'}>
            {!constructorItems.length && <>
                <AddPhotoAlternateOutlinedIcon sx={{mb: 2}}/>
                <span className={styles.ConstructorTitle}>
                Перетащите сюда
            </span>
                <p className={styles.ConstructorDescription}>
                    любой элемент из левой панели
                </p>
            </>
            }
            {constructorItems && constructorItems[0]?.component}
        </div>
    );
};

export default Constructor;
import React from 'react';
import styles from './Items.module.css'
import Display from "../../Components/Display/Display";
import Operators from "../../Components/Operators/Operators";
import Numbers from "../../Components/Numbers/Numbers";
import EqualButton from "../../Components/EqualSign/EqualButton";

type itemsPropsType = {
    items: any[]
}
const Items = ({items} : itemsPropsType) => {

    const sortItems = (a: any, b: any) => {
        if (a.order > b.order) {
            return 1
        } else {
            return -1
        }
    }



    const mappedItems = items.sort(sortItems).map((el) => {
        function dragStartHandler(e: React.DragEvent<HTMLDivElement>, item: any) {
            console.log(item)
        }
        function dragEnterHandle(e: React.DragEvent<HTMLDivElement>) {

        }
        function dragEndHandle(e: React.DragEvent<HTMLDivElement>) {

        }
        function dragDropHandle(e: React.DragEvent<HTMLDivElement>, item: any) {
            e.preventDefault()
            console.log(item)
        }
        return <div
            key={el.component.key + 'a'}
            onDragOver={(e)=> e.preventDefault()}
            onDrop={(e)=>dragDropHandle(e,el)}
            onDragEnter={(e)=>dragEnterHandle(e)}
            onDragStart={(e)=>dragStartHandler(e,el)}
            onDragEnd={(e)=>dragEndHandle(e)}
            draggable>
            {el.component}
        </div>

    })
    return (
        <div className={styles.Items}>
            {mappedItems}
        </div>
    );
};

export default Items;
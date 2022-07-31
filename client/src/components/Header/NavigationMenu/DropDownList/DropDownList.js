import React from 'react';
import styles from "./DropDownList.module.sass";
const DropDownList = ({ navigation }) => {
    const downList = Object.values(navigation)

    return (
        <ul>
            {downList.map((elem, index) => {
                if (index !== downList.length - 1) {
                    return (
                        <li key={index}>
                            <a href="http://www.google.com">{elem}</a>
                        </li>
                    )
                } else {
                    return (
                        <li key={index}>
                            <a href="http://www.google.com" className={styles.last}>{elem}</a>
                        </li>
                    )
                }
            })}

        </ul>
    );
}

export default DropDownList;
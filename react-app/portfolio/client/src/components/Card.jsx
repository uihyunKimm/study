import React, {useState} from "react";
import styles from "./../style/Card.module.scss"




const Card = () => {
    const [x,setX]=useState(0);
    const [y,setY]=useState(0);
    const handleMouseMove=(e)=>{
        setX(e.clientX);
        setY(e.clientY);
        console.log(x,y)
        /* let rotateY = 1/5 * x + 20;
        let rotateX = 4/30 * y + 20;
        e.target.style = `transform : rotateY(${rotateY}deg)`
        e.target.style = `transform : rotateX(${rotateX}deg)` */
}
    return (
        <section className={ styles.main }>
            <div className={styles.cardcontainer} onMouseMove={(e)=> handleMouseMove(e)}>
                <div className={styles.card}></div>
            </div>
        </section>
    );
};

export default Card;
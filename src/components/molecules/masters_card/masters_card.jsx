import styles from './masters_card.module.css';

const Masters_card = ({ name, img, post }) => {


    return (
        <li className={styles.masters_card}>
       
            <img
                src={img}
                alt="Фото мастера"
                className={styles.img}
            />
            <div className={styles.text_container}>
                <h3 className={styles.name}>{name}</h3>
                <p className={styles.post}>{post}</p>
            </div>
        </li>
    )
}

export default Masters_card;
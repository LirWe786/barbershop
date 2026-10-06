import styles from './masters_card.module.css';

const Masters_card = ({ name, img, post }) => {


    return (
        <li className={styles.masters_card}>
            {/* <div className={styles.img_container}>
                <img
                    src={img}
                    alt="Фото мастера"
                    className={styles.img}
                    />
            </div> */}
            <img
                src={img}
                alt="Фото мастера"
                className={styles.img}
            />
            <div className={styles.text_container}>
                <h2 className={styles.name}>{name}</h2>
                <p className={styles.post}>{post}</p>
            </div>
        </li>
    )
}

export default Masters_card;
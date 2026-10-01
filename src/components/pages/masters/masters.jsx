import styles from './master.module.css'


const Masters = () => {


    return (
        <section
            id='masters'
            className={styles.masters}
        >
            <div className={styles.service_header_div}>
                <h1 className={styles.header}>Мастера</h1>
                <div className={styles.margin}></div>
            </div>
            <ul className={styles.cards_container}>
                {/* {services.map((i, index) => <Services_card key={index} name={i.name} time={i.time} price={i.price} highlighted={i.highlighted} />)} */}
            </ul>

        </section>
    )
}

export default Masters;
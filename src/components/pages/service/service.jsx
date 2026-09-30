import styles from './service.module.css'

const Service = () => {


    return (
        <section
            id='services'
            className={styles.services}>
            <div className={styles.service_header_div}>
                <h1 className={styles.header}>Услуги</h1>
            </div>
            <div className={styles.cards_container}>

            </div>
        </section>
    )
}

export default Service;
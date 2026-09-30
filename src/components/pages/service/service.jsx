import styles from './service.module.css'
import Services_card from '@/components/molecules/services_card/services_card';

const Service = () => {


    return (
        <section
            id='services'
            className={styles.services}>
            <div className={styles.service_header_div}>
                <h1 className={styles.header}>Услуги</h1>
            </div>
            <ul className={styles.cards_container}>

            </ul>
        </section>
    )
}

export default Service;
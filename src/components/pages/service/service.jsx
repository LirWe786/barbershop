import styles from './service.module.css'
import Services_card from '@/components/molecules/services_card/services_card';
import { services } from '@/data/service';
const Service = () => {


    return (
        <section
            id='services'
            className={styles.services}>
            <div className={styles.service_header_div}>
                <h1 className={styles.header}>Услуги</h1>
                <div className={styles.margin}></div>
            </div>
            <ul className={styles.cards_container}>
                {services.map((i, index) => <Services_card key={index} name={i.name} time={i.time} price={i.price} highlighted={i.highlighted} />)}
            </ul>
        </section>
    )
}

export default Service;
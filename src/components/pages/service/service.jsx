import styles from './service.module.css'
import Services_card from '@/components/molecules/services_card/services_card';
import { services } from '@/data/service';
import Header_h from '@/components/molecules/header_h/header_h';

const Service = () => {
    return (
        <section id='services' className={styles.services}>
            <Header_h title='Услуги' />
            <div className={styles.content}>
                <p className={styles.lead}>
                    Актуальные цены и длительность — выберите услугу и запишитесь в один клик.
                </p>
                <ul className={styles.cards_container}>
                    {services.map((i, index) => (
                        <Services_card
                            key={index}
                            name={i.name}
                            time={i.time}
                            price={i.price}
                            highlighted={i.highlighted}
                        />
                    ))}
                </ul>
            </div>
        </section>
    )
}

export default Service;

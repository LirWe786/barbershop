import styles from './master.module.css'
import { masters } from '@/data/masters';
import Masters_card from '@/components/molecules/masters_card/masters_card';

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
                {masters.map((i, index) => <Masters_card key={index} name={i.name} img={i.img} post={i.post} />)}
            </ul>

        </section>
    )
}

export default Masters;
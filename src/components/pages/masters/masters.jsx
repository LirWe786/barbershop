import styles from './master.module.css'
import { masters } from '@/data/masters';
import Masters_card from '@/components/molecules/masters_card/masters_card';
import Header_h from '@/components/molecules/header_h/header_h';
const Masters = () => {


    return (
        <section
            id='masters'
            className={styles.masters}
        >
           
            <Header_h title='Мастера'></Header_h>
            <ul className={styles.cards_container}>
                {masters.map((i, index) => <Masters_card key={index} name={i.name} img={i.img} post={i.post} />)}
            </ul>

        </section>
    )
}

export default Masters;
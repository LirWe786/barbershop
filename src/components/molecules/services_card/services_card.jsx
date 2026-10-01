import styles from './services_card.module.css';
import Booking_btn from '@/components/atoms/booking_btn/booking_btn';

const Services_card = ({ name, price, time, highlighted }) => {


    return (
        <li className={styles.services_card} >
            <h2 className={styles.name}>{name}</h2>
            <div className={styles.card_main}>
                <p className={styles.time} >{time}<span className={styles.price}> {price}</span></p>
                {/* <span className={styles.price}>{price}</span> */}

                <Booking_btn />
            </div>
        </li>
    )
}

export default Services_card;
import styles from './services_card.module.css';
import Booking_btn from '@/components/atoms/booking_btn/booking_btn';

const Services_card = ({ name, price, time, highlighted }) => {
    return (
        <li
            className={`${styles.services_card} ${highlighted ? styles.highlighted : ''}`}
        >
            <div className={styles.card_info}>
                <h2 className={styles.name}>{name}</h2>
                <div className={styles.meta}>
                    <span className={styles.time}>{time}</span>
                    <span className={styles.dot} aria-hidden="true" />
                    <span className={styles.price}>{price}</span>
                </div>
            </div>
            <div className={styles.action}>
                <Booking_btn />
            </div>
        </li>
    )
}

export default Services_card;

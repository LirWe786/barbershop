import styles from './services_card.module.css';
import Booking_btn from '@/components/atoms/booking_btn/booking_btn';

const Services_card = ({})=>{


    return(
        <li className={styles.service_card}>
            <div>
                <h2>Title</h2>
                <span>1700</span>
            </div>
            <p>description</p>
            
            <Booking_btn/>
        </li>
    )
}

export default Services_card;

import styles from "./booking_btn.module.css";
import Link from "next/link";


const Booking_btn = () => {


    return (
        <button className={styles.booking_btn}>
            <Link href={'#booking'}>ЗАПИСАТЬСЯ</Link>
            </button>
    )
}

export default Booking_btn
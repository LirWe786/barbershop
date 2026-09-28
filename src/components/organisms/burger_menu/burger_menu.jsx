import styles from './burger_menu.module.css'
import Nav_Bar from '../../molecules/nav_bar/nav_bar';
import Booking_btn from '../../atoms/booking_btn/booking_btn';

const Burger_menu = () => {
    return (
        <div className={styles.burger_menu}>
            <div className={styles.burger_menu_main}>
                <Nav_Bar variant={'vertical'} />
                <Booking_btn />
            </div>
        </div>
    )
}

export default Burger_menu;
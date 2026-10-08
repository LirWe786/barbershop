'use client'

import styles from './header.module.css'
import Burger from '@/components/atoms/burger/burger';
import Nav_Bar from '@/components/molecules/nav_bar/nav_bar';
import Booking_btn from '@/components/atoms/booking_btn/booking_btn';
import { useState } from 'react';
import Burger_menu from '@/components/organisms/burger_menu/burger_menu';
const Header = () => {


    const [isOpenBurger, setIsOpenBurger] = useState(false)


    return (
        <header className={styles.header}>
            <div className={styles.logo}>
                <h1 className={styles.logo_text}>
                    AYGAM <br></br>
                    <span> BARBERSHOP</span>
                </h1>
            </div>
            <div className={styles.navbar_booking_div}>
                <Nav_Bar variant={'horizontal'} />
                <Booking_btn />
            </div>
            <Burger setIsOpen={setIsOpenBurger} isOpen={isOpenBurger}></Burger>
            {isOpenBurger ? <Burger_menu setIsOpenBurger={setIsOpenBurger} /> : '' }

        </header>
    )
}
export default Header;
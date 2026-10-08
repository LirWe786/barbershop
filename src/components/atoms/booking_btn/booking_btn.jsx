'use client'
import { useEffect } from "react";
import styles from "./booking_btn.module.css";

const Booking_btn = () => {

    useEffect(() => {
        // Загружаем скрипт DIKIDI на стороне клиента
        const existingScript = document.querySelector('script[src*="dikidi.net/js/widget.js"]');

        if (!existingScript) {
            const script = document.createElement('script');
            script.src = 'https://dikidi.net';
            script.async = true;
            document.body.appendChild(script);
        }
    }, []);

    // Убрали двоеточие и тип React.MouseEvent — теперь это валидный JS
    const handleBookingClick = (e) => {
        if (window.DikidiWidget && typeof window.DikidiWidget.init === 'function') {
            e.preventDefault();
            window.DikidiWidget.init();
        }
    };

    return (
        <a
            id="dikidi_button"
            data-company="219793"
            href="https://dikidi.ru/#widget=219793"
            onClick={handleBookingClick}
            className={styles.booking_btn}
            style={{ display: 'inline-flex', alignItems: 'center', justifyContent: 'center', textDecoration: 'none' }}
        >
            ЗАПИСАТЬСЯ
        </a>
    )
}

export default Booking_btn;
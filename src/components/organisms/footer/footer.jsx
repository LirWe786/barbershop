import styles from './footer.module.css';

const Footer = () => {
    const year = new Date().getFullYear();

    return (
        <footer className={styles.footer}>
            <div className={styles.container}>
                <div className={styles.main}>
                    <div className={styles.brand}>
                        <p className={styles.logo}>
                            АЙГАМ
                            <span className={styles.logoAccent}> BARBERSHOP</span>
                        </p>
                        <p className={styles.tagline}>
                            Классические стрижки, борода, бритьё опасной бритвой.
                        </p>
                    </div>

                    <div className={styles.block}>
                        <h2 className={styles.blockTitle}>Адрес</h2>
                        <p className={styles.text}>
                            г. Пятигорск, проспект 40 лет Октября, 58А
                        </p>
                        <p className={styles.textMuted}>
                            1-й этаж, ТЦ «Евросити»
                        </p>
                    </div>

                    <div className={styles.block}>
                        <h2 className={styles.blockTitle}>Режим работы</h2>
                        <p className={styles.text}>Ежедневно с 10:00 до 22:00</p>
                    </div>
                </div>

                <div className={styles.rule} aria-hidden="true" />

                <div className={styles.bottom}>
                    <div className={styles.legal}>
                        <p className={styles.legalLine}>
                            © {year} Барбершоп «Айгам»
                        </p>
                        <p className={styles.legalLineMuted}>
                            ИП Иванов И. И. · ИНН 771234567890 · ОГРНИП 319774600000000
                        </p>
                    </div>
                    <a
                        className={styles.policyLink}
                        href="/privacy-policy.html"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        Политика конфиденциальности
                    </a>
                </div>
            </div>
        </footer>
    );
};

export default Footer;

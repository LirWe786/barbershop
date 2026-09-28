import styles from './hero.module.css'
import Header from '@/components/organisms/header/header'

const Hero = () => {
    return (
        <section>
            <Header></Header>
            <div className={styles.hero_main} >
                <picture >
                    <source media="(max-width: 767px)" srcSet="/mobile_hero.jpg" />
                    <source media="(min-width: 768px)" srcSet="/hero.jpg" />
                    <img
                        src="/images/hero-desktop.jpg"
                        alt="Интерьер барбершопа AYGAM: кресло FEDORA и полка с инструментами"
                        className={styles.hero_img}
                    />

                </picture>
                <div className={styles.overlay}></div>
                <div className={styles.text_container}>
                    {/* <h1 className={styles.name}>
                        AYGAM
                        <br></br>
                        <span>BARBERSHOP</span>
                    </h1> */}\
                    <h1 className={styles.title}>
                        {/* AYGAM BARBERSHOP — <br></br> */}
                        <span>Твой характер в каждой детали.
                        </span>
                    </h1>
                    <p className={styles.hero_text}>Классические стрижки, борода, бритьё опасной бритвой.</p>
                        
                </div>

            </div>
        </section>
    )
}

export default Hero;
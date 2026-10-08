import styles from './hero.module.css'
import Link_arrow from '@/components/atoms/link_arrow/link_arrow'



const Hero = () => {
    return (
        <section
            id='hero'
            className={styles.hero}>
            {/* <Header></Header> */}
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
                   
                    <h1 className={styles.title}>
                      Твой характер в каждой детали. 
                    </h1>
                    <p className={styles.hero_text}>Классические стрижки, борода, бритьё опасной бритвой.</p>

                </div>
                <Link_arrow />
            </div>
        </section>
    )
}

export default Hero;
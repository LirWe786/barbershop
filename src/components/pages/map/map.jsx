'use client'
import dynamic from 'next/dynamic';
import styles from './map.module.css'
import Header_h from '@/components/molecules/header_h/header_h';

const YandexMap = dynamic(() => import('@/components/organisms/yMap/yMap.jsx'), {
    ssr: false,
    loading: () => <div style={{ height: '500px' }}>Загрузка карты...</div>,
});

export default function MapPage() {

    return (
        <section
            id='map'
            className={styles.map_section}
        >
            <Header_h title='Карта' />

            <h3 className={styles.lead}>г. Пятигорск, проспект 40 лет Октября, 58А (1-й этаж, ТЦ «Евросити»)</h3>
            <div style={{ marginTop: '20px', borderRadius: '8px', overflow: 'hidden' }}>
                <YandexMap />
            </div>
        </section>
    );
}
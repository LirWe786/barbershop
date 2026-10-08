'use client'
import dynamic from 'next/dynamic';
import styles from './map.module.css'
import Header_h from '@/components/molecules/header_h/header_h';
// Загружаем карту только на клиенте
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
            <Header_h  title='Карта'/>
            <div style={{ marginTop: '20px', borderRadius: '8px', overflow: 'hidden' }}>
                <YandexMap />
            </div>
        </section>
    );
}
'use client';
import styles from './yMap.module.css'
import { useEffect, useRef } from 'react';
import Script from 'next/script';

export default function YandexMap() {




    useEffect(() => {


        <Script
            src={`https://api-maps.yandex.ru/v3/?apikey=${process.env.NEXT_PUBLIC_YANDEX_MAP_API_KEY}&lang=ru_RU`}
            strategy="afterInteractive"
            onLoad={initMap}
        />
        const mapContainerRef = useRef(null);

        if (typeof window === 'undefined' || !window.ymaps3) return;

        const ymaps3 = window.ymaps3;

        async function initMap() {
            try {

                await ymaps3.ready;
                const { YMap, YMapDefaultSchemeLayer, YMapDefaultFeaturesLayer } = ymaps3;

                const { YMapMarker } = ymaps3;


                if (!mapContainerRef.current) return;

                mapContainerRef.current.innerHTML = '';

                const coordinates = [43.063679, 44.040707,]
                const map = new YMap(mapContainerRef.current, {
                    location: {
                        center: coordinates,
                        zoom: 50,
                    },
                });
                map.addChild(new YMapDefaultSchemeLayer({}));
                map.addChild(new YMapDefaultFeaturesLayer({}));
                const markerElement = document.createElement('div');

                markerElement.innerHTML = `
        <div style="
          background-color: #0070f3; 
          color: white; 
          padding: 8px 12px; 
          border-radius: 20px; 
          font-family: sans-serif;
          font-size: 14px;
          font-weight: bold;
          box-shadow: 0 4px 10px rgba(0,0,0,0.3);
          white-space: nowrap;
          cursor: pointer;
          transform: translate(-50%, -125%); 
        ">
          📍 Наш офис
        </div>
      `;

                const customMarker = new YMapMarker(
                    { coordinates: coordinates },
                    markerElement
                );

                // Чтобы активировать кастомный маркер, раскомментируйте строчку ниже (и закомментируйте Вариант 1):
                map.addChild(customMarker);
            } catch (err) {
                console.log(new Error(err))
            }
        }

        initMap();
    }, []);

    // Задаем контейнеру размеры, иначе он будет с нулевой высотой
    return (
        <div
            ref={mapContainerRef}
            className={styles.map}
        />
    );
}

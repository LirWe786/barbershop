'use client';
import styles from './yMap.module.css'
import { useEffect, useRef } from 'react';

export default function YandexMap() {
    const mapContainerRef = useRef(null);

    useEffect(() => {
        // Проверяем, что мы в браузере и скрипт Яндекса уже на месте
        if (typeof window === 'undefined' || !window.ymaps3) return;

        const ymaps3 = window.ymaps3;

        async function initMap() {
            try {
                // Ждем, пока API полностью инициализируется
                await ymaps3.ready;

                // Достаем нужные модули для создания карты и слоев
                const { YMap, YMapDefaultSchemeLayer, YMapDefaultFeaturesLayer } = ymaps3;
                // const { YMapDefaultMarker } = await import('@yandex/ymaps3-default-ui-theme');
                const { YMapMarker } = ymaps3;


                if (!mapContainerRef.current) return;

                // Очищаем контейнер перед рендером (защита от дублирования карты при редактировании кода)
                mapContainerRef.current.innerHTML = '';

                // Создаем карту ([долгота, широта])
                // const coordinates = [43.064296, 44.040463,]
                const coordinates = [43.063679, 44.040707,]
                const map = new YMap(mapContainerRef.current, {
                    location: {
                        center: coordinates,
                        zoom: 50,
                    },
                });

                // Добавляем обязательные слои: подложку карты и слой для будущих объектов (меток)
                map.addChild(new YMapDefaultSchemeLayer({}));
                map.addChild(new YMapDefaultFeaturesLayer({}));
                // const defaultMarker = new YMapDefaultMarker({
                //     coordinates: coordinates,
                //     // title: 'Мы находимся здесь!',
                //     // subtitle: 'Приходите в гости',
                // });

                // map.addChild(defaultMarker);

                const markerElement = document.createElement('div');

                // Пишем любой HTML/CSS код внутри. Сюда можно вставить SVG, картинку или иконку
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
          transform: translate(-50%, -100%); /* Центрируем маркер ровно над точкой */
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

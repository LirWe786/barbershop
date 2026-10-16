
import { Dela_Gothic_One, Golos_Text } from 'next/font/google';
import "./globals.css";
import Script from 'next/script';

const dela = Dela_Gothic_One({
  subsets: ['latin', 'cyrillic'],
  variable: '--font-dela',
  display: 'swap',
  weight: "400"
});
const golos = Golos_Text({
  subsets: ['latin', 'cyrillic'],
  variable: '--font-golos',
  weight: "400"



})

export const metadata = {
  title: "Айгам Барбершоп в Пятигорске | Мужские стрижки и бритьё",
  description: "Премиальный мужской барбершоп АЙГАМ в Пятигорске. Профессиональные стрижки, оформление бороды, бритье опасной бритвой. Запишитесь онлайн у Нас на сайте",
  keywords: ['барбершоп пятигорск', 'мужская стрижка пятигорск', 'бритье бороды пятигорск', 'aygam barbershop pyatigorsk', 'записаться к барберу пятигорск', 'айгам барбершоп пятигорск'],
  verification: {
    google: 'odSRNUu858bpRY25kENctCFEbSlFp_RLX_oGvYDc-7A',
       yandex: '84c050c2c296dbd3'
  },
  openGraph: {
    siteName: 'Айгам Барбершоп', // <-- Сюда пиши точное имя, которое хочешь видеть в поиске!
    title: 'Айгам Барбершоп в Пятигорске',
    description: 'Премиальный мужской барбершоп AYGAM.',
    url: 'https://ayham-barbershop.vercel.app/',
    type: 'website',
  },

};

export default function RootLayout({ children }) {
  return (
    <html lang="ru" className={`${golos.variable} ${dela.variable}`}>
      <body>
        {children}
        <Script
          src={`https://api-maps.yandex.ru/v3/?apikey=${process.env.NEXT_PUBLIC_YANDEX_MAP_API_KEY}&lang=ru_RU`}
          strategy="beforeInteractive"
        />
        <Script type="text/javascript" src="https://dikidi.ru/assets/js/widget_record/widget2.min.js?v=1773811740" strategy='afterInteractive'></Script>

      </body>
    </html>
  );
}

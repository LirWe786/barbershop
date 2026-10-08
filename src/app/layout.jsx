
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
  title: "Aygam Barbershop",
  description: "Aygam Barbershop - больше чем просто стрижка",
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
      </body>
    </html>
  );
}

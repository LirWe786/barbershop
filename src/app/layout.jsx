
import { Dela_Gothic_One, Golos_Text } from 'next/font/google';
import "./globals.css";


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
  description: "Премиальный мужской барбершоп AYGAM. Профессиональные стрижки, оформление бороды, бритье опасной бритвой. Запишитесь онлайн у Нас на сайте",
  keywords: ['барбершоп пятигорск', 'мужская стрижка пятигорск', 'бритье бороды', 'AYGAM barbershop', 'записаться к барберу пятигорск', 'айгам барбершоп'],
  verification:{
    google:'odSRNUu858bpRY25kENctCFEbSlFp_RLX_oGvYDc-7A'
  }
};

export default function RootLayout({ children }) {
  return (
    <html lang="ru" className={`${golos.variable} ${dela.variable}`}>
    
      <body>
        {children}
       
      </body>
    </html>
  );
}

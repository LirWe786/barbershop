
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
  title: "Aygam Barbershop",
  description: "Aygam Barbershop - больше чем просто стрижка",
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


import styles from './nav_bar.module.css'
import Nav_link from "@/components/atoms/nav_link/nav_link"
import { links } from "@/data/links"



const Nav_Bar = ({ variant }) => {

    const cls = variant === 'vertical' ? styles.navVertical : styles.navHorizontal
    console.log(variant)
    return (
        <nav className={cls} >
            {links.map((i, index) => <Nav_link key={index} name={i.name} href={i.href} />)}
        </nav>
    )

}

export default Nav_Bar
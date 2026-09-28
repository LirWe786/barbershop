import styles from './nav_link.module.css'
import Link from "next/link"


const Nav_link = ({ href, name }) => {
    return (
        <Link className={styles.link} href={href}>{name}</Link>
    )
}

export default Nav_link;
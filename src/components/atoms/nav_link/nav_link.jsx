import styles from './nav_link.module.css'
import Link from "next/link"


const Nav_link = ({ href, name, setIsOpenBurger }) => {
    return (
        <Link
            className={styles.link}
            href={href}
            onClick={()=>{
                setIsOpenBurger(false)
            }}
        >{name}</Link>
    )
}

export default Nav_link;
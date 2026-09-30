import styles from './link_arrow.module.css';
import Link from 'next/link';
import { ArrowDown } from 'lucide-react';
const Link_arrow = () => {


    return(
        <Link
        href={'#services'}
        className={styles.link_arrow}>
           
            <ArrowDown color='white' size={30}></ArrowDown>
        </Link>
    )
}

export default Link_arrow;

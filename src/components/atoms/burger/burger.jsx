

import styles from './burger.module.css'
import { Menu, X } from 'lucide-react';

const Burger = ({ isOpen, setIsOpen }) => {

    // let { isOpen, setIsOpen } = params;


    return (
        <button className={styles.burger}
        onClick={()=>{
            setIsOpen(!isOpen);
        }}
        >
            {isOpen ? <X size={34} /> : <Menu size={34}></Menu>}
        </button>
    )
}

export default Burger;
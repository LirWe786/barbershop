import styles from './header_h.module.css';

const Header_h = ({title}) => {


    return (
        <div className={styles.service_header_div}>
            <h1 className={styles.header}>{title}</h1>
            <div className={styles.margin}></div>
        </div>
    );
};

export default Header_h;
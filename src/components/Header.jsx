//header component for css file where styling for header is applied
//This file include text included in header
import styles from "./header.module.css";
export default function Header() {
    return <div className={styles.header}>My Todo List</div>;
}
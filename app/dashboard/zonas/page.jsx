import styles from '../../ui/dashboard/zonas/zonas.module.css'
import Search from '../../ui/dashboard/search/search'
import Link from 'next/link'

const ZonasPage = () => {
    return (
        <div className={styles.container}>
            <div className={styles.top}>
                <Search placeholder="Buscar zonas" />
                <Link href="dashboard/zonas/add">
                    <button className={styles.button}>Agregar zona</button>
                </Link>
            </div>
            <table className={styles.table}></table>
        </div>
    )
}

export default ZonasPage
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
            <table className={styles.table}>
                <thead>
                    <tr>
                        <td>Name</td>
                        <td>Geometry</td>
                        <td>Created</td>
                        <td>Actions</td>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>test 1</td>
                        <td>coordenada test 1</td>
                        <td>24-12-2023</td>
                        <td>
                            <div className={styles.buttons}>
                                <Link href="">
                                    <button className={`${styles.button}`}>Ver</button>
                                </Link>
                                <Link href="">
                                <button className={`${styles.button}`}>Editar</button>
                                </Link>
                                <button className={`${styles.button}`}>Editar</button>
                            </div>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    )
}

export default ZonasPage
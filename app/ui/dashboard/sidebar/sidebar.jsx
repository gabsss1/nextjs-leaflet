import styles from "./sidebar.module.css"
import { BiWorld} from "react-icons/bi";
import {MdDashboard, MdLogout} from "react-icons/md";
import MenuLink from "./menuLink/menuLink";
import Image from "next/image";

const menuItems = [
    {
        title: "Pages",
        list: [
            {
                title: "Dashboard",
                path: "/dashboard",
                icon: <MdDashboard />,
            },
            {
                title: "Zonas",
                path: "/dashboard/zonas",
                icon: <BiWorld />,
            },
        ],
    },
]

const SideBar = () => {
    return (
        <div className={styles.container}>
        <div className={styles.user}>
            <Image className={styles.userImage} src="/noavatar.jpg" alt="" width="50" height="50" />
            <div className={styles.userDetail}>
                <span className={styles.username}>Gabriel Ventura</span>
                <span className={styles.role}>Admin</span>
            </div>
        </div>
            <ul className={styles.list}>
                {menuItems.map((cat) => (
                    <li key={cat.title}>
                        <span className={styles.cat}>{cat.title}</span>
                        {cat.list.map(item=>(
                        <MenuLink item={item} key={item.title}/>
                        ))}
                    </li>
                ))}
            </ul>
            <button className={styles.logout}>
                <MdLogout />
                Logout
            </button>
        </div>
    )
}

export default SideBar
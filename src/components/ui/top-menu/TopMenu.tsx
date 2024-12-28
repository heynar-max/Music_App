'use client'; 
import Image from "next/image"
import Link from "next/link"
import { usePathname } from "next/navigation";

import { IoSearchOutline } from "react-icons/io5"


export const TopMenu = () => {

    const pathname = usePathname();

        // Función para verificar si la ruta está activa
        // Aseguramos que 'path' sea un string
        const isActive = (path: string): boolean => pathname === path;


    return (
        <nav className="top_menu_container"
            style={{ backgroundColor: 'var(--c-blue-500)' }}
        >
            {/* logo  */}
            <div>
                <Link
                    href='/'>
                        
                        <Image src='/imgs/logoM.png' 
                        alt='logo'
                        width={100}
                        height={100}
                        priority
                        />
                </Link>
            </div>
            {/* center menu  */}
            <div>
                <Link className={`nav-item ${isActive('/') ? 'active' : ''}`} href='/'>Home</Link>

                <Link className={`nav-item ${isActive('/category/favorito') ? 'active' : ''}`} href='/category/favorito'>Categoria</Link>

                <Link className={`nav-item ${isActive('/favorite') ? 'active' : ''}`} href='/favorite'>Favoritos</Link>
                
            </div>
            {/* Search, Cart, Menu  */}
            <div className="flex items-center">
                <Link href='/search' className="mx-2">
                    <IoSearchOutline className="w-5 h-5"/>
                </Link>
                
                <button className="avatar">
                <Image className="image_avatar" src='https://res.cloudinary.com/dzty81hol/image/upload/v1735351564/q2jeo64q4acwoj9vick5.jpg' 
                        alt='logo'
                        width={100}
                        height={100}
                        priority
                        />
                </button>
            </div>
        </nav>
    )
}
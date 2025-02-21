'use client'; 

import { useUIStore } from "@/store";
import Image from "next/image"
import Link from "next/link"
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

import { IoGridOutline, IoSearchOutline } from "react-icons/io5"
import { RiHeart3Line, RiHomeLine, RiUser3Line } from "react-icons/ri";


export const TopMenu = () => {

    const pathname = usePathname();

        // Función para verificar si la ruta está activa
        // Aseguramos que 'path' sea un string
        const isActive = (path: string): boolean => pathname === path;


        const [isSmallScreen, setIsSmallScreen] = useState(false);

        useEffect(() => {
        // Función que se ejecuta cada vez que cambia el tamaño de la ventana
        const handleResize = () => {
        setIsSmallScreen(window.innerWidth < 800);
        };

        // Agregar un event listener para detectar cambios en el tamaño de la ventana
        window.addEventListener('resize', handleResize);

        // Limpiar el event listener cuando el componente se desmonta
        return () => {
        window.removeEventListener('resize', handleResize);
        };
    }, []);

    const openSideMenu = useUIStore( state => state.openSideMenu)


    return (
        <>
        <nav className="top_menu_container">
            {/* logo  */}
            <div>
                <Link
                    href='/'>
                        
                        {/* Mostrar logo según el tamaño de la pantalla */}
                            {isSmallScreen ? (
                                
                                <Image 
                                    className="top_menu_logo"
                                    // src='/imgs/logoM.png' 
                                    src='/imgs/solo.png' 
                                    alt='logo'
                                    width={100}
                                    height={100}
                                    priority
                                    />
                            ) : (
                                <Image
                                    className="top_menu_logo"
                                    // src='/imgs/solo.png' 
                                    src='/imgs/logoM.png' 
                                    alt='logo'
                                    width={100}
                                    height={100}
                                    priority
                                    />
                            )}

                </Link>
            </div>
            {/* center menu  */}
            <div className="center_menu">
                <Link className={`nav-item ${isActive('/') ? 'active' : ''}`} href='/'>Home</Link>

                <Link className={`nav-item ${isActive('/category/favorito') ? 'active' : ''}`} href='/category/abc'>Genero</Link>

                <Link className={`nav-item ${isActive('/favorite') ? 'active' : ''}`} href='/favorite'>Favoritos</Link>
                
            </div>
            {/* Search, Menu  */}
            <div className="flex items-center">
                <Link href='/search' className="mx-2">
                    <IoSearchOutline className="w-5 h-5"/>
                </Link>
                
                <button className="avatar"
                    onClick={ openSideMenu }
                >
                <Image className="image_avatar" src='https://res.cloudinary.com/dzty81hol/image/upload/v1735351564/q2jeo64q4acwoj9vick5.jpg' 
                        alt='logo'
                        width={100}
                        height={100}
                        priority
                        />
                </button>
            </div>
        </nav>

        <nav>
            <footer className="menu">
                <div className="menu-inner">
                    <Link 
                        className={`nav-item ${isActive('/') ? 'active' : ''}`} href='/' >
                        <RiHomeLine />
                    </Link>

                    <Link 
                        className={`nav-item ${isActive('/category/favorito') ? 'active' : ''}`} href='/category/abc'>
                        
                        <IoGridOutline />
                    </Link>
                    <Link 
                        className={`nav-item ${isActive('/favorite') ? 'active' : ''}`} href='/favorite'>
                        <RiHeart3Line />
                        
                    </Link>

                    <Link 
                        className={`nav-item ${isActive('/user') ? 'active' : ''}`} href='/user'>
                        <RiUser3Line />
                        
                    </Link>
                </div>
            </footer>
        </nav>
        </>
    )
}
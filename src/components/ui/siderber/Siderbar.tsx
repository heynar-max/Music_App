'use client';

import { logout } from "@/actions";
import { useUIStore } from "@/store";
import clsx from "clsx";
import { useSession } from "next-auth/react";
import Link from "next/link"
import { IoCloseOutline, IoExit, IoHeart,  IoLogOut, IoMusicalNotesSharp,  IoPerson, IoSearchOutline, } from "react-icons/io5"


export const Sidebar = () => {

    const isSideMenuOpen = useUIStore( state => state.isSideMenuOpen );
    const closeMenu = useUIStore( state => state.closeSideMenu );

    const { data: session } = useSession();
    const isAuthenticated = !!session?.user;
    const isAdmin = session?.user.role === "admin";

    return (
        <div>
            {/* Blackground black  */}
            {
                isSideMenuOpen && (
                <div
                    className="fixed top-0 left-0 w-screen h-screen z-10 bg-black opacity-30"
                />

                )
            }

            {/* blur  */}
            {
                isSideMenuOpen && (
                <div
                    onClick={ closeMenu }
                    className="fade-in fixed top-0 left-0 w-screen h-screen z-10 backdrop-filter backdrop-blur-sm"
                />

                )
            }

            {/* Sidemenu  */}
            <nav
                className={
                    clsx(
                        "fixed p-5 right-0 top-0 w-[310px] h-screen bg-white z-20 shadow-2xl transform transition-all duration-300",
                        {
                        "translate-x-full": !isSideMenuOpen
                        }
                    )
                }>
                
                <IoCloseOutline
                    size={ 50 }
                    className="absolute top-5 right-5 cursor-pointer"
                    onClick={ () => closeMenu() }
                    
                />
                {/* Input */ }
                <div className="relative mt-14">
                    <IoSearchOutline size={ 20 } className="absolute top-2 left-2" />
                        <input
                            id="search-input-2"
                            name="search"
                            type="text"
                            placeholder="Buscar Canción"
                            autoComplete="off"
                            className="w-full bg-gray-50 rounded pl-10 py-1 pr-10 border-b-2 text-xl border-gray-200 focus:outline-none focus:border-green-600"
                        />
                </div>
                { 
                    isAuthenticated && (
                        <>
                            <Link
                            href="/profile"
                            onClick={ () => closeMenu() }
                            className="link_sidebar"
                            >
                            <IoPerson size={ 20 } />
                            <span className="ml-3 text-xl">Perfil</span>
                            </Link>
                            <Link
                            href="/"
                            className="link_sidebar"
                            >
                            <IoMusicalNotesSharp size={ 20 } />
                            <span className="ml-3 text-xl">Genero</span>
                            </Link>
                            <Link
                            href="/"
                            className="link_sidebar"
                            >
                            <IoHeart size={ 20 } />
                            <span className="ml-3 text-xl">Favoritos</span>
                            </Link>
                        </>
                    )
                }

                

                    {
                        isAuthenticated && (
                            <button
                                className="link_sidebar w-full"
                                onClick={() => {
                                    logout();
                                    closeMenu();
                                }}
                                >
                                <IoExit size={ 20 } />
                                <span className="ml-3 text-xl">Salir</span>
                            </button>
                        )
                    }
                    {
                        !isAuthenticated && (
                            <Link
                                href="/auth/login"
                                className="link_sidebar w-full"
                                onClick={ () => closeMenu() }
                                >
                                <IoLogOut size={ 20 } />
                                <span className="ml-3 text-xl">Ingresar</span>
                            </Link>
                        )
                    }

{
                        isAdmin && (
                            <>
                                <h1>hola admin</h1>
                            </>
                        )
                    }
            </nav>
        </div>
    )
}
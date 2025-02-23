import Image from "next/image"
import Link from "next/link"

interface GenerosProps {
        size?: number; // Propiedad opcional para el tamaño
}

export const Generos = ({ size = 300 }: GenerosProps) => {
        return (
        <>
                <button className="genero"
                >
                <Link href="/genero/generos/rock">
                        <Image className="image_ganero" src='https://res.cloudinary.com/dzty81hol/image/upload/v1740261759/envw7edb2vw7czkbfp76.jpg' 
                                alt='logo'
                                width={size}
                                height={size}
                                priority
                                />
                </Link>
                </button>
                <button className="genero"
                >
                <Link href="/genero/generos/rockespanol">
                        <Image className="image_ganero" src='https://res.cloudinary.com/dzty81hol/image/upload/v1740261760/dbrtk8hejoplnwcndlbs.jpg' 
                                alt='logo'
                                width={size}
                                height={size}
                                priority
                                />
                </Link>
                </button>
                <button className="genero"
                >
                <Link href="/genero/generos/poprock">
                        <Image className="image_ganero" src='https://res.cloudinary.com/dzty81hol/image/upload/v1740261760/vs6fkepg2pquwtwcpuwe.jpg' 
                                alt='logo'
                                width={size}
                                height={size}
                                priority
                                />
                </Link>
                </button>
                <button className="genero"
                >
                <Link href="/genero/generos/dance">
                        <Image className="image_ganero" src='https://res.cloudinary.com/dzty81hol/image/upload/v1740261759/n70jjqgunyp23ysuhmsd.jpg' 
                                alt='logo'
                                width={size}
                                height={size}
                                priority
                                />
                </Link>
                </button>
        </>
        )
}

import { Title } from "@/components";
import Image from "next/image";


export default async function categoryPage() {

    
    return (
        <div>
            <Title
                    titlepagina="Generos"
                    title="Escuchando todos los días"
                    subtitle="Escoge su genero favorito"
                    className="mb-2"
            />
            <div className="page_genero">
                <button className="genero"
                >
                <Image className="image_ganero" src='https://res.cloudinary.com/dzty81hol/image/upload/v1740261759/envw7edb2vw7czkbfp76.jpg' 
                        alt='logo'
                        width={300}
                        height={300}
                        priority
                        />
                </button>
                <button className="genero"
                >
                <Image className="image_ganero" src='https://res.cloudinary.com/dzty81hol/image/upload/v1740261760/dbrtk8hejoplnwcndlbs.jpg' 
                        alt='logo'
                        width={300}
                        height={300}
                        priority
                        />
                </button>
                <button className="genero"
                >
                <Image className="image_ganero" src='https://res.cloudinary.com/dzty81hol/image/upload/v1740261760/vs6fkepg2pquwtwcpuwe.jpg' 
                        alt='logo'
                        width={300}
                        height={300}
                        priority
                        />
                </button>
                <button className="genero"
                >
                <Image className="image_ganero" src='https://res.cloudinary.com/dzty81hol/image/upload/v1740261759/n70jjqgunyp23ysuhmsd.jpg' 
                        alt='logo'
                        width={300}
                        height={300}
                        priority
                        />
                </button>
            </div>
        </div>
    );
}
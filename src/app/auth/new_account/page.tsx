import Link from "next/link";


export default function New_Account() {
    return (
        <div className="flex flex-col min-h-screen pt-32 sm:pt-52">
            <div className="login-card">
                <h1 className={ ` text-4xl mb-5` }>Nueva Cuenta</h1>

                <div className="flex flex-col">

                    <label htmlFor="fullName">Nombre Completo</label>
                    <input
                    id="fullName"
                    className="login-input bg-gray-200"
                    type="text"
                    autoComplete="name" />

                    <label htmlFor="email">Correo electrónico</label>
                    <input
                    id="email"
                    className="login-input bg-gray-200"
                    type="email"
                    autoComplete="email" />


                    <label htmlFor="password">Contraseña</label>
                    <input
                    id="password"
                    className="login-input bg-gray-200"
                    type="email"
                    autoComplete="new-password"/>

                    <button
                    
                    className="btn-butonprimary">
                    Crear cuenta
                    </button>


                    {/* divisor l ine */ }
                    <div className="flex items-center my-5">
                    <div className="flex-1 border-t border-gray-500"></div>
                    <div className="px-2 text-gray-800">O</div>
                    <div className="flex-1 border-t border-gray-500"></div>
                    </div>

                    <Link
                    href="/auth/login" 
                    className="btn-buton hover:bg-sky-200 text-black py-2 px-4 rounded transition-all  text-center">
                    Ingresar
                    </Link>

                </div>
            </div>
    </div>
    
    );
}
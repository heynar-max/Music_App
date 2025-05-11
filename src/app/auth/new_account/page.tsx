import { RegisterForm } from "./ui/Register";



export default function New_Account() {
    return (
        <div className="flex flex-col min-h-screen pt-32 sm:pt-52">
            <div className="login-card">
                <h1 className={ ` text-4xl mb-5` }>Nueva Cuenta</h1>

                <RegisterForm/>
            </div>
    </div>
    
    );
}
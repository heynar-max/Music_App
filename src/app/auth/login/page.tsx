import { LoginForm } from "./ui/LoginForm";



export default function Login() {
    return (
        <div className="flex flex-col min-h-screen pt-32 sm:pt-52">
            <div className="login-card">
                <h1 className={ ` text-4xl mb-5` }>Ingresar</h1>

            <LoginForm/>
            
        </div>
    </div>
    
    );
}

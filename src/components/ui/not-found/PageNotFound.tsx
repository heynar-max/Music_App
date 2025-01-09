import Image from "next/image"
import Link from "next/link"

export const PageNotFound = () => {
    
    return (
        <div className="error-container">
            <div className="error-text">
                <h2 className="error-title">404</h2>
                <p className="error-message">whoops! lo sentimos mucho.</p>
                <p className="error-submessage">
                <span>Puedes regresar al </span>
                <Link href="/" className="error-link">
                    inicio
                </Link>
                </p>
            </div>
            <div className="error-image">
                <Image
                src="/imgs/404.png"
                alt="Starman"
                className="image-style"
                width={550}
                height={550}
                priority={true}
                />
            </div>
        </div>
    )
}
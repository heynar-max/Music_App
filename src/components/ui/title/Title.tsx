

interface Props {
    titlepagina: string;
    title: string;
    subtitle?: string;
    className?: string;
}
export const Title = ({titlepagina, title, subtitle, className }: Props) => {
    return (
        <div className={`custom-container ${className}`}>
        {/* Título para los buscadores */}
            <h1 className="custom-title-page">
                {titlepagina}
            </h1>
            <h1 className="custom-title">
                {title}
            </h1>
                {
                    subtitle && (
                    <h3 className="custom-subtitle">{subtitle}</h3>
                    )
                }
        </div>
    )
}
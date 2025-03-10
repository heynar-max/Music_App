

// Convierte una duración en formato "minutos:segundos" a segundos
export const durationToSeconds = (duration: string): number => {
    const [minutes, seconds] = duration.split(":").map(Number);
    return minutes * 60 + seconds;
};

// Convierte una cantidad de segundos a formato "horas:minutos"
export const secondsToHoursMinutes = (seconds: number): string => {
    const hours = Math.floor(seconds / 3600);
    const minutes = Math.floor((seconds % 3600) / 60);
    return hours > 0 ? `${hours} h ${minutes} min` : `${minutes} min`;
};
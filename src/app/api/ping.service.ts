import axios from './axios'

export const ping = async () => {
    try {
        const response = await axios.get('/ping');
        return response.data;
    } catch (error) {
        console.error(error);
    }
}

export const obtenerVictimarioPorDNI = async (dni: string) => {
    try {
        const response = await axios.get(`/victimario-dni/${dni}`);
        return response.data;
    } catch (error) {
        console.error(error);
    }
}
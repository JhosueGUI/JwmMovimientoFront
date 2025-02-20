import axios from "axios";
const PROGRAMACION_API = import.meta.env.VITE_PROGRAMACION_API;

const ApiCliente = axios.create({
    baseURL: PROGRAMACION_API,
    headers: {
        'Content-Type': 'application/json'
    }
})
export const getMovimientos = async () => {
    try {
        const response = await ApiCliente.get('/movimiento/get');
        return response.data.data;
    } catch (error) {
        console.error('Error al obtener programación:', error);
        throw error;
    }
}
export const getEstadoMovimiento = async () => {
    try {
        const response = await ApiCliente.get('/estado-comprobante/get');
        return response.data.data;
    } catch (error) {
        console.error('Error al obtener estado:', error);
        throw error;
    }
}
export const getRendicionMovimiento = async () => {
    try {
        const response = await ApiCliente.get('/rendicion/get');
        return response.data.data;
    } catch (error) {
        console.error('Error al obtener rendición:', error);
        throw error;
    }
}

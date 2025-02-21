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
export const getEmpresaMovimiento = async () => {
    try {
        const response = await ApiCliente.get('/empresa/get');
        return response.data.data;
    } catch (error) {
        console.error('Error al obtener Empresa:', error);
        throw error;
    }
}
export const getModoMovimiento = async () => {
    try {
        const response = await ApiCliente.get('/modo/get');
        return response.data.data;
    } catch (error) {
        console.error('Error al obtener Modo:', error);
        throw error;
    }
}
export const getMonedaMovimiento = async () => {
    try {
        const response = await ApiCliente.get('/moneda/get');
        return response.data.data;
    } catch (error) {
        console.error('Error al obtener Moneda:', error);
        throw error;
    }
}
export const getProveedorMovimiento = async () => {
    try {
        const response = await ApiCliente.get('/proveedor/get');
        return response.data.data;
    } catch (error) {
        console.error('Error al obtener Proveedor:', error);
        throw error;
    }
}
export const getCategoriaMovimiento = async () => {
    try {
        const response = await ApiCliente.get('/sub_categoria/get');
        return response.data.data;
    } catch (error) {
        console.error('Error al obtener Categoria:', error);
        throw error;
    }
}
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
export const getClienteMovimiento = async () => {
    try {
        const response = await ApiCliente.get('/cliente/get');
        return response.data.data;
    } catch (error) {
        console.error('Error al obtener Cliente:', error);
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
export const crearMovimiento = async (data) => {
    try {
        const response = await ApiCliente.post('/movimiento/create', data)
        return response.data.resp;
    } catch (error) {
        console.error('Error al crear movimiento:', error);
        throw error;
    }
}
export const crearTrazabilidad = async (data, id) => {
    try {
        const response = await ApiCliente.post(`/movimiento/trazabilidad/${id}`, data)
        return response.data.resp;
    } catch (error) {
        console.error('Error al crear trazabilidad:', error);
        throw error;
    }
}
export const getPersonaFinanza = async () => {
    try {
        const response = await ApiCliente.get('/persona_finanza/get')
        return response.data.data;
    } catch (error) {
        console.error('Error al obtener Persona :', error);
        throw error;
    }
}
export const getProveedorFinanza = async () => {
    try {
        const response = await ApiCliente.get('/proveedor_finanza/get')
        return response.data.data;
    } catch (error) {
        console.error('Error al obtener Proveedor :', error);
        throw error;
    }
}
export const getDatosPersonaApi = async (dni) => {
    try {
        const response = await ApiCliente.get(`/persona_finanza/get/${dni}`)
        return response.data.resp;
    } catch (error) {
        console.error('Error al obtener datos persona:', error);
        throw error;
    }
}
export const getDatosProveedorApi = async (ruc) => {
    try {
        const response = await ApiCliente.get(`/proveedor_finanza/get/${ruc}`)
        return response.data.resp;
    } catch (error) {
        console.error('Error al obtener datos del proveedor:', error);
        throw error;
    }
}
export const crearPersonalFinanza = async (data) => {
    try {
        const response = await ApiCliente.post("/persona_finanza/create", data)
        return response.data.resp;
    } catch (error) {
        console.error('Error al crear Personal:', error);
        throw error;
    }
}
export const crearProveedorFinanza = async (data) => {
    try {
        const response = await ApiCliente.post("/proveedor_finanza/create", data)
        return response.data.resp;
    } catch (error) {
        console.error('Error al crear Proveedor:', error);
        throw error;
    }
}


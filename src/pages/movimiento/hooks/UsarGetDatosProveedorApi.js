import { getDatosProveedorApi } from "../service/ApiMovimiento";

const UsarGetDatosProveedorApi = () => {
    const fetchDatosProveedor = async (ruc) => {
        try {
            const respuestaGet = await getDatosProveedorApi(ruc);
            return respuestaGet
        } catch (error) {
            console.error('Error al obtener datos del proveedor:', error);
        }
    }
    return { fetchDatosProveedor }
}
export default UsarGetDatosProveedorApi;
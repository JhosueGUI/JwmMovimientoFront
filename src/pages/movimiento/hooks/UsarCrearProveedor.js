import { crearProveedorFinanza } from "../service/ApiMovimiento";

const UsarCrearProveedor = () => {
    const crearProveedor = async (data) => {
        try {
            const response = await crearProveedorFinanza(data);
            return response
        } catch (error) {
            console.error('Error al crear proveedor:', error);
        }
    }
    return { crearProveedor }
}
export default UsarCrearProveedor
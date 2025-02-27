import { crearTrazabilidad } from "../service/ApiMovimiento";

const UsarCrearTrazabilidad = () => {
    const CrearTrazabilidad = async (data, id) => {
        try {
            const response = await crearTrazabilidad(data, id);
            return response;
        } catch (error) {
            console.error('Error al crear trazabilidad:', error);
        }
    }
    return { CrearTrazabilidad };
}
export default UsarCrearTrazabilidad;
import { crearPersonalFinanza } from "../service/ApiMovimiento";

const UsarCrearPersonal = () => {
    const CrearPersonal = async (data) => {
        try {
            const respuestaPost = await crearPersonalFinanza(data);
            return respuestaPost
        } catch (error) {
            console.error('Error al crear personal:', error);
        }
    }
    return { CrearPersonal }
}
export default UsarCrearPersonal;
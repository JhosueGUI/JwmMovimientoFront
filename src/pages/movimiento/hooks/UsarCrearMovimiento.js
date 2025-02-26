import { crearMovimiento } from "../service/ApiMovimiento";

const UsarCrearMovimiento = (data) => {

    const CrearMovimiento = async () => {
        try {
            const respuestaPost = await crearMovimiento(data);
            return respuestaPost;
        } catch (error) {
            console.error('Error al crear movimiento:', error);
        }
    }
    return { CrearMovimiento };
}
export default UsarCrearMovimiento;
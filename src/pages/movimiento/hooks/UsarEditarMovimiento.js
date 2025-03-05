import { editarMovimiento } from "../service/ApiMovimiento";

const UsarEditarMovimiento = () => {
    const EditarMovimiento = async (data, id) => {
        try {
            const response = await editarMovimiento(data, id);
            return response;
        } catch (error) {
            console.error('Error al editar movimiento:', error);
        }
    }
    return { EditarMovimiento };
}
export default UsarEditarMovimiento;
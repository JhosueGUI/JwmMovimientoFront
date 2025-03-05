import { crearClienteMovimiento } from "../service/ApiMovimiento";

const UsarCreateCliente = () => {
    const CrearCliente = async (data) => {
        try{
            const response = await crearClienteMovimiento(data);
            return response;
        }catch(error){
            console.error('Error al crear cliente:', error);
        }
    }
    return { CrearCliente }
}
export default UsarCreateCliente;

import { getDatosPersonaApi } from "../service/ApiMovimiento";

const UsarGetDatosPersonaApi = () => {
    const FetchDatosPersona = async (dni) => {
        try {
            const respuestaGet = await getDatosPersonaApi(dni);
            return respuestaGet;
        } catch (error) {
            console.error('Error al obtener datos de la persona:', error);
        }
    }
    return { FetchDatosPersona }
}
export default UsarGetDatosPersonaApi;
import { useEffect, useState } from "react";
import { getEstadoMovimiento } from "../service/ApiMovimiento";

const UsarGetEstado = () => {
    const [data, setData] = useState([]);
    useEffect(() => {
        const FetchMovimiento = async () => {
            try {
                const respuestaGet = await getEstadoMovimiento();
                const adaptarRespuesta = respuestaGet.map(estado => ({
                    estado_id: estado.id,
                    estado_nombre: estado.nombre_estado_comprobante
                }))
                setData(adaptarRespuesta);
            } catch (error) {
                console.error('Error al obtener estado:', error);
            }
        }
        FetchMovimiento();
    }, [])
    return { data };
}
export default UsarGetEstado;
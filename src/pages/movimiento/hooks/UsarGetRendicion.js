import { useEffect, useState } from "react";
import { getRendicionMovimiento } from "../service/ApiMovimiento";

const UsarGetRendicion = () => {

    const [data, setData] = useState([]);

    useEffect(() => {
        const FetchRendicion = async () => {
            try {
                const respuestaGet = await getRendicionMovimiento();
                const adaptarRespuesta = respuestaGet.map(rendicion => ({
                    rendicion_id: rendicion.id,
                    rendicion: rendicion.nombre_rendicion
                }))
                setData(adaptarRespuesta);
            }catch (error) {
                console.error('Error al obtener detalle:', error);
            }
        }
        FetchRendicion();
    },[])
    return { data };
}
export default UsarGetRendicion;
import { useEffect, useState } from "react";
import { getEmpresaMovimiento } from "../service/ApiMovimiento";

const UsarGetEmpresa = () => {
    const [data, setData] = useState([]);
    useEffect(() => {
        const FetchEmpresa = async () => {
            try {
                const respuestaGet = await getEmpresaMovimiento();
                setData(respuestaGet);
            } catch (error) {
                console.error('Error al obtener estado:', error);
            }
        }
        FetchEmpresa();
    }, [])
    return { data };
}
export default UsarGetEmpresa;
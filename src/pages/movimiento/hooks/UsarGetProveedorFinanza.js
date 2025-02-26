import { useEffect, useState } from "react";
import { getProveedorFinanza } from "../service/ApiMovimiento";

const UsarGetProveedorFinanza = () => {
    const [data, setData] = useState([]);
    useEffect(() => {
        const FetchProveedorFinanza = async () => {
            try {
                const respuestaGet = await getProveedorFinanza();
                setData(respuestaGet);
            } catch (error) {
                console.error('Error al obtener proveedor finanza:', error);
            }
        }
        FetchProveedorFinanza();
    }, [])
    return { data, setData };
}
export default UsarGetProveedorFinanza;
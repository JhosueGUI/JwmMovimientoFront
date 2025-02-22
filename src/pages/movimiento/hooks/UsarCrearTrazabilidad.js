import { useState } from "react";
import { crearTrazabilidad } from "../service/ApiMovimiento";

const UsarCrearTrazabilidad = (data, id) => {
    const [resp, setResp] = useState([]);
    const CrearTrazabilidad = async () => {
        try {
            const response = await crearTrazabilidad(data, id);
            setResp(response);
        } catch (error) {
            console.error('Error al crear trazabilidad:', error);
        }
    }
    return { CrearTrazabilidad, resp };
}
export default UsarCrearTrazabilidad;
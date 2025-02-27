import { useEffect } from "react";
import { useState } from "react";
import { getMovimientos } from "../service/ApiMovimiento";

const UsarGetMovimiento = () => {
    //estado para la data
    const [data, setData] = useState([]);
    //traer los datos
    useEffect(() => {
        const FetchMovimiento = async () => {
            try {
                const respuestaGet = await getMovimientos();
                const adaptarRespuesta = respuestaGet.map(movimiento => ({
                    id: movimiento.id,
                    fecha: movimiento.fecha,
                    modo: movimiento.modo?.nombre_modo,
                    n_operacion: movimiento.n_operacion,
                    cliente: movimiento.cliente?.nombre_cliente,
                    ingreso: movimiento.ingreso,
                    egreso: movimiento.egreso,
                    descripcion: movimiento.descripcion,
                    solicitante: movimiento.solicitante,
                    sub_destino_placa: movimiento.sub_destino_placa,
                    sub_categoria_id: movimiento.sub_categoria?.id,
                    categoria: movimiento.sub_categoria?.categoria?.nombre_categoria,
                    sub_categoria: movimiento.sub_categoria?.nombre_sub_categoria,
                    estado_id: movimiento.estado?.id,
                    estado: movimiento.estado?.nombre_estado_comprobante,
                    rendicion_id: movimiento.rendicion?.id,
                    rendicion: movimiento.rendicion?.nombre_rendicion,
                    serie: movimiento.serie,
                    n_factura: movimiento.n_factura,
                    fecha_factura: movimiento.fecha_factura,
                    obs: movimiento.obs,
                    n_retencion: movimiento.n_retencion,
                    fecha_retencion: movimiento.fecha_retencion,
                }));
                setData(adaptarRespuesta);
            } catch (error) {
                console.error('Error al obtener detalle:', error);
            }
        }
        FetchMovimiento();
    }, []);
    return { data, setData };
}
export default UsarGetMovimiento;
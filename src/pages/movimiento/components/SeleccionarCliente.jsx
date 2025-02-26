import { FloatLabel } from "primereact/floatlabel";
import { Dropdown } from "primereact/dropdown";
import { useEffect, useState } from "react";
import UsarGetCliente from "../hooks/UsarGetCliente";

export const SeleccionarCliente = ({ pasarMovimientoSeleccionado,pasarSetCliente }) => {
    // Hook personalizado para obtener estados
    const { data } = UsarGetCliente();
    // Estado para la selección del Dropdown
    const [clienteSeleccionado, setClienteSeleccionado] = useState(null);
    //si pasarMovimientoSeleccionado es true, se setea el estado
    // useEffect(() => {
    //     if (pasarMovimientoSeleccionado && data) {
    //         const estadoEncontrado = data.find(estado => estado.estado_id === pasarMovimientoSeleccionado.estado_id);
    //         setEstadoSeleccionado(estadoEncontrado || null);
    //     }
    // }, [pasarMovimientoSeleccionado, data]);
    const ManejoDeCliente=(e)=>{
        const seleccion=e.value;
        setClienteSeleccionado(seleccion);
        pasarSetCliente(seleccion);
    }
    return (
        <>
            <div  style={{ display: "flex", flexDirection: "column", gap: "5px" }}>
                <label htmlFor="ssn" style={{color:'#344054'}}>Cliente</label>
                <Dropdown
                    id="cliente_id"
                    value={clienteSeleccionado}
                    onChange={ManejoDeCliente}
                    options={data}
                    optionLabel="nombre_cliente"
                    showClear
                    placeholder="Seleccione un Cliente"
                    style={{ width: "100%" }}
                />
            </div>
        </>

    );
}

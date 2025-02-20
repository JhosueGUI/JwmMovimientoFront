import { Dropdown } from "primereact/dropdown";
import { useEffect, useState } from "react";
import UsarGetRendicion from "../hooks/UsarGetRendicion";

export const SeleccionarRendicion = ({ pasarMovimientoSeleccionado }) => {
    // Hook personalizado para obtener estados
    const { data } = UsarGetRendicion();
    console.log('d',pasarMovimientoSeleccionado);
    // Estado para la selección del Dropdown
    const [rendicionSeleccionado, setRendicionSeleccionado] = useState(null);
    
    //si pasarMovimientoSeleccionado es true, se setea el estado
    useEffect(() => {
        if (pasarMovimientoSeleccionado && data) {
            const rendicionEncontrado = data.find(rendicion => rendicion.rendicion_id === pasarMovimientoSeleccionado.rendicion_id);
            setRendicionSeleccionado(rendicionEncontrado || null);
        }
    }, [pasarMovimientoSeleccionado, data]);

    return (
        <>
            <div  style={{ display: "flex", flexDirection: "column", gap: "5px" }}>
            <label htmlFor="ssn" style={{color:'#344054'}}>Rendición</label>

                <Dropdown
                    id="rendicion_id"
                    value={rendicionSeleccionado}
                    onChange={(e) => setRendicionSeleccionado(e.value)}
                    options={data}
                    optionLabel="rendicion"
                    showClear
                    placeholder="Seleccione una rendición "
                    style={{ width: "100%" }}
                />
            </div>
        </>

    );
}

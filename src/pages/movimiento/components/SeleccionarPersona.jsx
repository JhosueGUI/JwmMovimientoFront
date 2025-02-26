import { FloatLabel } from "primereact/floatlabel";
import { Dropdown } from "primereact/dropdown";
import { useEffect, useState } from "react";
import UsarGetPersonaFinanza from "../hooks/UsarGetPersonaFinanza";
import { Button } from "primereact/button";
import { ModalCrearPersonalFinanza } from "../mod/ModalCrearPersonalFinanza";

export const SeleccionarPersona = ({ pasarMovimientoSeleccionado, pasarSetPersonal }) => {
    // Hook personalizado para obtener estados
    const { data, setData } = UsarGetPersonaFinanza();
    // Estado para la selección del Dropdown
    const [personalSeleccionado, setPersonalSeleccionado] = useState(null);
    //si pasarMovimientoSeleccionado es true, se setea el estado
    // useEffect(() => {
    //     if (pasarMovimientoSeleccionado && data) {
    //         const estadoEncontrado = data.find(estado => estado.estado_id === pasarMovimientoSeleccionado.estado_id);
    //         setEstadoSeleccionado(estadoEncontrado || null);
    //     }
    // }, [pasarMovimientoSeleccionado, data]);
    const ManejoDePersona = (e) => {
        const seleccion = e.value;
        setPersonalSeleccionado(seleccion);
        pasarSetPersonal(seleccion);
    }
    return (
        <>
            <div style={{ display: "flex", flexDirection: "column", gap: "5px" }}>
                <label htmlFor="ssn" style={{ color: '#344054' }}>Persona</label>
                <div style={{ display: 'flex', gap: '5px' }}>
                    <Dropdown
                        id="persona_finanza_id"
                        value={personalSeleccionado}
                        onChange={ManejoDePersona}
                        options={data}
                        optionLabel="nombre_persona"
                        showClear
                        placeholder="Seleccione una Persona"
                        style={{ width: "100%" }}
                    />
                    <ModalCrearPersonalFinanza pasarSetData={setData} />
                </div>

            </div>
        </>

    );
}

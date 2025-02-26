import { Dialog } from "primereact/dialog";
import { Button } from 'primereact/button';
import { useState } from "react";
import { InputText } from "primereact/inputtext";
import { DataPersonaFinanza } from "../data/DataPersonaFinanza";
import { InputMask } from "primereact/inputmask";
import UsarGetDatosPersonaApi from "../hooks/UsarGetDatosPersonaApi";
import UsarCrearPersonal from "../hooks/UsarCrearPersonal";
import { getPersonaFinanza } from "../service/ApiMovimiento";
export const ModalCrearPersonalFinanza = ({pasarSetData}) => {
    //hooks 
    const { FetchDatosPersona } = UsarGetDatosPersonaApi();
    const { CrearPersonal } = UsarCrearPersonal();

    const [modal, setModal] = useState(false);
    const [dataPersona, setDataPersona] = useState(DataPersonaFinanza);

    const abrirModal = () => {
        setModal(true);
    }

    const cerrarModal = () => {
        setModal(false);
    }

    const TraerDatos = async () => {
        const respuesta = await FetchDatosPersona(dataPersona.dni);
        if (respuesta) {
            setDataPersona({
                ...dataPersona,
                nombre_persona: respuesta.nombreCompleto,
            });
        }
    };
    const Crear= async()=>{
        const respuesta = await CrearPersonal(dataPersona);
        const respuestaGet = await getPersonaFinanza();
        pasarSetData(respuestaGet);
        if(respuesta){
            console.log(respuesta);
        }
        cerrarModal();
    }


    const footer = (
        <div className="botonesFooter" style={{ display: "flex", justifyContent: "space-between", width: "100%" }}>
            <Button label="Cancelar" icon="pi pi-times" className="p-button-text" onClick={cerrarModal} />
            <Button label="Confirmar" icon="pi pi-check" className="p-button-primary" onClick={Crear} />
        </div>
    );

    return (
        <>
            <Button icon="pi pi-plus" aria-label="Filter" onClick={abrirModal} />
            <Dialog
                header={<div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                    <div className="header1" style={{ display: 'flex', flexDirection: 'column' }}>
                        <label style={{ fontSize: '26px', color: '#3B75F1' }}>Personal</label>
                        <label style={{ fontSize: '18px', fontWeight: 'normal' }}>En esta sección usted puede crear el personal </label>
                    </div>
                    <Button icon="pi pi-times" rounded text severity="danger" aria-label="Cancel" onClick={cerrarModal} />
                </div>}
                visible={modal}
                style={{ width: '30%', minWidth: '300px' }}
                footer={footer}
                onHide={cerrarModal}
                closable={false}
            >
                <div style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
                    <div style={{ marginTop: "20px", width: "100%", display: 'flex', flexDirection: 'column', gap: '15px' }}>
                        <div className='dni' style={{ display: "flex", flexDirection: "column", gap: "5px", width: "100%" }}>
                            <label htmlFor="dni" style={{ color: '#344054' }}>DNI</label>
                            <div style={{ display: 'flex', gap: '5px', width: '100%' }}>
                                <InputMask
                                    mask="99999999"
                                    id="dni"
                                    name='dni'
                                    value={dataPersona.dni || ''}
                                    onChange={(e) => setDataPersona({ ...dataPersona, dni: e.value })}
                                    style={{ width: "100%" }}
                                    className="w-full"
                                />
                                <Button  label="Consultar" onClick={TraerDatos} severity="success" style={{width:'30%'}} outlined/>
                            </div>
                        </div>
                        <div className='nombre_completo' style={{ display: "flex", flexDirection: "column", gap: "5px", width: "100%" }}>
                            <label htmlFor="nombre_persona" style={{ color: '#344054' }}>Nombre Completo</label>
                            <InputText
                                id="nombre_persona"
                                name='nombre_persona'
                                value={dataPersona.nombre_persona}
                                type="text"
                                className="w-full"
                                disabled
                            />
                        </div>
                    </div>
                </div>
            </Dialog>
        </>
    );
};

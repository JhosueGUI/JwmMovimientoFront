//Input con Slider
import { Dialog } from "primereact/dialog";
import { Button } from 'primereact/button';
import { FloatLabel } from 'primereact/floatlabel';
import { InputText } from 'primereact/inputtext';
import axios from "axios";
import { useEffect, useState } from "react";
import { DataMovimiento } from "../data/DataMovimiento";
import { SeleccionarEstado } from "../components/SeleccionarEstado";
import { SeleccionarRendicion } from "../components/SeleccionarRendicion";
import { Fieldset } from "primereact/fieldset";

const ModalTrazabilidadMovimiento = ({ pasarAbrirModal, pasarCerrarModal, pasarMovimientoSeleccionado }) => {
    console.log(pasarMovimientoSeleccionado);
    //estado para la data
    const [dataMovimiento, setDataMovimiento] = useState(DataMovimiento)

    useEffect(() => {
        if (pasarMovimientoSeleccionado) {
            setDataMovimiento({
                obs: pasarMovimientoSeleccionado.obs,
                serie: pasarMovimientoSeleccionado.serie,
                n_factura: pasarMovimientoSeleccionado.n_factura,
                fecha_factura: pasarMovimientoSeleccionado.fecha_factura,
                n_retencion: pasarMovimientoSeleccionado.n_retencion,
                fecha_retencion: pasarMovimientoSeleccionado.fecha_retencion,
                estado_id: pasarMovimientoSeleccionado.estado_id,
                estado_nombre: pasarMovimientoSeleccionado.estado,
            });
        }
    }, [pasarMovimientoSeleccionado])

    const footer = (
        <div className="botonesFooter" style={{ display: "flex", justifyContent: "space-between", width: "100%" }}>
            <Button label="Cancelar" icon="pi pi-times" className="p-button-text" onClick={pasarCerrarModal} />
            <Button label="Confirmar" icon="pi pi-check" className="p-button-primary" onClick={() => console.log("Confirmado")} />
        </div>
    );


    return (
        <>
            <Dialog
                header={<div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                    <div className="header1" style={{ display: 'flex', flexDirection: 'column' }}>
                        <label style={{fontSize:'26px', color:'#3B75F1'}}>Trazabilidad</label>
                        <label style={{ fontSize:'18px', fontWeight: 'normal' }}>En esta sección usted puede realizar el flujo </label>

                    </div>

                    <Button icon="pi pi-times" rounded text severity="danger" aria-label="Cancel" onClick={pasarCerrarModal} />
                </div>}
                visible={pasarAbrirModal}
                style={{ width: '45%', minWidth: '300px' }}
                footer={footer}
                onHide={pasarCerrarModal}
                closable={false}
            >
                <div style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
                    <div style={{ marginTop: "20px", width: "100%", display: 'flex', flexDirection: 'column', gap: '15px' }}>
                        <div className="1" style={{ display: "flex", gap: "20px" }}>
                            <div className="1 1" style={{ width: "100%" }}>
                                <SeleccionarEstado pasarMovimientoSeleccionado={pasarMovimientoSeleccionado} />

                            </div>
                            <div className="1 2" style={{ width: "100%" }}>
                                <SeleccionarRendicion pasarMovimientoSeleccionado={pasarMovimientoSeleccionado} />
                            </div>
                        </div>
                        <div className="2" style={{ display: "flex", gap: "20px", width: "100%" }}>
                            <div style={{ display: "flex", flexDirection: "column", gap: "5px", width: "100%" }}>
                                <label htmlFor="serie" style={{ color: '#344054' }}>Serie</label>
                                <InputText id="serie" name='serie' type="text" className="w-full" value={dataMovimiento.serie} />
                            </div>
                            <div style={{ display: "flex", flexDirection: "column", gap: "5px", width: "100%" }}>
                                <label htmlFor="n_factura" style={{ color: '#344054' }}>N° Factura</label>
                                <InputText id="n_factura" name='n_factura' type="text" className="w-full" value={dataMovimiento.n_factura} />
                            </div>
                            <div style={{ display: "flex", flexDirection: "column", gap: "5px", width: "100%" }}>
                                <label htmlFor="fecha_factura" style={{ color: '#344054' }} >Fecha Factura</label>
                                <InputText id="fecha_factura" name='fecha_factura' type="text" className="w-full" value={dataMovimiento.fecha_factura} />
                            </div>
                        </div>
                        <div style={{ display: "flex", flexDirection: "column", gap: "5px", width: "100%" }}>
                            <label htmlFor="obs" style={{ color: '#344054' }}>OBS</label>
                            <InputText id="obs" name='obs' type="text" className="w-full" value={dataMovimiento.obs} />
                        </div>
                        <di className="3" style={{ display: "flex", gap: "20px", width: "100%" }}>
                            <div style={{ display: "flex", flexDirection: "column", gap: "5px", width: "100%" }}>
                                <label htmlFor="n_retencion" style={{ color: '#344054' }}>N° Retención</label>
                                <InputText id="n_retencion" name='n_retencion' type="text" className="w-full" value={dataMovimiento.n_retencion} />
                            </div>
                            <div style={{ display: "flex", flexDirection: "column", gap: "5px", width: "100%" }}>
                                <label htmlFor="fecha_retencion" style={{ color: '#344054' }}>Fecha Retención</label>
                                <InputText id="fecha_retencion" name='fecha_retencion' type="text" className="w-full" value={dataMovimiento.fecha_retencion} />
                            </div>
                        </di>

                    </div>
                </div>
            </Dialog>
        </>
    );
};

export default ModalTrazabilidadMovimiento;
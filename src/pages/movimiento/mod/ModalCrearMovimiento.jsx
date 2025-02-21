//Input con Slider
import { Dialog } from "primereact/dialog";
import { Button } from 'primereact/button';
import { useState } from "react";
import { useRef } from "react";
import { Toast } from "primereact/toast";
import { TabMenu } from "primereact/tabmenu";
import { InputText } from "primereact/inputtext";
import { SeleccionarEmpresa } from "../components/SeleccionarEmpresa";
import { SeleccionarModo } from "../components/SeleccionarModo";
import { SeleccionarMoneda } from "../components/SeleccionarMoneda";
import { SeleccionarProveedor } from "../components/SeleccionarProveedor";
import { SeleccionarCategoria } from "../components/SeleccionarCategoria";
import { Calendar } from "primereact/calendar";

const ModalCrearMovimiento = () => {
    //modal
    const [abrirModal, setAbrirModal] = useState(false);
    const AbrirModal = () => {
        setAbrirModal(true);
    }
    const CerrarModal = () => {
        setAbrirModal(false);
    }
    //toast
    const toast = useRef(null);
    const [activeIndex, setActiveIndex] = useState(0);
    const menus = [
        {
            label: 'Ingreso',
            icon: 'pi pi-home',
            command: () => {
                toast.current.show({ severity: 'success', summary: 'Selected', detail: 'Dashboard', life: 3000 });
            }
        },
        {
            label: 'Egreso',
            icon: 'pi pi-chart-line',
            command: () => {
                toast.current.show({ severity: 'success', summary: 'Selected', detail: 'Transactions', life: 3000 });
            }
        },
    ]

    const footer = (
        <div className="botonesFooter" style={{ display: "flex", justifyContent: "space-between", width: "100%" }}>
            <Button label="Cancelar" icon="pi pi-times" className="p-button-text" onClick={CerrarModal} />
            <Button label="Confirmar" icon="pi pi-check" className="p-button-primary" onClick={() => console.log("Confirmado")} />
        </div>
    );


    return (
        <>
            <Button icon='pi pi-plus' label="Crear Movimiento" outlined onClick={AbrirModal} />
            <Dialog
                header={<div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                    <div className="header1" style={{ display: 'flex', flexDirection: 'column' }}>
                        <label style={{ fontSize: '26px', color: '#3B75F1' }}>Generar movimiento</label>
                        <label style={{ fontSize: '18px', fontWeight: 'normal' }}>En esta sección usted puede generar un nuevo movimiento</label>
                        <div className="card">
                        </div>
                    </div>
                    <Button icon="pi pi-times" rounded text severity="danger" aria-label="Cancel" onClick={CerrarModal} />
                </div>}
                visible={abrirModal}
                style={{ width: '45%', minWidth: '300px' }}
                footer={footer}
                onHide={CerrarModal}
                closable={false}
            >

                <Toast ref={toast} />
                <TabMenu model={menus} activeIndex={activeIndex} onTabChange={(e) => setActiveIndex(e.index)} />

                <div style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
                    <div style={{ marginTop: "20px", width: "100%", display: 'flex', flexDirection: 'column', gap: '15px' }}>
                        <div className="1" style={{ display: "flex", gap: "20px" }}>
                            <div style={{ display: "flex", flexDirection: "column", gap: "5px", width: "100%" }}>
                                <label htmlFor="serie" style={{ color: '#344054' }}>Fecha</label>
                                <Calendar />
                            </div>
                            {activeIndex === 1 && (
                                <div style={{ display: "flex", flexDirection: "column", gap: "5px", width: "100%" }}>
                                    <SeleccionarModo />
                                </div>
                            )}
                        </div>
                        <div className="2" style={{ display: "flex", gap: "20px" }}>
                            <div style={{ display: "flex", flexDirection: "column", gap: "5px", width: "100%" }}>
                                <label htmlFor="serie" style={{ color: '#344054' }}>Número de Operación</label>
                                <InputText id="serie" name='serie' type="text" className="w-full" />
                            </div>
                            <div style={{ width: "100%" }}>
                                <SeleccionarProveedor />

                            </div>
                        </div>
                        <div className="3" style={{ display: "flex", gap: "20px" }}>
                            <div style={{ width: "100%" }}>
                                <SeleccionarMoneda />
                            </div>
                            {activeIndex === 0 && (
                                <div style={{ display: "flex", flexDirection: "column", gap: "5px", width: "100%" }}>
                                    <label htmlFor="serie" style={{ color: '#344054' }}>Ingreso</label>
                                    <InputText id="serie" name='serie' type="text" className="w-full" />
                                </div>
                            )}
                            {activeIndex === 1 && (
                                <div style={{ display: "flex", flexDirection: "column", gap: "5px", width: "100%" }}>
                                    <label htmlFor="serie" style={{ color: '#344054' }}>Egreso</label>
                                    <InputText id="serie" name='serie' type="text" className="w-full" />
                                </div>
                            )}
                        </div>
                        <div className="4" style={{ width: "100%" }}>
                            <SeleccionarEmpresa />
                        </div>
                        <div className="5" style={{ display: "flex", gap: "20px" }}>
                            <div style={{ display: "flex", flexDirection: "column", gap: "5px", width: "100%" }}>
                                <label htmlFor="serie" style={{ color: '#344054' }}>Descripcion</label>
                                <InputText id="serie" name='serie' type="text" className="w-full" />
                            </div>
                            {activeIndex === 1 && (
                                <div style={{ display: "flex", flexDirection: "column", gap: "5px", width: "100%" }}>
                                    <label htmlFor="serie" style={{ color: '#344054' }}>Solicitante</label>
                                    <InputText id="serie" name='serie' type="text" className="w-full" />
                                </div>
                            )}
                            {activeIndex === 1 && (
                                <div style={{ display: "flex", flexDirection: "column", gap: "5px", width: "100%" }}>
                                    <label htmlFor="serie" style={{ color: '#344054' }}>Sub destino placa</label>
                                    <InputText id="serie" name='serie' type="text" className="w-full" />
                                </div>
                            )}
                        </div>
                        <div className="6" >
                            <SeleccionarCategoria />
                        </div>
                    </div>
                </div>
            </Dialog>
        </>
    );
};

export default ModalCrearMovimiento;
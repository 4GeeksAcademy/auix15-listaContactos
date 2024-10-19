import React, {useState, useContext} from "react";
import { Context } from "../store/appContext";
import {useNavigate, useParams } from "react-router-dom";

export const AddContact = () => {
    const {store, actions } = useContext(Context);
    const [name, setName] = useState("");
    const [address, setAddress] = useState("");
    const [phone, setPhone] = useState("");
    const navigate = useNavigate();
    const { contactId } = useParams(); //PAra identificar si estamos editando un contacto

    const handleSubmit = (e) => {
        e.preventDefault();
        const newContact = {
            name,
            address,
            phone,
        };
        if (contactId) {
            //actualizar contacto existente
            actions.updateContact(contactId, newContact);
        } else {
            //crea nuevo comtacto
            actions.addContact(newContact);
        }
        navigate("/"); //regresa a la lista de contacto tras agregar o actualizar
    };

    return (
        <div className="container">
            <h1> {contact ? "Editar contacto" : "Agregar contacto"} </h1>
            <form onSubmit={handleSubmit}>
                <div className="mb-3">
                    <label className="form-label">Nombre</label>
                    <input type="text" className="form-control" value={name} onChange={(e) => setName(e.target.value)} required/>
                </div>
                <div className="mb-3">
                    <label className="form-label">Dirección</label>
                    <input type="text" className="form-control" value={address} onChange={(e) => setPhone(e.target.value)} required/>
                </div>
                <div className="mb-3">
                    <label className="form-label">Teléfono</label>
                    <input type="text" className="form-control" value={phone} onChange={(e) => setPhone(e.target.value)} required/>
                </div>
                <button type="submit" className="btn btn-succes">
                    {contactId ? "Actualizar" : "Agregar"}
                </button>
            </form>
        </div>
    );
};
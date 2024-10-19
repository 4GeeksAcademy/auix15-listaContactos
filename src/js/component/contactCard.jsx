import React, {useContext } from "react";
import { Context } from "../store/appContext";
import { Link } from "react-router-dom";

export const ContactCard =({ contact }) => {
    const { actions } = useContext(Context);

    const handleDelete = () => {
        actions.deleteContact(cpntact.id);
    };

    return (
        <div className="card mb-3">
            <div className="card-body">
                <h5 className="card-title">{contact.name}</h5>
                <p className="card-text">Dirección: {contact.address}</p>
                <p className="card-text">Teléfono: {contact.phone} </p>
                <div className="d-flex justify-content-between">
                    <link to={`/edit/${contact.id}`}>
                    <button className="btn btn-warning" onClick={handleDelete}>Editar</button>
                    </link>
                    <button className="btn btn-danger" onClick={handleDelete}>Eliminar</button>
                    
                </div>
            </div>
        </div>
    );
};
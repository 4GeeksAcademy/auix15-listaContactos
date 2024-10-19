import React, { useContext, useEffect } from "react";
import { Context } from "../store/appContext";
import { ContactCard } from "../component/contactCard";
import { Link } from "react-router-dom";

export const Contact = () => {
    const { store, actions } = useContext(Context);

    useEffect(() => {
        actions.loadSomeData(); //Cargar los datos al cargar la vista
    }, []);

    return (
        <div className="container">
            <h1>Lista de Contactos</h1>
            <div className="mb-3">
                <link to="/add">
                <button className="btn btn-success">Agregar nuevo contacto</button>
                </link>
            </div>
            <div className="list-group">
                {store.contacts.map((contact,index) => (
                    <ContactCard key={index} contact={contact} />
                ))}
            </div>
        </div>
    );
};
//demo.js

import React, { useContext, useEffect } from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";


export const Demo = () => {
    const { store, actions } = useContext(Context);

	useEffect(() => {
        actions.getContacts();
    }, []);

    return (
        <div className="container">
            <ul className="list-group">
                {/* Aquí renderiza la lista de contactos */}
                {Array.isArray(store.contacts) && store.contacts.map((item, index) => {
                    return (
                        <li
                            key={index}
                            className="list-group-item d-flex justify-content-between">
                            <span>{item.name} - {item.address}</span>
                            <button className="btn btn-danger" onClick={() => actions.deleteContact(index)}>
                                Eliminar
                            </button>
                        </li>
                    );
                })}
            </ul>
            <br />
            <Link to="/">
                <button className="btn btn-primary">Back home</button>
            </Link>
        </div>
    );
};
import React, { useState, useEffect } from "react";
import getState from "./flux.js";

// Inicializamos el contexto con un valor por defecto de null
export const Context = React.createContext(null);

// Esta función inyecta el store global en cualquier componente donde lo necesites
const injectContext = (PassedComponent) => {
	const StoreWrapper = (props) => {
		// Inicializamos el estado del contexto
		const [state, setState] = useState(
			getState({
				getStore: () => state.store,
				getActions: () => state.actions,
				setStore: (updatedStore) =>
					setState((prevState) => ({
						store: { ...prevState.store, ...updatedStore }, // Utiliza el spread operator para combinar los objetos
						actions: { ...prevState.actions },
					})),
			})
		);

		// Aquí aseguramos que "actions" está definido antes de llamarlo
		const { actions } = state;

		useEffect(() => {
			if (actions) {
				actions.getContacts(); // Llama a la acción para obtener los contactos
			}
		}, [actions]); // Asegúrate de que se ejecute cada vez que actions cambie

		// Proporcionamos el estado completo al contexto
		return (
			<Context.Provider value={state}>
				<PassedComponent {...props} />
			</Context.Provider>
		);
	};

	return StoreWrapper;
};

export default injectContext;

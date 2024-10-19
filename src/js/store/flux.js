


const getState = ({ getStore, setStore }) => {
	return {
		store: {
			
			contacts: []
		},
		actions: {
			 // Acción para obtener la lista de contactos desde la API
			 getContacts: async () => {
                const response = await fetch(`https://playground.4geeks.com/contact/agendas/auix15`, {
                    method: "GET",
                    headers: {
                        "Content-Type": "application/json",
            }),
            if (!response.ok) {
                throw new Error(`Error al obtener los contactos: ${response.status} ${response.statusText}`);
            }
            const data = await response.json();
            setStore({ contacts: data }); 
        };
            // Acción para eliminar un contacto
            deleteContact: async (index) => {
                const store = getStore();
                const contactId = store.contacts[index].id;

                try {
                    const response = await fetch(`https://playground.4geeks.com/contact/agendas/auix15/${contactId}`, {
                        method: "DELETE"
                    });
                    if (response.ok) {
                        const newContacts = store.contacts.filter((_, i) => i !== index);
                        setStore({ contacts: newContacts });
                    } else {
                        console.error("Error al eliminar el contacto:", response.statusText);
                    }
                } catch (error) {
                    console.error("Error en la eliminación del contacto:", error);
                }
            }
		}
	};
};

export default getState;

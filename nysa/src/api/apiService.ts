import API from "./API";

export const sendMessage = ( formData: { nombre: string; email: string; mensaje: string; }) => {
    return API.post('/api/contacto', formData);
}
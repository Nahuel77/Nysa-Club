import axios from "axios";

const API = axios.create({
    // ATENCION!!!!!!!!!!! Ver archivo 'IMPORTANTES'
    baseURL: process.env.NEXT_PUBLIC_API_URL,
});

//si se implementa un ecomerce, a futuro agregar el interceptor autorizador.

export default API;
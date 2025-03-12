'use client';
import { useState } from 'react';
import './Form.css';
import { sendMessage } from '../../api/apiService';

const Form: React.FC = () => {
    const [formData, setFormData] = useState({ nombre: '', email: '', mensaje: '' });
    const [error, setError] = useState<string | null>(null);//cambiar a array para manejar multiples mensajes
    
    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        try {
            const res = await sendMessage(formData);
            if(res.status === 200){
                setError(null);
                alert('Mensaje enviado. En breve estaremos en contacto');
            }
        }catch(err: any){
            if (err.response && err.response.status === 400) {
                const errorMessages = err.response.data.errors.map((error: { msg: string }) => error.msg);
                setError(errorMessages);
            } else {
                console.error('Error al enviar mensaje: ', err);
                alert("Hubo un problema al enviar el mensaje.");
            }
        }
    }

    return (
        <>
            <form className='form-container' onSubmit={handleSubmit} action="contact">
                <input
                    className='contact-input'
                    type="text"
                    placeholder='tu nombre'
                    name="nombre"
                    onChange={handleChange}
                    value={formData.nombre}
                />
                <input
                    className='contact-input'
                    type="text"
                    placeholder='tu email'
                    name="email"
                    onChange={handleChange}
                    value={formData.email}
                />
                <textarea
                    className='contaxt-text'
                    name="mensaje"
                    onChange={handleChange}
                    value={formData.mensaje}
                ></textarea>
                <button
                    className='contact-btn'
                    type='submit'
                >Enviar</button>
                {error && <p>{error}</p>}
            </form>
        </>
    );
}

export default Form;
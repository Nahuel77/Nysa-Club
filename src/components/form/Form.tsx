import './Form.css';

const Form: React.FC = () => {
    

    return (
        <>
            <form className='form-container' action="">
                <input className='contact-input' type="text" placeholder='tu nombre' />
                <input className='contact-input' type="text" placeholder='tu email' />
                <textarea className='contaxt-text' name="" id=""></textarea>
                <button className='contact-btn'>Enviar</button>
            </form>
        </>
    );
}

export default Form;
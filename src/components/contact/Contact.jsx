import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import EmailButton from './message-pop-up/popUp';
import "./contact.css";

const Contact = () => {
    const form = useRef();
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: ''
    });
    const [isFormValid, setIsFormValid] = useState(true);

    const sendEmail = (e) => {
        e.preventDefault();

        if (!validateForm()) {
            alert('Por favor, preencha todos os campos corretamente.');
            return;
        }

        emailjs.sendForm('service_1xb3gz8', 'template_bih4om6', form.current, 'tfna0jrwr-4BrmNoK')
            .then(() => {
                console.log("Email enviado com sucesso!");
                e.target.reset();
                setFormData({ name: '', email: '', message: '' });
                setIsFormValid(true);
            })
            .catch((error) => {
                console.error("Erro ao enviar email:", error);
            });
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
        validateForm();
    };

    const validateForm = () => {
        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        const isValid = formData.name && emailPattern.test(formData.email) && formData.message;
        setIsFormValid(isValid);
        return isValid;
    };
    return (
        <section className="contact section" id="contact">
            <h2 className="section_title">Entre em Contato</h2>
            <span className="section_subtitle">Contact Me</span>

            <div className="contact_container container grid">
                <div className="contact_content">
                    <h3 className="contact_title">Fale comigo</h3>
                    <div className="contact_info">
                        <div className="contact_card">
                            <i className="bx bx-mail-send contact_card-icon"></i>
                            <h3 className="contact_card-title">Email</h3>
                            <span className="contact_card-data">victor.a.schumann@gmail.com</span>
                            <a href="mailto:victor.a.schumann@gmail.com" className="contact_button">{" "}Escreva-me <i className="bx bx-right-arrow-alt contact_button-icon"></i></a>
                        </div>

                        <div className="contact_card">
                            <i className="bx bxl-whatsapp contact_card-icon"></i>
                            <h3 className="contact_card-title">Whatsapp</h3>
                            <span className="contact_card-data"> (54) 9 8428-9836</span>
                            <a target="_blank" href="https://api.whatsapp.com/send?phone=5554984289836&text=Ol%C3%A1,%20podemos%20conversar%3F" className="contact_button">{" "}Escreva-me <i className="bx bx-right-arrow-alt contact_button-icon"></i></a>
                        </div>

                        <div className="contact_card">
                            <i className="bx bxl-linkedin contact_card-icon"></i>
                            <h3 className="contact_card-title">Linkedin</h3>
                            <span className="contact_card-data">Victor Assunção</span>
                            <a href="https://www.linkedin.com/in/victoraszs/" target="_blank" className="contact_button">{" "} Visualizar<i className="bx bx-right-arrow-alt contact_button-icon"></i></a>
                        </div>
                    </div>
                </div>

                <div className="contact_content">
                    <h3 className="contact_title">Me escreva um Email</h3>

                    <form className="contact_form" ref={form} onSubmit={sendEmail}>
                        <div className="contact_form-div">
                            <label htmlFor="" className="contact_form-tag">Nome</label>
                            <input 
                                required
                                type="text"
                                name='name' 
                                className='contact_form-input' 
                                placeholder='Escreva seu nome'
                                value={formData.name}
                                onChange={handleChange}
                            />
                        </div>
                        <div className="contact_form-div">
                            <label htmlFor="" className="contact_form-tag">Email</label>
                            <input 
                                required
                                type="email"
                                name='email' 
                                className='contact_form-input' 
                                placeholder='Escreva seu Email'
                                value={formData.email}
                                onChange={handleChange}
                            />
                        </div>
                        <div className="contact_form-div contact_form-area">
                            <label htmlFor="" className="contact_form-tag">Mensagem</label>
                            <textarea 
                                required
                                name="message" 
                                cols="30" 
                                rows="10"
                                className="contact_form-input" 
                                placeholder="Escreva sua mensagem"
                                value={formData.message}
                                onChange={handleChange}
                            ></textarea>
                        </div>

                        <EmailButton 
                            onClick={sendEmail} 
                            disabled={!isFormValid} // Desabilita o botão se o formulário não for válido
                            isFormValid={isFormValid} // Passando a validade do formulário para o EmailButton
                        />
                    </form>
                </div>
            </div>
        </section>
    );
}

export default Contact;
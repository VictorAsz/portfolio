import React, { useState } from 'react';
import './popUp.css'; // Importando o CSS do pop-up

const EmailButton = ({ disabled, isFormValid }) => {
    const [isPopupVisible, setIsPopupVisible] = useState(false);

    const handleEmailSend = () => {
        // Verifica se o formulário é válido antes de enviar o email
        if (isFormValid) {
            setIsPopupVisible(true);
            setTimeout(() => {
                setIsPopupVisible(false);
            }, 3000);
        }
    };

    return (
        <div>
            <button 
                className="button button--flex" 
                onClick={handleEmailSend} 
                disabled={disabled} // Adicionando a propriedade disabled
            >
                Enviar Email
                <i className="uil uil-arrow-right message_icon"></i>
            </button>

            {isPopupVisible && (
                <div className="popup">
                    <p>Email enviado com sucesso!</p>
                </div>
            )}
        </div>
    );
};

export default EmailButton;

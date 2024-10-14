import React, { useEffect, useRef } from 'react';
import './PopupMessage.css';

function PopupMessage() {
    const popupMessageRef = useRef(null);

    useEffect(() => {
        const popupMessage = popupMessageRef.current;

        function hideMessage() {
            popupMessage.classList.remove('show');
        }

        popupMessage.classList.add('show');

        const timeoutId = setTimeout(hideMessage, 5000);

        document.addEventListener('click', hideMessage);
        document.addEventListener('scroll', hideMessage);
        document.addEventListener('keypress', hideMessage);
        document.addEventListener('touchstart', hideMessage);

        return () => {
            clearTimeout(timeoutId);
            document.removeEventListener('click', hideMessage);
            document.removeEventListener('scroll', hideMessage);
            document.removeEventListener('keypress', hideMessage);
            document.removeEventListener('touchstart', hideMessage);
        };
    }, []);

    return (
        <div className="popup-message" ref={popupMessageRef}>
          При наведенні на певний рядок він підкреслиться. Цей підкреслений та наступний рядки можуть змінювати кольори при натисканні.
        </div>

    );
  }

export default PopupMessage;
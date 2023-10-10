import React from 'react';
import './css/AppFooter.css'

import AppButton from '../../shared/components/Buttons/AppButton';

const AppFooter:React.FC = () => {
    return (
        <footer>
            <div className="vs-footer-left" >
                <span>@ 2023 Vshowcase. Todos los derechos reservados</span>
            </div>

            <div className="vs-footer-right" >
                <AppButton icon="fa-brands fa-instagram" variant='dark' ariaLabel='Instagram'></AppButton>
                <AppButton icon="fa-brands fa-youtube" variant='dark' ariaLabel='Youtube'></AppButton>
                <AppButton icon="fa-brands fa-twitter" variant='dark' ariaLabel='X'></AppButton>
            </div>
        </footer>
    )
}
export default AppFooter
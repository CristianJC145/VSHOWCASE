import React, { useEffect, useState } from "react"

import LazyImage from "../components/LazyImage"
import AppLinkNavigation from "../components/LinkNavigation/AppLinkNavigation";

import { settings } from "../constant/settings.constants";
import { LogoutUser } from "../services/logout.service";
import { useAuth } from "../contexts/AuthContext";
import { useLocation, useNavigate } from "react-router-dom";

import './css/AppSidebar.css'
import AppButton from "../components/Buttons/AppButton";

const logout = new LogoutUser();

const AppSidebar : React.FC = () => {
    const location = useLocation();
    const [selectedOption, setSelectedOption] = useState('/dashboard/home');
    const appLogo = settings.appLogo;
    const authContext = useAuth();
    const navigate = useNavigate();
    const handleLogout = async () => {
        await logout.run();
        authContext.logout();
        navigate('/');
        window.location.reload();
    }

    useEffect(() => {
        setSelectedOption(location.pathname);
      }, [location.pathname]);
    return (
        <div className="vs-sidebar">
            <a className="vs-sidebar--header" href="/">
                <LazyImage className="vs-header--logo" src={appLogo} alt="Logo" />
                <span className="vs-header--title">VSHOWCASE</span>
            </a>
            <div className="vs-sidebar-content">
                <AppLinkNavigation to="/dashboard/home" icon="home" label="Home" selected={selectedOption === '/dashboard/home'}></AppLinkNavigation>
                <AppLinkNavigation to="/dashboard/products" icon="store" label="Productos" selected={selectedOption === "/dashboard/products"}></AppLinkNavigation>
                <AppLinkNavigation to="/dashboard/orders" icon="receipt" label="Ordenes" selected={selectedOption === "/dashboard/orders"}></AppLinkNavigation>
                <AppLinkNavigation to="/dashboard/finance" icon="sack-dollar" label="Financiero" selected={selectedOption === "/dashboard/finance"}></AppLinkNavigation>
                <AppLinkNavigation to="/dashboard/sales" icon="tags" label="Ventas" selected={selectedOption === "/dashboard/sales"}></AppLinkNavigation>
                <AppLinkNavigation to="/dashboard/record" icon="clock" label="Historial" selected={selectedOption === "/dashboard/record"}></AppLinkNavigation>
                <AppLinkNavigation to="/dashboard/account" icon="user" label="Mi cuenta" selected={selectedOption === "/dashboard/account"}></AppLinkNavigation>
            </div>
            <div className="vs-sidebar-actions">
                <AppButton icon="right-from-bracket" onClick={handleLogout}></AppButton>
                <span>Cerrar Sesion</span>
               
            </div>
        </div>
    )
}
export default AppSidebar
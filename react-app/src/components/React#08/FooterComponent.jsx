import React, {useContext} from 'react';
import { ThemeContext } from "./ThemeContext";

const FooterComponent = () => {
    const { darkMode, setDarkMode } = useContext(ThemeContext);

    const theme = {
        backgroundColor: darkMode ? "black" : "white",
        color: darkMode ? "white" : "black",
        };

    return (
        <div className="footer" style={theme}>
            푸터
        </div>
    );
};

export default FooterComponent;
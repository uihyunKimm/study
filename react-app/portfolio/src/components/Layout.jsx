import React from "react";
import Header from "./Header"
import Footer from "./Footer"
import Main from "./Main";
import styles from "./Layout.module.scss";

const Layout = ({children}) => {
    return (
        <div className = {styles.layout}>
            <Header />
                <Main>
                    {children}
                </Main>
            <Footer />
        </div>
    );
};

export default Layout;
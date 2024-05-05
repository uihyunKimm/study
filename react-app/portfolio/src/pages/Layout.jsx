import React from "react";
import Header from "../components/Header"
import Footer from "../components/Footer"
import styles from "../style/Layout.module.scss";

const Layout = ({children}) => {
    return (
        <div className = {styles.layout}>
            <Header />
                <main className={ styles.main }>
                    {children}
                </main>
            <Footer />
        </div>
    );
};

export default Layout;
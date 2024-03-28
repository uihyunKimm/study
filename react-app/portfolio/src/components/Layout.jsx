import React from "react";
import Header from "./Header"
import Footer from "./Footer"
import Main from "./Main";

const Layout = ({children}) => {
    return (
        <div>
            <Header />
                <Main>
                    {children}
                </Main>
            <Footer />
        </div>
    );
};

export default Layout;
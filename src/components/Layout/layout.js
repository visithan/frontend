import React from 'react';
import Header from "./header";
import Footer from "./footer";


const layout = ({ children }) => {
    const style2 = {
        backgroundColor: "rgb(17, 122, 139,0.5)",
        borderRadius: "5px",
    };
    return (
        <>
            <Header />
            <div className="container mt-1">
                <div className="jumbotron p-4" style={style2}>
                    <div className="row">
                        <main>{children}</main>
                    </div>
                </div>
            </div>

            <Footer />
        </>
    )
}

export default layout;
import React from 'react'

const footer = () => {
    const style2 = {
        backgroundColor: "rgb(17, 122, 139,0.5)",
        borderRadius: "5px",
        padding: "15px 20px 5px 20px",
        textAlign: "center",
      };
    return (
        <div>
            <div className="container mt-2">
                <div style={style2}>
                    <p>Copyright 1999-2020 by V.Visithan. All Rights Reserved.</p>
                </div>
            </div>
        </div>
    )
}

export default footer

import React from "react";

function Prac01() {
        const names = ['HTML', 'CSS', 'Javascript', 'React'];
        const nameList = names.map((name, index) => {
                return <li key={index}>{name}</li>
        })
        return (
                <div>
                        <ul>{nameList}</ul>
                       {/* <ul>{names.map(nameList => <li>{nameList}</li> )}</ul> */}
                </div>
                );
        };

export default Prac01;
import React from "react";

function Prac01() {
        const names = ['HTML', 'CSS', 'Javascript', 'React'];
        return (
                <div>
                       <ul>{names.map(nameList => <li>{nameList}</li> )}</ul>
                </div>
                );
        };

export default Prac01;
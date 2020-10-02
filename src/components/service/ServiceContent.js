import React from "react";
//контент для Service
export const ServiceContent = props => (
    <div>
        <h3>{props.title}</h3>
        <ul>
            {[...(props.content)].map((elem, i) => <li key={i}>{elem}</li>)}
        </ul>
    </div>
)
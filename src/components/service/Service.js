import React from "react";
//блок Service
export const Service = props => (
    <div className="service">{props.children(props.items)}</div>
)
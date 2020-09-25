import React from "react";
//передает новости в BreakingNews
export const News = props => (
    <li style={{listStyleType: "none"}}>{props.children}</li>
)
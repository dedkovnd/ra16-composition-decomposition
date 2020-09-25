import React from "react";
//формирует список новостей
export const BreakingNews = props => (
    <ul>
        {props.children(props.items)}
    </ul>
)

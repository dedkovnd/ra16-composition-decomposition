import React from "react";
//контент для Service. Вероятно, здесь еще в качестве props.children должны были приходить
//более мелкие компоненты в виде текста и графики
export const ServiceContent = props => (
    <div>{props.children}</div>
)
import React  from "react";
import "./TopNav.css"

//изменяет состояние ./news/BreakingNews
export const TopNav = props => (
    <div className="top-nav">
        <span className="nav-item">Сейчас в СМИ</span>
        <span className="nav-item">В Германии</span>
        <span className="nav-item">Рекомендуем</span>
        {props.children}
    </div>
)
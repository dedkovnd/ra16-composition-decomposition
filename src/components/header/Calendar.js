import React from "react";
import './Calendar.css'

//отображает текущую дату
export function Calendar () {
    const date = new Date().toLocaleDateString()
    return (
        <span className="calendar">{date}</span>
    )
}
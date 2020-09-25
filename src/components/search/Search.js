import React from "react";
//поиск
export function Search() {
    return (
        <form>
            <label htmlFor="search"><a href="#">Яндекс</a></label>
            <input name="search"></input>
            <button type="input">искать</button>
        </form>
    )
}
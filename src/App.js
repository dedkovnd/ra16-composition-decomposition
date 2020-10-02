import React from 'react';
import './App.css';
import {TopNav} from "./components/header/TopNav";
import {Calendar} from "./components/header/Calendar";
import {BreakingNews} from "./components/news/BreakingNews";
import {News} from "./components/news/News";
import {Search} from "./components/search/Search";
import {Service} from "./components/service/Service";
import {ServiceContent} from "./components/service/ServiceContent";

const list = [{
    logo: "$",
    title: "заголовок новости 1",
    url: "#"
},
    {
        logo:":",
        title: "заголовок новости 2",
        url: "#"
    },
    {
        logo: "!",
        title: "заголовок новости 3",
        url: "#"
    }

]

const serviceList= [
    {title: "Погода",
        content:["Облачно +15"]
    },
    {title: "Посещаемое",
        content: ["Недвижимость","Маркет"]
    },
    {title:"Эфир",
        content: ["ТНТ","Best","Джинглики"]
    }
]
function App() {
  return (
    <div className="App">
        <TopNav>
            <Calendar/>
        </TopNav>
        <BreakingNews items={list}>
            {items => items.map((item,index)=>
                <News key={index}><a href={item.url}><span className="news-logo">{item.logo}</span>
                                  <span className="news-title">{item.title}</span></a></News>)}
        </BreakingNews>
        <Search />
        <Service items={serviceList}>
            {items=> items.map((item,index)=>
            <ServiceContent key={index} title={item.title} content={item.content}/>
            )}
        </Service>
    </div>
  );
}

export default App;

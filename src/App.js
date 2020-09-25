import React from 'react';
import './App.css';
import {TopNav} from "./components/header/TopNav";
import {Calendar} from "./components/header/Calendar";
import {BreakingNews} from "./components/news/BreakingNews";
import {News} from "./components/news/News";
import {Search} from "./components/search/Search";
import {Service} from "./components/service/Service";
import {TitleService} from "./components/service/TitleService";
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
        <div className="service-panel">
            <Service>
                <TitleService title="Погода"/>
                <ServiceContent>
                </ServiceContent>
            </Service>
            <Service>
                <TitleService title="Посещаемое"/>
                <ServiceContent>
                </ServiceContent>
            </Service>
            <Service>
                <TitleService title="Эфир"/>
                <ServiceContent>
                </ServiceContent>
            </Service>
        </div>
    </div>
  );
}

export default App;

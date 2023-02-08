import React from "react";
import Report from "./Report";

// const data = [
//     { name: "John Doe", age: 32, role: "Developer" },
//     { name: "Jane Doe", age: 28, role: "Designer" }
// ];


const header = {
    competitionName     : 'League Cup',
    competitionNameIrish: 'League Cup Irish',
    homeTeamName        : 'Judes',
    homeTeamNameIrish   : 'Naomh Jude',
    awayTeamName        : 'Cuala',
    awayTeamNameIrish   : 'Cuala Irish',
    club                : 'Judes',
    county              : 'Dublin',
}

const team = [
    {number:1,name:"sdfsadfasdf",nameIrish:"asfasdfsdf"},
    {number:2,name:"asdfsdfsdf",nameIrish:"asdfasdfsdf"},
    {number:3,name:"asdfafdsadf",nameIrish:"asdfasdfsadf"},
    {number:4,name:"sdfsadfasdf",nameIrish:"asfasdfsdf"},
    {number:5,name:"asdfsdfsdf",nameIrish:"asdfasdfsdf"},
    {number:6,name:"asdfafdsadf",nameIrish:"asdfasdfsadf"},
    {number:7,name:"sdfsadfasdf",nameIrish:"asfasdfsdf"},
    {number:8,name:"asdfsdfsdf",nameIrish:"asdfasdfsdf"},
    {number:9,name:"asdfafdsadf",nameIrish:"asdfasdfsadf"},
    {number:10,name:"sdfsadfasdf",nameIrish:"asfasdfsdf"},
    {number:11,name:"asdfsdfsdf",nameIrish:"asdfasdfsdf"},
    {number:12,name:"asdfafdsadf",nameIrish:"asdfasdfsadf"},
    {number:13,name:"sdfsadfasdf",nameIrish:"asfasdfsdf"},
    {number:14,name:"asdfsdfsdf",nameIrish:"asdfasdfsdf"},
    {number:15,name:"asdfafdsadf",nameIrish:"asdfasdfsadf"},
]
const subs = [
    {number:16,name:"sdfsadfasdf",nameIrish:"asfasdfsdf"},
    {number:17,name:"asdfsdfsdf",nameIrish:"asdfasdfsdf"},
    {number:18,name:"asdfafdsadf",nameIrish:"asdfasdfsadf"},
    {number:19,name:"sdfsadfasdf",nameIrish:"asfasdfsdf"},
    {number:20,name:"asdfsdfsdf",nameIrish:"asdfasdfsdf"},
    {number:21,name:"asdfafdsadf",nameIrish:"asdfasdfsadf"},
    {number:22,name:"sdfsadfasdf",nameIrish:"asfasdfsdf"},
    {number:23,name:"asdfsdfsdf",nameIrish:"asdfasdfsdf"},
    {number:24,name:"asdfafdsadf",nameIrish:"asdfasdfsadf"},
    {number:25,name:"asdfafdsadf",nameIrish:"asdfasdfsadf"},
]
const footer = [
    {role:'Manager',name:"asdfafdsadf",nameIrish:"asdfasdfsadf"},
    {role:'Coach',name:"asdfafdsadf",nameIrish:"asdfasdfsadf"},
    {role:'Physio',name:"asdfafdsadf",nameIrish:"asdfasdfsadf"},
    {role:'Administration',name:"asdfafdsadf",nameIrish:"asdfasdfsadf"},
]

const data = {
    header: header,
    team  : team,
    subs  : subs,
    footer: footer,
}


function App() {
    console.log("App")
    return(
        <Report data={data}/>
    )
}

export default App;
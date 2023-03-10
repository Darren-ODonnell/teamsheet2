import React, { useState } from 'react';
import { AgGridReact } from 'ag-grid-react';

import 'ag-grid-community/styles/ag-grid.css';
import 'ag-grid-community/styles/ag-theme-alpine.css';

import Report from "../teamsheetComponents/Report";
import {Button} from "@mui/material";

import './myDataGrid.css'
import {printPopup, showPopup} from "../teamsheetComponents/helper";

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
    {role: 'Manager'          , name: "Doni Fox"        , nameIrish: "D??nal Mac Saoir"      },
    {role: 'Assistant Manager', name: "Marion O'Donnell", nameIrish: "M??ir??n N?? Dhomhnaill" },
    {role: 'Assistant Manager', name: "Pio McCarthy"    , nameIrish: "P??o Mac Carthaigh"    },
    {role: 'Assistant Manager', name: "Ger McManus"     , nameIrish: "Gear??id Mac M??nus"    },
]
const data = {
    header: header,
    team  : team,
    subs  : subs,
    footer: footer,
}

const MyDataGrid = () => {
    const [showTeamsheet, setShowTeamsheet] = useState(false);
    const [showPrintPreview, setShowPrintPreview] = useState(false);
    const handleClick = (prevState) => {
        setShowTeamsheet(!showTeamsheet)
    }

    const handleOpenPrintPreview = () => {
        showPopup()
        setShowPrintPreview(true);
    };

    const rowData = [
        {id: 1, make: "Toyota", model: "Celica", price: 35000},
        {id: 2, make: "Ford", model: "Mondeo", price: 32000},
        {id: 3, make: "Porsche", model: "Boxter", price: 72000}
    ];

    const columnDefs = [
        {headerName: "Make", field: "make"},
        {headerName: "Model", field: "model"},
        {headerName: "Price", field: "price"}
    ];

    console.log("Show: " + showTeamsheet)

    return (
        <div className="ag-theme-alpine" style={{ height: '200px', width: '800px' }}>
            <AgGridReact
                rowData={rowData}
                columnDefs={columnDefs}
            />
            <Button onClick={handleOpenPrintPreview}>Show Popup</Button>

            {showPrintPreview && (
                <div className="popup-modal">
                    <div className="popup-modal-content print-container" >
                        <Report data={data}/>
                        <Button onClick={printPopup}>Print Data</Button>
                        <Button onClick={() => setShowPrintPreview(false)}>Close Popup Modal</Button>
                    </div>
                </div>
            )}


        </div>
    );
}
export default MyDataGrid
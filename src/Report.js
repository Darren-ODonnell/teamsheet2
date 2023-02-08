import React, { useRef, useEffect } from 'react';
import {Table} from '@mui/material';
import {TableHead} from '@mui/material';
import {TableRow} from '@mui/material';

import {
    TEAM_LIST_HEADER_COMPETITION_ENGLISH, TEAM_LIST_HEADER_COMPETITION_IRISH,
    TEAM_LIST_HEADER_TEAMS_ENGLISH, TEAM_LIST_HEADER_TEAMS_IRISH,
    TEAM_LIST_VERSION, TEAM_LIST_TITLE,
    TEAM_LIST_HEADER_TEAMS_SEPARATOR, TEAM_LIST_SUBS_TITLE,
    TEAM_LIST_HEADER_CLUB, TEAM_LIST_HEADER_CLUB_NAME,
    TEAM_LIST_HEADER_COUNTY, TEAM_LIST_HEADER_COUNTY_NAME,
    TEAM_LIST_TEAM_ENGLISH, TEAM_LIST_TEAM_IRISH,
    TEAM_LIST_TEAM_NOS, TEAM_LIST_MANAGERS_ROLE,
    TEAM_LIST_MANAGERS_TITLE, TEAM_LIST_MANAGERS_NAME_IRISH,
    TEAM_LIST_MANAGERS_NAME_ENGLISH,
    TEAM_LIST_OFFICIAL_IRISH, TEAM_LIST_DATE_IRISH,
    TEAM_LIST_OFFICIAL_ENGLISH, TEAM_LIST_REFEREE_IRISH,
    TEAM_LIST_REFEREE_ENGLISH, TEAM_LIST_INSTRUCTIONS_IRISH,
    TEAM_LIST_INSTRUCTIONS_ENGLISH, TEAM_LIST_HEADER_IMAGE, TEAM_LIST_PAGE_FOOTER,

} from "./globals";
import PageFooter from "./teamsheetComponents/PageFooter";
import Header from "./teamsheetComponents/Header";


const PageStyle = {
    margin: '60px',
    width : '980px',
    fontFamily:'Times Serif',
    fontSize: '1.4em' ,
}

const TableCellStyle = {
    border: '1px solid black',
    borderLeft: "1px solid black",
    borderCollapse: 'collapse',
    margin:'0px',
    height:'5px',
    textAlign:'center',

};

const TitleTableCellStyle = {
    ...TableCellStyle,
    'fontWeight': 'bold',
}

const TableCellStyleNos = {
    ...TitleTableCellStyle,
    width:'80px',

};


const TitleStyle = {
    fontWeight: 'bold',
    textAlign: 'center',

}
const TitleManagerStyle = {
    ...TitleStyle,
    pageBreakBefore: 'always',
}



const ManagerCellStyle = {
    ...TableCellStyle,
    textAlign : 'left'
}

const FirstRowDouble = {
    ...TableCellStyle,
    height: '50px',
}



const Report = ( {data} ) => {
    const tableRef = useRef(null);
    useEffect(() => {
        const tableElement = tableRef.current;

        const newWindow = window.open('', '_blank');

    }, [tableRef]);

    return (
        <div >
            <Header/>
            <p style={TitleStyle}>{TEAM_LIST_VERSION}</p>
            <p style={TitleStyle}>{TEAM_LIST_TITLE}</p>
            <br/>
            {/* Competition table */}
            <Table style={TableCellStyle}>
                <TableRow >
                    <td style={FirstRowDouble} style={{fontWeight:'bold'}}>{ TEAM_LIST_HEADER_COMPETITION_IRISH }</td>
                    <td style={FirstRowDouble}>{ data.header.competitionNameIrish }</td>
                    <td style={FirstRowDouble} style={{fontWeight:'bold'}}>{ TEAM_LIST_HEADER_TEAMS_IRISH }</td>
                    <td style={FirstRowDouble}>{ data.header.homeTeamNameIrish }</td>
                    <td style={FirstRowDouble}>{ TEAM_LIST_HEADER_TEAMS_SEPARATOR }</td>
                    <td style={FirstRowDouble}>{ data.header.awayTeamNameIrish }</td>
                </TableRow>

                <TableRow>
                    <td style={TitleTableCellStyle}>{ TEAM_LIST_HEADER_COMPETITION_ENGLISH }</td>
                    <td style={TableCellStyle}>{ data.header.competitionName }</td>
                    <td style={TitleTableCellStyle}>{ TEAM_LIST_HEADER_TEAMS_ENGLISH }</td>
                    <td style={TableCellStyle}>{ data.header.homeTeamName }</td>
                    <td style={TableCellStyle}> </td>
                    <td style={TableCellStyle}>{ data.header.awayTeamName }</td>
                </TableRow>
            </Table>
            {/* Home Club and County table */}
            <p style={TitleStyle}>{TEAM_LIST_SUBS_TITLE}</p>

            <Table >
                <TableRow>
                    <td style={TitleTableCellStyle} >{ TEAM_LIST_HEADER_CLUB }</td>
                    <td style={TableCellStyle}>{ TEAM_LIST_HEADER_CLUB_NAME }</td>
                    <td style={TitleTableCellStyle}>{ TEAM_LIST_HEADER_COUNTY }</td>
                    <td style={TableCellStyle}>{ TEAM_LIST_HEADER_COUNTY_NAME }</td>
                </TableRow>
            </Table>
            <p></p>
            {/* List of players - 1st 15 */}
            <Table className="my-table">
                <TableHead>
                    <TableRow>
                        <td style={TableCellStyleNos} >{TEAM_LIST_TEAM_NOS}</td>
                        <td style={TitleTableCellStyle}>{TEAM_LIST_TEAM_ENGLISH}</td>
                        <td style={TitleTableCellStyle}>{TEAM_LIST_TEAM_IRISH}</td>
                    </TableRow>
                </TableHead>
                {data.team.map(row => (
                    <TableRow>
                        <td style={TableCellStyle} >{row.number}</td>
                        <td style={TableCellStyle}>{row.name}</td>
                        <td style={TableCellStyle}>{row.nameIrish}</td>
                    </TableRow>
                ))}
            </Table >
            {/* List of players - Subs - 16-25 */}
            <br/>
            <p style={TitleStyle}>{TEAM_LIST_SUBS_TITLE}</p>
            <Table >
                {data.subs.map(row => (

                    <TableRow>
                        <td style={TableCellStyle}>{row.number}</td>
                        <td style={TableCellStyle}>{row.name}</td>
                        <td style={TableCellStyle}>{row.nameIrish}</td>
                    </TableRow>
                ))}
            </Table>
            {/* List of Management personnel - Table */}
            <div style={TitleManagerStyle}></div>
            <Header />
            <p style={TitleStyle}>{TEAM_LIST_MANAGERS_TITLE}</p>
            <br/>

            <Table >
                <TableHead>
                    <TableRow>
                        <td style={ManagerCellStyle} style={{width:'180px'}}>{TEAM_LIST_MANAGERS_ROLE}</td>
                        <td style={ManagerCellStyle}>{TEAM_LIST_MANAGERS_NAME_IRISH}</td>
                        <td style={ManagerCellStyle}>{TEAM_LIST_MANAGERS_NAME_ENGLISH}</td>
                    </TableRow>
                </TableHead>
                {data.footer.map(row => (

                    <TableRow>
                        <td style={ManagerCellStyle}>{row.role}</td>
                        <td style={ManagerCellStyle}>{row.name}</td>
                        <td style={ManagerCellStyle}>{row.nameIrish}</td>
                    </TableRow>
                ))}
            </Table>
            {/* Signatories */}
            <br/>
            <br/>
            <p>{TEAM_LIST_OFFICIAL_IRISH}__________________________{TEAM_LIST_DATE_IRISH}___________</p>
            <p>{TEAM_LIST_OFFICIAL_ENGLISH}</p>
            <p>{TEAM_LIST_REFEREE_IRISH}___________________________</p>
            <p>{TEAM_LIST_REFEREE_ENGLISH}</p>
            <p></p>
            <p></p>
            <p>{TEAM_LIST_INSTRUCTIONS_IRISH}</p>
            <p>{TEAM_LIST_INSTRUCTIONS_ENGLISH}</p>
            {/*<PageFooter footer={'Text'}/>*/}

        </div>
    );
};

export default Report;


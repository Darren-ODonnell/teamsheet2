import React from 'react';
import { TEAM_LIST_HEADER_IMAGE } from "../globals";
import CamogieHeader from '../media/CamogieImage.jpg'

let stylename = "header-image"

const headerImage = {
    backgroundPosition: 'top',
    backgroundRepeat  : 'no-repeat',
    float : 'top',
    position          : 'relative',
    backgroundSize    : 'cover',
    height            : '70px',
    width             : '100%'
}


function Header() {
    return (

        <header >
            <img style={headerImage} src={CamogieHeader} alt="Header Image" />
        </header>
    );
}

export default Header;
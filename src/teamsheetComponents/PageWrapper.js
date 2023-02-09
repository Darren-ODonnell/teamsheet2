import React from 'react';

const PageStyle = {
    marginTop : '15mm',
    marginBottom : '5mm',
    marginLeft : '1cm',

    width      : '700px',
    backgroundColor: '#f2f2f2',
    fontFamily: 'Times, sans-serif',

};

const PageWrapper = ({children}) => {
    return (
        <div style={PageStyle}>
            {children}
        </div>
    );
};

export default PageWrapper;
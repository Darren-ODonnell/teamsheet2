import React from 'react';

function PageFooter(footer) {
    return (
        <div style={{ textAlign: 'center', fontSize: '10pt', display: 'none' }} className="page-footer">
            { footer}
        </div>
    );
}

export default PageFooter;

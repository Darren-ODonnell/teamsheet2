import React from "react";

import PageWrapper from "./teamsheetComponents/PageWrapper";
import MyDataGrid from "./grid/MyDataGrid";

function App() {
    console.log("App")
    return(
        <PageWrapper>
            <MyDataGrid />
        </PageWrapper>
    )
}

export default App;

// {/*<Report data={data}/>*/}
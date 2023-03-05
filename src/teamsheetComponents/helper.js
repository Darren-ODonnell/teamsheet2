import {Button} from "@mui/material";
import React from "react";

export const printPopup = () => {
    window.print()
}
export const showPopup = () => {
    // Generate the output of the component
    let componentOutput = "<h1>Component Output</h1><p>This is some data from the component.</p>";

    // Get the popup element
    let popup = document.getElementById("popup");

    // Check if the popup element exists
    if (popup !== null) {
        // Insert the output into the popup modal
        popup.innerHTML = componentOutput;

        // Show the popup modal
        popup.style.display = "block";
    }

    return (
        <Button onClick={printPopup}>Print Data</Button>
    );
}
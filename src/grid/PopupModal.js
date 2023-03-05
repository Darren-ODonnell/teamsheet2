import React from "react";
import Report from "../teamsheetComponents/Report";

const PopupModal = ({ isOpen, onClose, data }) => {

    const printPopup = () => {
        console.log("printPopup")
        window.print();
    };

    const showPopup = () => {
        console.log("showPopup")
        return (
            <div>
                <Report data={data} />
                <button onClick={printPopup}>Print Data</button>
            </div>
        );
    };

    return (
        <>
            {isOpen && (
                <div className="popup-modal">
                    <div className="popup-modal-content">
                        <div className="print-container">{data}</div>
                        {showPopup()}
                        <button onClick={printPopup}>Print Data</button>
                        <button onClick={onClose}>Close Popup Modal</button>
                    </div>
                </div>
            )}
        </>
    );
};

export default PopupModal;

import React from "react";
import './Separator.css';

const Separator: React.FC = () => {

    return (
        <>
            <div className="separator-content">
                <img className="separator" src="separator.png" alt="separator" />
            </div>
        </>
    );
}

export default Separator;
import React from "react";

const Title = ({ text }) => {
    return (
        <div className="title">
            {/* if the text is not provided it will return the default title   */}
            <h2>{text || "Default Title"}</h2>
            <div className="title-underline"></div>
        </div>
    );
};

export default Title;

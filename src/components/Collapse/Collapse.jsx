import React, { useState } from "react";
import "./Collapse.scss";
import vector from "../../image/vector.png";

export default function Collapse({ title, text }) {
    const [isOpen, setOpen] = useState(false);

    const toggleCollapse = () => {
        setOpen(!isOpen);
    }

    return (
        <div className={`container ${isOpen ? 'open' : ''}`}>
            <div className="collapse-title" onClick={toggleCollapse}>
                <h3>{title}</h3>
                <img 
                    src={vector} 
                    alt="chevron collapse" 
                    className={`chevron ${isOpen ? "open" : ""}`}
                />
            </div>
            <div className={`collapse-content ${isOpen ? "open" : ""}`}>
                <p>{text}</p>
            </div>
        </div>
    );
}
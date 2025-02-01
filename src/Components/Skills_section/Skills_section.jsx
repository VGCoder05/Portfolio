import React, { useEffect, useRef } from "react";

const Skills_section = () => {
    const skills = ["HTML", "CSS", " JavaScript", "Sass", "Tailwind", "React.js", "Node.js", "Express.js", "Git Hub", "Redux", "MongoDB"];

    return (
        <div className="skill_section">
            <h1 className="heading">Skills</h1>

            {/* Infinite scrolling slider */}
            <div class="slider" style={{
                "--w": "8rem",
                "--h": "1.5rem",
                "--quantity": `${skills.length}`,
                "--animation-speed": "10s",
                "--padding": "1rem"
            }}>
                <div class="items">
                    {
                        skills.map((skill, i) => (
                            <div
                                className="item"
                                style={{ "--position": `${i + 1}` }}
                            >
                                <img
                                    src={`img/Img_Collection/project${i + 1}.jpg`}
                                    alt={skill}
                                />
                                <p className="text">{skill}</p>
                            </div>
                        ))
                    }

                </div>
            </div>

        </div>
    );
};


export default Skills_section;


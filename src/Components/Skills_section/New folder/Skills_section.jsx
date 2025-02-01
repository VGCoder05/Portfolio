import React, { useEffect, useRef } from "react";

const Skills = () => {
    const skills = [" JavaScript", "React.js", "Lorem ipsum dolor sit amet."];

    const sliderRef = useRef(null);

    useEffect(() => {
        const slider = sliderRef.current;
        if (slider) {
            // Convert children to an array and measure each width
            const childrenArray = Array.from(slider.children);
            const widths = childrenArray.map(child =>
                child.getBoundingClientRect().width
            );
            const maxWidth = Math.max(...widths);

            // Set a CSS custom property so we can use it in our animations if needed
            slider.style.setProperty("--child-width", `${maxWidth}px`);

            // Set grid-template-columns to repeat for each child using the maxWidth
            slider.style.gridTemplateColumns = `repeat(${childrenArray.length}, ${maxWidth}px)`;
        }
    }, []);

    return (
        <div className="skill_section">
            <h1 className="heading">Skills</h1>

            {/* Infinite scrolling slider */}
            <div class="slider" ref={sliderRef} style={{ "--width": "6rem", "--height": "1.5rem", "--quantity": `${skills.length}`, "--animation-speed": "10s", "--padding": "1rem" }}>
                <div class="items">
                    {skills.map((skill, i) => (
                        <div class="item" style={{ "--position": `${i + 1}` }}>
                            <img src={`img/Img_Collection/project${i+1}.jpg`} />
                            <p className="text">{skill}</p>
                        </div>
                    ))}
                </div>
            </div>
            <h1 className="heading">Skills</h1>
        </div>
    );
};


export default Skills;


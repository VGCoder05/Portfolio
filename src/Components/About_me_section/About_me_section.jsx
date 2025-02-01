import React from 'react';

const About_me_section = () => {

    return (
        <div class="about-timeline">
            <h2>About Me</h2>
             {/* Section to create Time line design  */}
            <div class="timeline">
                 {/* Time line each card/section  */}
                 {/* 1st start  */}
                <div class="timeline-card">
                     {/* <div class="timeline-date">2021</div>  */}
                    <div class="timeline-content">
                        <h3>Introduction</h3>
                        <p>
                            Hi, I'm John Doe, a passionate web developer with a focus on building functional and
                            user-friendly
                            websites.
                            I love turning ideas into reality through clean and efficient code.
                        </p>
                    </div>
                </div>
                 {/* 1st end  */}

                 {/* 2nd start  */}
                <div class="timeline-card">
                     {/* <div class="timeline-date">2023</div>  */}
                    <div class="timeline-content">
                        <h3>Education</h3>
                        <p>
                            Graduated with a degree in Computer Science from XYZ University.
                            During my studies, I developed a strong foundation in programming and problem-solving.
                        </p>
                    </div>
                </div>
                 {/* 2nd end  */}

                 {/* 3rd start  */}
                <div class="timeline-card">
                     {/* <div class="timeline-date">2024</div>  */}
                    <div class="timeline-content">
                        <h3>Skills</h3>
                        <p>
                            Learned HTML, CSS, and JavaScript.
                            Started building responsive websites and exploring front-end frameworks like React.
                        </p>
                    </div>
                </div>
                 {/* 3rd end  */}

                 {/* 4th start  */}
                <div class="timeline-card">
                     {/* <div class="timeline-date">2024</div>  */}
                    <div class="timeline-content">
                        <h3>Projects</h3>
                        <p>
                            Built a Weather App using JavaScript and OpenWeather API.
                            This project helped me understand API integration and asynchronous programming.
                        </p>
                    </div>
                </div>
                 {/* 4th end  */}

                 {/* 5th start  */}
                <div class="timeline-card">
                     {/* <div class="timeline-date">2025</div>  */}
                    <div class="timeline-content">
                        <h3>Future Goals</h3>
                        <p>
                            Currently exploring back-end development with Node.js and MongoDB.
                            My goal is to become a full-stack developer and contribute to impactful projects.
                        </p>
                    </div>
                </div>
            </div>
             {/* 5th end  */}

        </div>
    );
};

export default About_me_section;
import React from 'react';

const Work_display_card = () => {
    return (
            <div class="card">
                <div class="img"><img src="img/Img_Collection/project1.jpg" alt="Project Image" /></div>
                <div class="details">
                    <div class="number"><p>01</p></div>

                    <div class="name_and_description">
                        <h2 class="name">Name</h2>
                        <p class="descripton">Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus neque veniam dolor! Neque blanditiis voluptates minima mollitia exercitationem soluta distinctio at laudantium. Dolorem consectetur debitis, necessitatibus excepturi a quod dicta.</p>
                    </div>

                    <div class="lang_used">
                        <div class="lang">
                            <p>React</p>
                        </div>
                        <div class="lang">
                            <p>JS</p>
                        </div>
                        <div class="lang">
                            <p>Framer Motion</p>
                        </div>
                        <div class="lang">
                            <p>Node</p>
                        </div>
                    </div>

                    <div class="live">
                        <a href="#">Live Site -&gt;</a>
                    </div>

                </div>
            </div>
    );
};

export default Work_display_card;
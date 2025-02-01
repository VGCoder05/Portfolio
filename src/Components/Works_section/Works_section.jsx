import React from 'react';
import Work_display_card from './Work_display_card';

const Woks_section = () => {
    return (
        <div className="work_display_section">
            <h2 class="heading">Works</h2>

            <div className="card_container">

                <Work_display_card/>
                <Work_display_card/>
                <Work_display_card/>

            </div>

        </div>
    );
};

export default Woks_section;
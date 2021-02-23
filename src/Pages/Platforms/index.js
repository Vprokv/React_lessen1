// rscp комманда создания компонета
import React from 'react';
import PropTypes from 'prop-types';
import './styles.scss'

const Platforms = props => {
    return (
        <div>
            <div className="platforms-list-container">
                Platforms
                <div class="div-1">
                    1
                    <div className="div-2">
                        2
                    </div>
                </div>
                <div className="div-2">
                    2 - 2
                    <div className="div-1">
                        2 - 1
                    </div>
                </div>
            </div>
            <div className="div-1">
                free 1
            </div>
        </div>
    );
};

Platforms.propTypes = {

};

export default Platforms;

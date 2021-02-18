import {useState, useCallback, useMemo} from 'react'
import logo from './logo.svg';
import './App.css';

const MAX_INPUT_LENGTH = 15 // максмимальное кол-во символов в инпуте

function App() {
    const [userInput, setUserInput] = useState("")
    const handleUserInput = useCallback((e) => {
        const {target: {value}} = e
        console.log('длинна инпута', value.length)
        setUserInput(value)


    }, [])
    const underLineInputStyles = useMemo(() => {
        console.log('считается 1 раз')
        return ({width: `${5 / MAX_INPUT_LENGTH * 100}%`, background: "red"})
    }, [])

    // const underLineInputStyles2 = useMemo(() => {
    //     console.log('считается каждый раз когда я меняю userInput')
    //     return ({ width: `${5/ MAX_INPUT_LENGTH * 100}px`, background: "red" })
    // }, [userInput])
    //
    // console.log('считается всегда', ({ width: `${5/ MAX_INPUT_LENGTH * 100}px`, background: "red" }))

    return (
        <div className="App">
            <div className="p-50">
                <h1>{userInput}</h1>
                <div className="pos-relative">
                    <input className="w-100-percent" type="text" value={userInput} onChange={handleUserInput}/>
                    <div className="input-underline" style={underLineInputStyles}/>
                </div>
            </div>
            {/*<button className="button-usual button-color-black">*/}
            {/*    USUAL*/}
            {/*</button>*/}
            {/*  <button className="button-usual button-color-gold">*/}
            {/*    USUAL*/}
            {/*</button><button className="button-usual button-color-black">*/}
            {/*    USUAL*/}
            {/*</button><button className="button-usual button-color-gold">*/}
            {/*    USUAL*/}
            {/*</button><button className="button-usual button-color-gold">*/}
            {/*    USUAL*/}
            {/*</button><button className="button-usual">*/}
            {/*    USUAL*/}
            {/*</button>*/}

            <div className="calendar-rectangle-grey button-color-grey">
                <div className="calendar-rectangle-white button-color-white">
                    <div className="calendar-rectangle-white button-color-white">
                        <div className="f-s-14 pudding20x15x15x15">
                            Edit Access to Google Analytics
                        </div>
                        <div className="f-s-18">
                            January 2019
                        </div>

                        <div className="week-header calendar-grid">
                            <span>M</span>
                            <span>t</span>
                            <span>w</span>
                            <span>t</span>
                            <span>f</span>
                            <span>s</span>
                            <span>s</span>
                        </div>
                        <div className="days-header calendar-grid">
                            <span className="last-column">1</span>
                            <span>2</span>
                            <span>3</span>
                            <span>4</span>
                            <span>5</span>
                            <span>6</span>
                            <span className="day-selected-dark color-white">7</span>
                            <span className="day-selected-light-1">8</span>
                            <span className="day-selected-light-1">9</span>
                            <span className="day-selected-light-2">10</span>
                            <span className="day-selected-light-2">11</span>
                            <span className="day-selected-light-2">12</span>
                            <span className="day-selected-dark color-white">13</span>
                            <span>14</span>
                            <span>15</span>
                            <span>16</span>
                            <span>17</span>
                            <span>18</span>
                            <span>19</span>
                            <span>20</span>
                            <span>21</span>
                            <span>22</span>
                            <span>23</span>
                            <span>24</span>
                            <span>25</span>
                            <span>26</span>
                            <span>27</span>
                            <span>28</span>
                            <span>29</span>
                            <span>30</span>
                            <span>31</span>
                        </div>
                        <div className="calendar-line-grey button-color-grey">
                        </div>
                        <div className="calendar-rectangle-324x180 button-color-white">
                            <div className="f-s-14 pudding5x5x5x5">
                                Goals / KPI
                            </div>

                            <div className="calendar-rectangle-324x161 button-color-white ">
                                <div className="f-s-14 pudding5x5x5x5 write-color-black">
                                    You can add as many users as you want to view, comment, export, and access redlines.
                                </div>
                                <div className="f-s-14 pudding5x5x5x5 write-color-black">
                                    Unlimited projects. Unlimited version history.
                                </div>
                                <div className="f-s-14 pudding5x5x5x5 write-color-black">
                                    A team library with unlimited shared You can add as many users as you want to view,
                                    comment, export, and access redlines.
                                </div>
                            </div>

                            <div className="f-s-14 write-color-gold">
                                Edit goals / KPI
                            </div>

                        </div>
                    </div>
                </div>

            </div>
            <div className="Headline-container">
                <div className="Headline-container-White">
                    <div className="vector-cross">
                        <svg width="12" height="12" viewBox="0 0 12 12" fill="none"
                             xmlns="http://www.w3.org/2000/svg">
                            <g clip-path="url(#clip0)">
                                <path
                                    d="M5.42641 5.95899L0.11491 11.2705C-0.0326524 11.4181 -0.0326524 11.6571 0.11491 11.8047C0.188598 11.8786 0.285348 11.9153 0.38191 11.9153C0.47866 11.9153 0.575223 11.8786 0.64891 11.8047L6.00035 6.45324L11.3518 11.8047C11.4257 11.8786 11.5222 11.9153 11.6188 11.9153C11.7154 11.9153 11.8121 11.8786 11.8858 11.8047C12.0333 11.6571 12.0333 11.4181 11.8858 11.2705L6.57447 5.95899L11.8893 0.643742C12.0369 0.49618 12.0369 0.257117 11.8893 0.109555C11.7418 -0.0378203 11.5027 -0.0378203 11.3554 0.109555L6.00054 5.46474L0.64516 0.109742C0.497598 -0.0376328 0.258723 -0.0376328 0.11116 0.109742C-0.0364023 0.257305 -0.0364023 0.496367 0.11116 0.64393L5.42641 5.95899Z"
                                    fill="#BDBDBD"/>
                            </g>
                            <defs>
                                <clipPath id="clip0">
                                    <rect width="12" height="12" fill="white"/>
                                </clipPath>
                            </defs>
                        </svg>
                        <div className="Headline-rectangle-white-392x21">Headline
                            <div className="Headline-rectangle-white-227x17">Field name
                            </div>

                            <div className="place-holder">
                                <div className="place-holder-1">Placeholder</div>
                            </div>
                            <div className="Paragraph-style">
                                <div className="Paragraph-style-1">Paragraph style</div>
                            </div>
                            <button className="button-usual button-color-grey">
                                SECONDARY BUTT
                            </button>
                            <button className="button-usual button-color-gold">
                                ACTIVE BUTTON
                            </button>
                        </div>
                    </div>
                </div>
            </div>
            <div className="button-Active-User-Name">
                <div className="Ellipse-white">
                    <svg width="11" height="12" viewBox="0 0 11 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <line x1="0.353553" y1="0.646447" x2="10.253" y2="10.5459" stroke="#BDBDBD"/>
                        <line x1="0.51754" y1="10.6709" x2="10.417" y2="0.771366" stroke="#BDBDBD"/>
                    </svg>

                </div>
                <div className="Active-User-Name"> Active User Name</div>
                <div className="Ellipse-grey"></div>

            </div>

</div>
    );
}

export default App;

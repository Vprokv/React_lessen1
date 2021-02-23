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
            <button> текст </button>
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
                    <svg className="icon-cross-Headline" width="12" height="12" viewBox="0 0 12 12" fill="none"
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
                    <div className="Headline-container-text-headline">
                        Headline
                    </div>
                    <div className="Headline-container-FieldName">
                        <div className="Headline-container-text-FieldName">
                            Field name
                        </div>
                        <div className="Headline-container-text-placeholder">
                            <input type="text" placeholder="Placeholder" className="input-text-placeholder"/>
                            <div className="icon-check-mark-Headline">
                                <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <g clip-path="url(#clip0)">
                                        <path d="M13.911 2.45734C13.7923 2.31109 13.5993 2.31109 13.4806 2.45734L7.00031 10.4424L0.51939 2.45811C0.400692 2.31187 0.207722 2.31187 0.0890237 2.45811C-0.0296746 2.60436 -0.0296746 2.84212 0.0890237 2.98836L6.78483 11.2381C6.84449 11.3109 6.92239 11.3477 7.00031 11.3477C7.07824 11.3477 7.15613 11.3109 7.2152 11.2374L13.911 2.98762C14.0297 2.84134 14.0297 2.60359 13.911 2.45734Z" fill="#BDBDBD"/>
                                    </g>
                                    <defs>
                                        <clipPath id="clip0">
                                            <rect width="14" height="14" fill="white"/>
                                        </clipPath>
                                    </defs>
                                </svg>
                            </div>
                        </div>
                    </div>
                    <div className="Headline-container-text-ParagraphStyle">
                        Paragraph style
                    </div>
                    <div className="headline-button">
                        <button className="button-usual button-color-grey">
                            SECONDARY BUTT
                        </button>
                        <button className="button-usual background-color-BFA764">
                            ACTIVE BUTTON
                        </button>
                    </div>
                </div>
            </div>
            <div className="button-Active-User-Name">
                <div className="Ellipse-white m-10px">
                    <div className="icon-cross-button-Active-User-Name">
                        <svg width="11" height="12" viewBox="0 0 11 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <line x1="0.353553" y1="0.646447" x2="10.253" y2="10.5459" stroke="#BDBDBD"/>
                            <line x1="0.51754" y1="10.6709" x2="10.417" y2="0.771366" stroke="#BDBDBD"/>
                        </svg>
                    </div>
                </div>
                <div className="Active-User-Name"> Active User Name</div>
                <div className="combo-three-ellipse-5px m-10px">
                    <div className="ellipse-5px background-color-BDBDBD"></div>
                    <div className="ellipse-5px background-color-BDBDBD"></div>
                    <div className="ellipse-5px background-color-BDBDBD"></div>
                </div>

            </div>

            <div className="button-Active-User-Name">
                <div className="Ellipse-white m-10px">
                    <div className="icon-cross-button-Active-User-Name">
                        <svg width="11" height="12" viewBox="0 0 11 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <line x1="0.353553" y1="0.646447" x2="10.253" y2="10.5459" stroke="#BDBDBD"/>
                            <line x1="0.51754" y1="10.6709" x2="10.417" y2="0.771366" stroke="#BDBDBD"/>
                        </svg>
                    </div>
                </div>
                <div className="Active-User-Name"> Active User Name</div>
                <div className="combo-three-ellipse-5px m-10px">
                    <div className="ellipse-5px background-color-BFA764"></div>
                    <div className="ellipse-5px background-color-BFA764"></div>
                    <div className="ellipse-5px background-color-BFA764"></div>
                </div>

            </div>

            <div className="button-Practice-black-symbol write-color-white">
                <div className="Ellipse-white m-15px">
                    <div className="icon-cross-button-Practice">
                        <svg width="11" height="12" viewBox="0 0 11 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <line x1="0.353553" y1="0.646447" x2="10.253" y2="10.5459" stroke="#BDBDBD"/>
                            <line x1="0.51754" y1="10.6709" x2="10.417" y2="0.771366" stroke="#BDBDBD"/>
                        </svg>
                    </div>
                </div>
                <div className="button-Practice-text-practice"> Practice</div>
                <div className="combo-three-oval-3px m-15px">
                    <svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M20.3395 15.9434H7.05631C6.13914 15.9434 5.39551 16.6873 5.39551 17.6049C5.39551 18.5217 6.13914 19.2657 7.05631 19.2657H20.3395C21.2563 19.2657 22 18.5217 22 17.6049C22 16.6877 21.2563 15.9434 20.3395 15.9434Z" fill="#333333"/>
                        <path d="M20.3395 9.33203H7.05631C6.13914 9.33203 5.39551 10.0757 5.39551 10.9932C5.39551 11.9103 6.13914 12.654 7.05631 12.654H20.3395C21.2563 12.654 22 11.9103 22 10.9932C22 10.076 21.2563 9.33203 20.3395 9.33203Z" fill="#333333"/>
                        <path d="M7.05631 6.04265H20.3395C21.2563 6.04265 22 5.29902 22 4.3815C22 3.46398 21.2563 2.7207 20.3395 2.7207H7.05631C6.13914 2.7207 5.39551 3.46433 5.39551 4.3815C5.39551 5.29867 6.13914 6.04265 7.05631 6.04265Z" fill="#333333"/>
                        <path d="M1.68589 6.08272C2.61698 6.08272 3.37178 5.32792 3.37178 4.39683C3.37178 3.46574 2.61698 2.71094 1.68589 2.71094C0.754799 2.71094 0 3.46574 0 4.39683C0 5.32792 0.754799 6.08272 1.68589 6.08272Z" fill="#333333"/>
                        <path d="M1.68554 12.6787C2.61643 12.6787 3.37108 11.9241 3.37108 10.9932C3.37108 10.0623 2.61643 9.30762 1.68554 9.30762C0.754641 9.30762 0 10.0623 0 10.9932C0 11.9241 0.754641 12.6787 1.68554 12.6787Z" fill="#333333"/>
                        <path d="M1.68589 19.2898C2.61698 19.2898 3.37178 18.535 3.37178 17.6039C3.37178 16.6728 2.61698 15.918 1.68589 15.918C0.754799 15.918 0 16.6728 0 17.6039C0 18.535 0.754799 19.2898 1.68589 19.2898Z" fill="#333333"/>
                    </svg>

                </div>
            </div>

            <div className="bar-brief-orders-period">
                <div className="line-bar-brief-orders-period">
                </div>
                <div className="bar-brief-orders-period-LeftContent">
                    <div className="box-text-brief">
                        Brief
                    </div>
                    <div className="box-text-orders">
                        Orders
                    </div>
                    <div className="box-text-period">
                        Period
                    </div>
                    <div className="box-text-Stats">
                        Stats
                    </div>
                    <div className="box-text-PLUS">
                        +
                    </div>
                </div>
                <div className="bar-brief-orders-period-RightContent">
                    <div className="background-icon-bar-brief-orders-period">
                        <svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path
                                d="M18.7554 3.90685C16.6811 2.2187 13.9268 1.28906 11.0001 1.28906C8.07321 1.28906 5.31895 2.21876 3.24468 3.90685C1.15232 5.60965 0 7.87903 0 10.297C0 12.6048 1.05038 14.7769 2.96517 16.4505C2.93069 16.5281 2.90324 16.6098 2.88576 16.6957L2.25659 19.7905C2.1818 20.1583 2.2823 20.3777 2.37973 20.497C2.49236 20.6348 2.65929 20.7107 2.84984 20.7107C2.9937 20.7107 3.14832 20.6682 3.30943 20.5845L6.96895 18.6833C8.23594 19.0911 9.59803 19.305 11 19.305C13.9268 19.305 16.6811 18.3753 18.7554 16.6872C20.8477 14.9845 22 12.7151 22 10.2971C22 7.87903 20.8477 5.60965 18.7554 3.90685ZM5.89562 12.1802C4.98965 12.1802 4.25253 11.4431 4.25253 10.5371C4.25253 9.63103 4.98965 8.89391 5.89562 8.89391C6.80159 8.89391 7.53865 9.63103 7.53865 10.5371C7.53871 11.443 6.80165 12.1802 5.89562 12.1802ZM10.9731 12.1802C10.0671 12.1802 9.33006 11.4431 9.33006 10.5371C9.33006 9.63103 10.0671 8.89391 10.9731 8.89391C11.8791 8.89391 12.6162 9.63103 12.6162 10.5371C12.6162 11.443 11.8791 12.1802 10.9731 12.1802ZM16.0506 12.1802C15.1446 12.1802 14.4075 11.4431 14.4075 10.5371C14.4075 9.63103 15.1446 8.89391 16.0506 8.89391C16.9565 8.89391 17.6936 9.63103 17.6936 10.5371C17.6936 11.443 16.9565 12.1802 16.0506 12.1802Z"
                                fill="white"/>
                        </svg>
                    </div>
                    <div className="background-icon-bar-brief-orders-period">
                        <svg width="22" height="18" viewBox="0 0 22 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path
                                d="M20.3395 13.9434H7.05631C6.13914 13.9434 5.39551 14.6873 5.39551 15.6049C5.39551 16.5217 6.13914 17.2657 7.05631 17.2657H20.3395C21.2563 17.2657 22 16.5217 22 15.6049C22 14.6877 21.2563 13.9434 20.3395 13.9434Z"
                                fill="white"/>
                            <path
                                d="M20.3395 7.33203H7.05631C6.13914 7.33203 5.39551 8.07566 5.39551 8.99318C5.39551 9.91035 6.13914 10.654 7.05631 10.654H20.3395C21.2563 10.654 22 9.91035 22 8.99318C22 8.07601 21.2563 7.33203 20.3395 7.33203Z"
                                fill="white"/>
                            <path
                                d="M7.05631 4.04265H20.3395C21.2563 4.04265 22 3.29902 22 2.3815C22 1.46398 21.2563 0.720703 20.3395 0.720703H7.05631C6.13914 0.720703 5.39551 1.46433 5.39551 2.3815C5.39551 3.29867 6.13914 4.04265 7.05631 4.04265Z"
                                fill="white"/>
                            <path
                                d="M1.68589 4.08272C2.61698 4.08272 3.37178 3.32792 3.37178 2.39683C3.37178 1.46574 2.61698 0.710938 1.68589 0.710938C0.754799 0.710938 0 1.46574 0 2.39683C0 3.32792 0.754799 4.08272 1.68589 4.08272Z"
                                fill="white"/>
                            <path
                                d="M1.68603 10.6787C2.61692 10.6787 3.37156 9.92405 3.37156 8.99315C3.37156 8.06226 2.61692 7.30762 1.68603 7.30762C0.755129 7.30762 0.000488281 8.06226 0.000488281 8.99315C0.000488281 9.92405 0.755129 10.6787 1.68603 10.6787Z"
                                fill="white"/>
                            <path
                                d="M1.68589 17.2898C2.61698 17.2898 3.37178 16.535 3.37178 15.6039C3.37178 14.6728 2.61698 13.918 1.68589 13.918C0.754799 13.918 0 14.6728 0 15.6039C0 16.535 0.754799 17.2898 1.68589 17.2898Z"
                                fill="white"/>
                        </svg>
                    </div>
                </div>
            </div>


            <div className="bar-brief-orders-period">
                <div className="line-bar-brief-orders-period">
                </div>
                <div className="bar-brief-orders-period-LeftContent">
                    <div className="box-text-brief">
                        Brief
                    </div>
                    <div className="box-text-orders">
                        Orders
                    </div>
                    <div className="box-text-period">
                        Period
                    </div>
                    <div className="box-text-Stats">
                        Stats
                    </div>
                    <div className="box-text-PLUS">
                        +
                    </div>
                </div>
                <div className="bar-brief-orders-period-RightContent">
                    <div className="background-icon-bar-brief-orders-period">
                        <svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path
                                d="M18.7554 3.90685C16.6811 2.2187 13.9268 1.28906 11.0001 1.28906C8.07321 1.28906 5.31895 2.21876 3.24468 3.90685C1.15232 5.60965 0 7.87903 0 10.297C0 12.6048 1.05038 14.7769 2.96517 16.4505C2.93069 16.5281 2.90324 16.6098 2.88576 16.6957L2.25659 19.7905C2.1818 20.1583 2.2823 20.3777 2.37973 20.497C2.49236 20.6348 2.65929 20.7107 2.84984 20.7107C2.9937 20.7107 3.14832 20.6682 3.30943 20.5845L6.96895 18.6833C8.23594 19.0911 9.59803 19.305 11 19.305C13.9268 19.305 16.6811 18.3753 18.7554 16.6872C20.8477 14.9845 22 12.7151 22 10.2971C22 7.87903 20.8477 5.60965 18.7554 3.90685ZM5.89562 12.1802C4.98965 12.1802 4.25253 11.4431 4.25253 10.5371C4.25253 9.63103 4.98965 8.89391 5.89562 8.89391C6.80159 8.89391 7.53865 9.63103 7.53865 10.5371C7.53871 11.443 6.80165 12.1802 5.89562 12.1802ZM10.9731 12.1802C10.0671 12.1802 9.33006 11.4431 9.33006 10.5371C9.33006 9.63103 10.0671 8.89391 10.9731 8.89391C11.8791 8.89391 12.6162 9.63103 12.6162 10.5371C12.6162 11.443 11.8791 12.1802 10.9731 12.1802ZM16.0506 12.1802C15.1446 12.1802 14.4075 11.4431 14.4075 10.5371C14.4075 9.63103 15.1446 8.89391 16.0506 8.89391C16.9565 8.89391 17.6936 9.63103 17.6936 10.5371C17.6936 11.443 16.9565 12.1802 16.0506 12.1802Z"
                                fill="black"/>
                        </svg>
                    </div>
                    <div className="background-icon-bar-brief-orders-period">
                        <svg width="22" height="18" viewBox="0 0 22 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path
                                d="M20.3395 13.9434H7.05631C6.13914 13.9434 5.39551 14.6873 5.39551 15.6049C5.39551 16.5217 6.13914 17.2657 7.05631 17.2657H20.3395C21.2563 17.2657 22 16.5217 22 15.6049C22 14.6877 21.2563 13.9434 20.3395 13.9434Z"
                                fill="black"/>
                            <path
                                d="M20.3395 7.33203H7.05631C6.13914 7.33203 5.39551 8.07566 5.39551 8.99318C5.39551 9.91035 6.13914 10.654 7.05631 10.654H20.3395C21.2563 10.654 22 9.91035 22 8.99318C22 8.07601 21.2563 7.33203 20.3395 7.33203Z"
                                fill="black"/>
                            <path
                                d="M7.05631 4.04265H20.3395C21.2563 4.04265 22 3.29902 22 2.3815C22 1.46398 21.2563 0.720703 20.3395 0.720703H7.05631C6.13914 0.720703 5.39551 1.46433 5.39551 2.3815C5.39551 3.29867 6.13914 4.04265 7.05631 4.04265Z"
                                fill="black"/>
                            <path
                                d="M1.68589 4.08272C2.61698 4.08272 3.37178 3.32792 3.37178 2.39683C3.37178 1.46574 2.61698 0.710938 1.68589 0.710938C0.754799 0.710938 0 1.46574 0 2.39683C0 3.32792 0.754799 4.08272 1.68589 4.08272Z"
                                fill="black"/>
                            <path
                                d="M1.68603 10.6787C2.61692 10.6787 3.37156 9.92405 3.37156 8.99315C3.37156 8.06226 2.61692 7.30762 1.68603 7.30762C0.755129 7.30762 0.000488281 8.06226 0.000488281 8.99315C0.000488281 9.92405 0.755129 10.6787 1.68603 10.6787Z"
                                fill="black"/>
                            <path
                                d="M1.68589 17.2898C2.61698 17.2898 3.37178 16.535 3.37178 15.6039C3.37178 14.6728 2.61698 13.918 1.68589 13.918C0.754799 13.918 0 14.6728 0 15.6039C0 16.535 0.754799 17.2898 1.68589 17.2898Z"
                                fill="black"/>
                        </svg>
                    </div>
                </div>
            </div>

            <div className="bar-NewPlan">

                <div className="bar-brief-orders-period-LeftContent">
                    <div className="box-button-NewPlan">
                        <div className="box-text-NewPlan">
                            New plan
                        </div>
                        <div className="icon-cross-button-NewPlan">
                            <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M5.42641 5.95899L0.11491 11.2705C-0.0326524 11.4181 -0.0326524 11.6571 0.11491 11.8047C0.188598 11.8786 0.285348 11.9153 0.38191 11.9153C0.47866 11.9153 0.575223 11.8786 0.64891 11.8047L6.00035 6.45324L11.3518 11.8047C11.4257 11.8786 11.5222 11.9153 11.6188 11.9153C11.7154 11.9153 11.8121 11.8786 11.8858 11.8047C12.0333 11.6571 12.0333 11.4181 11.8858 11.2705L6.57447 5.95899L11.8893 0.643742C12.0369 0.49618 12.0369 0.257117 11.8893 0.109555C11.7418 -0.0378203 11.5027 -0.0378203 11.3554 0.109555L6.00054 5.46474L0.64516 0.109742C0.497598 -0.0376328 0.258723 -0.0376328 0.11116 0.109742C-0.0364023 0.257305 -0.0364023 0.496367 0.11116 0.64393L5.42641 5.95899Z" fill="white"/>
                            </svg>
 
                        </div>
                    </div>
                    <div className="box-text-Usual">
                        Usual
                    </div>

                </div>
                <div className="bar-brief-orders-period-RightContent">
                    <div className="background-icon-bar-brief-orders-period">
                        <svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path
                                d="M18.7554 3.90685C16.6811 2.2187 13.9268 1.28906 11.0001 1.28906C8.07321 1.28906 5.31895 2.21876 3.24468 3.90685C1.15232 5.60965 0 7.87903 0 10.297C0 12.6048 1.05038 14.7769 2.96517 16.4505C2.93069 16.5281 2.90324 16.6098 2.88576 16.6957L2.25659 19.7905C2.1818 20.1583 2.2823 20.3777 2.37973 20.497C2.49236 20.6348 2.65929 20.7107 2.84984 20.7107C2.9937 20.7107 3.14832 20.6682 3.30943 20.5845L6.96895 18.6833C8.23594 19.0911 9.59803 19.305 11 19.305C13.9268 19.305 16.6811 18.3753 18.7554 16.6872C20.8477 14.9845 22 12.7151 22 10.2971C22 7.87903 20.8477 5.60965 18.7554 3.90685ZM5.89562 12.1802C4.98965 12.1802 4.25253 11.4431 4.25253 10.5371C4.25253 9.63103 4.98965 8.89391 5.89562 8.89391C6.80159 8.89391 7.53865 9.63103 7.53865 10.5371C7.53871 11.443 6.80165 12.1802 5.89562 12.1802ZM10.9731 12.1802C10.0671 12.1802 9.33006 11.4431 9.33006 10.5371C9.33006 9.63103 10.0671 8.89391 10.9731 8.89391C11.8791 8.89391 12.6162 9.63103 12.6162 10.5371C12.6162 11.443 11.8791 12.1802 10.9731 12.1802ZM16.0506 12.1802C15.1446 12.1802 14.4075 11.4431 14.4075 10.5371C14.4075 9.63103 15.1446 8.89391 16.0506 8.89391C16.9565 8.89391 17.6936 9.63103 17.6936 10.5371C17.6936 11.443 16.9565 12.1802 16.0506 12.1802Z"
                                fill="black"/>
                        </svg>
                    </div>

                </div>
            </div>
</div>
    );
}

export default App;

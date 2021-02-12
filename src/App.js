import { useState, useCallback, useMemo } from 'react'
import logo from './logo.svg';
import './App.css';

const MAX_INPUT_LENGTH = 15 // максмимальное кол-во символов в инпуте

function App() {
    const [userInput, setUserInput] = useState("")
    const handleUserInput = useCallback((e) => {
        const { target: { value } } = e
        console.log('длинна инпута', value.length)
        setUserInput(value)
    }, [])
    const underLineInputStyles = useMemo(() => {
        // console.log('считается 1 раз')
        return ({ width: `${5/ MAX_INPUT_LENGTH * 100}%`, background: "red" })
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
                        <span>5</span>
                        <span>6</span>
                        <span className="day-selected color-white">7</span>
                        <span>8</span>
                        <span>9</span>
                        <span>10</span>
                        <span>11</span>
                        <span>12</span>
                        <span>13</span>
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
    </div>
  );
}

export default App;

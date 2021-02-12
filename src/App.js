import logo from './logo.svg';
import './App.css';
import {useState, useCallback} from 'react'


function App() {
    const [userinput, setUserInput] = useState("Введите имя")
    const handleUserInput = useCallback((e) =>{
        const { target:{value} } = e
        console.log(e)
        setUserInput(value)
    }, [])
    const underlineInputStyles =
  return (
    <div className="App">
        <div className="p-50">
            <h1>{userinput}</h1>
            <input type="text" value={userinput} onChange={handleUserInput}/>
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
                        <span className="day-selected">7</span>
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

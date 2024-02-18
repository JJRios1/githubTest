import logo from './logo.svg';
import './App.css';

import maths_Logo from './Images/maths.png';
import science_Logo from './Images/science.png';
import history_Logo from './Images/history.png';


function App() {
  return (
    <div className="App">
      <div className="App" id="separate-margin">
                <h1>What would you like to learn today in this wonderlful day?</h1>
                <div className="this-container"> {/*This is a conteiner to hold the courses cards*/}

                    {/*This is one card*/}
                    <div className="this-card">
                        <img src={maths_Logo} height="100" width="100"></img>
                        <h2>Math: Pre-K - 8th Grade</h2>

                        <div className="this-inner-con">
                            <div className="this-card-inner">
                                <div className="keep_left">
                                    <a href="https://www.google.co.uk/"><p>Pre-K</p></a>
                                    <p>2nd Grade</p>
                                    <p>3rd Grade</p>
                                    <p>4th Grade</p>
                                </div>
                            </div>
                            <div className="this-card-inner">
                                <div className="keep_left">
                                    <p>5th Grade</p>
                                    <p>6th Grade</p>
                                    <p>7th Grade</p>
                                    <p>8th Grade</p>
                                </div>
                            </div>
                        </div>
                        <hr></hr>
                    </div>
                    {/*End of one card*/}


                    {/*This is one card*/}
                    <div className="this-card">
                        <img src={science_Logo} height="100" width="100"></img>
                        <h2>Science</h2>
                        <div className="this-inner-con">
                            <div className="this-card-inner">
                                <div className="keep_left">
                                    <p>Middle School Biology</p>
                                    <p>Middle School Earth and Space Science</p>
                                    <p>Middle School Physics</p>
                                </div>
                            </div>
                            <div className="this-card-inner">
                                <div className="keep_left">
                                    <p>High School Biology</p>
                                    <p>High School Physics</p>
                                </div>
                            </div>
                        </div>
                        <hr></hr>
                    </div>
                    {/*End of one card*/}

                    {/*This is one card*/}
                    <div className="this-card">
                        <img src={maths_Logo} height="100" width="100"></img>
                        <h2>Math: High School</h2>
                        <div className="this-inner-con">
                            <div className="this-card-inner">
                                <div className="keep_left">
                                    <p>Algebra 1</p>
                                    <p>Algebra 2</p>
                                </div>
                            </div>
                            <div className="this-card-inner">
                                <div className="keep_left">
                                    <p>Geometry</p>
                                    <p>Trigonometry</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/*End of one card*/}

                    {/*This is one card*/}
                    <div className="this-card">
                        <img src={history_Logo} height="100" width="100"></img>
                        <h2>History</h2>
                        <div className="this-inner-con">
                            <div className="this-card-inner">
                                <div className="keep_left">
                                    <p>World History</p>
                                </div>
                            </div>
                            <div className="this-card-inner">
                                <div className="keep_left">
                                    <p>US History</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/*End of one card*/}

                </div> {/*End of conteiner to hold courses cards*/}
            </div>
    </div>
  );
}

export default App;

import React, { useState } from 'react';
import './CourseOverview.css';
import { Link } from 'react-router-dom';
import { Container } from 'react-bootstrap';
export default function CourseOverview() {
  const [toggleState, setToggleState] = useState(1);

  const toggleTab = (index) => {
    setToggleState(index);
  };
  const [selectedYear, setSelectedYear] = useState('1st Year');
  const [selectedSemester, setSelectedSemester] = useState('Semester I');

  const handleYearChange = (event) => {
    setSelectedYear(event.target.value);
  };

  const handleSemesterChange = (event) => {
    setSelectedSemester(event.target.value);
  };

  const handleShowButtonClick = () => {
    alert(`You selected: ${selectedYear} - ${selectedSemester}`);
  };

  return (
    <>
      <div className="main-box">
        <div className="side-box">
          <div className="side-container">
            <div className="side-top-box">
              <p>Student Zone</p>
            </div>

            <ul className="side-link">
              <li>
                <div className="side-border-left" />
                <Link to="/Areas">Course</Link>
              </li>
              <li>
                <div className="side-border-left" />
                <Link to="/Project">Alumini-Network</Link>
              </li>
              <li>
                {' '}
                <div className="side-border-left" />
                <Link to="/Publication">Gallary</Link>
              </li>
              <li>
                {' '}
                <div className="side-border-left" />
                <Link to="/Publication">Student Section</Link>
              </li>
              <li>
                {' '}
                <div className="side-border-left" />
                <Link to="/Publication">Activities</Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="to-centerx">
          <div className="containersy">
            <div className="bloc-tabsx">
              <button
                className={toggleState === 1 ? 'tabsx active-tabsx' : 'tabsx'}
                onClick={() => toggleTab(1)}
              >
                Curriculum
              </button>
              <button
                className={toggleState === 2 ? 'tabsx active-tabsx' : 'tabsx'}
                onClick={() => toggleTab(2)}
              >
                Schedule
              </button>
            </div>

            <div className="content-tabsx">
              <div
                className={
                  toggleState === 1 ? 'contentx active-contentx' : 'contentx'
                }
              >
                <div className="containerxy">
                  <div className="boxx">
                    <div className="columnx">Curriculum</div>
                    <div className="dropdown-containerx">
                      <select
                        className="dropdownx"
                        value={selectedYear}
                        onChange={handleYearChange}
                      >
                        <option value="1st Year">1st Year</option>
                        <option value="2nd Year">2nd Year</option>
                        <option value="3rd Year">3rd Year</option>
                        <option value="4th Year">4th Year</option>
                      </select>
                      <div className="gapx"></div>
                      <select
                        className="dropdownx"
                        value={selectedSemester}
                        onChange={handleSemesterChange}
                      >
                        <option value="Semester I">Semester I</option>
                        <option value="Semester II">Semester II</option>
                      </select>
                    </div>
                    <br />
                    <button className="buttonx" onClick={handleShowButtonClick}>
                      Show
                    </button>
                  </div>
                </div>
              </div>

              <div
                className={
                  toggleState === 2 ? 'contentx active-contentx' : 'contentx'
                }
              >
                <div className="containerxy">
                  <div className="boxx">
                    <div className="columnx">Schedule</div>
                    <div className="dropdown-containerx">
                      <select
                        className="dropdownx"
                        value={selectedYear}
                        onChange={handleYearChange}
                      >
                        <option value="1st Year">1st Year</option>
                        <option value="2nd Year">2nd Year</option>
                        <option value="3rd Year">3rd Year</option>
                        <option value="4th Year">4th Year</option>
                      </select>
                      <div className="gapx"></div>
                      <select
                        className="dropdownx"
                        value={selectedSemester}
                        onChange={handleSemesterChange}
                      >
                        <option value="Semester I">Semester I</option>
                        <option value="Semester II">Semester II</option>
                      </select>
                    </div>
                    <br />
                    <button className="buttonx" onClick={handleShowButtonClick}>
                      Show
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
import "./qualification.css";
import React, { useState } from "react";

const Qualification = () => {
  const [toggleState, setToggleState] = useState(1);

  const toggleTab = (index) => {
    setToggleState(index);
  };
  return (
    <section className="qualification section">
      <h2 className="section__title">Qualification</h2>
      <span className="section__subtitle">My personal Journey</span>

      <div className="qualification__container container">
        <div className="qualification__tabs">
          <div
            className={
              toggleState === 1
                ? "qualification__button qualification__active button--flex"
                : " qualification__button button--flex"
            }
            onClick ={() => toggleTab(1)}
          >
            <i
              className="uil uil-graduation-cap 
            qualification__icon"
            ></i>
          
            Education
          </div>

          <div
            className={
              toggleState === 2
                ? "qualification__button qualification__active button--flex"
                : " qualification__button button--flex"
            }
            onClick ={() => toggleTab(2)}
          >
            <i
              className="uil uil-briefcase-alt 
            qualification__icon"
            ></i>
            
            Experience
          </div>
        </div>

        <div className="qualification__section">
          <div
            className={
              toggleState === 1
                ? "qualification__content qualification__content-active"
                : "qualification__content"
            }
          
          >
            <div className="qualification__data">
              <div>
                <h3 className="qualification__title">Frontend Development</h3>
                <span className="qualification__subtitle">
                  Latam - Oracle Alura
                </span>
                <div className="qualification__calender">
                  <i className="uil uil-calendar-alt"></i>2022 - Present
                </div>
              </div>
              <div>
                <span className="qualification__rounder"></span>
                <span className="qualification__line"></span>
              </div>
            </div>

            <div className="qualification__data">
              <div></div>

              <div>
                <span className="qualification__rounder"></span>
                <span className="qualification__line"></span>
              </div>

              <div>
                <h3 className="qualification__title">Full Stacks Developer</h3>
                <span className="qualification__subtitle">
                  Colombia - BIT institute
                </span>
                <div className="qualification__calender">
                  <i className="uil uil-calendar-alt"></i>June 2022 - October
                  2022
                </div>
              </div>
            </div>

            <div className="qualification__data">
              <div>
                <h3 className="qualification__title">Web Development</h3>
                <span className="qualification__subtitle">
                  Colombia - Universidad de Caldas
                </span>
                <div className="qualification__calender">
                  <i className="uil uil-calendar-alt"></i>June 2021 - December
                  2021
                </div>
              </div>
              <div>
                <span className="qualification__rounder"></span>
                <span className="qualification__line"></span>
              </div>
            </div>
          </div>

          <div
            className={
              toggleState === 2
                ? "qualification__content qualification__content-active"
                : "qualification__content"
            }
           
          >
            <div className="qualification__data">
              <div>
                <h3 className="qualification__title">Frontend developer</h3>
                <span className="qualification__subtitle">
                  Latam - Oracle Alura
                </span>
                <div className="qualification__calender">
                  <i className="uil uil-calendar-alt"></i>2022 - Present
                </div>
              </div>
              <div>
                <span className="qualification__rounder"></span>
                <span className="qualification__line"></span>
              </div>
            </div>

            <div className="qualification__data">
              <div></div>

              <div>
                <span className="qualification__rounder"></span>
                <span className="qualification__line"></span>
              </div>

              <div>
                <h3 className="qualification__title">Backend and Frontend Developer</h3>
                <span className="qualification__subtitle">
                  Colombia - BIT institute
                </span>
                <div className="qualification__calender">
                  <i className="uil uil-calendar-alt"></i>June 2022 - October
                  2022
                </div>
              </div>
            </div>
            <div className="qualification__data">
              <div>
                <h3 className="qualification__title">Web Designer</h3>
                <span className="qualification__subtitle">
                  Colombia - Universidad de Caldas
                </span>
                <div className="qualification__calender">
                  <i className="uil uil-calendar-alt"></i>June 2021 - December
                  2022
                </div>
              </div>
              <div>
                <span className="qualification__rounder"></span>
                <span className="qualification__line"></span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Qualification;

"use client";
import { data } from "@/data.js";
import styles from "./page.module.css";
import { useState } from "react";
import Popup from "./Popup.jsx";

export default function Home() {
  const [background, setBackground] = useState(false);
  const [current, setCurrent] = useState({});

  function onButtonClick(component) {}

  function close(e) {
    setCurrent({});
    setBackground(false);
  }

  function styling(g) {
    let col = "";
    if (g.includes("A")) col = "green";
    else if (g.includes("B")) col = "#ff9703";
    else if (g.includes("C")) col = "blue";

    return {
      backgroundColor: col,
    };
  }

  function openModal(tab) {
    setCurrent(tab);
    setBackground(true);
  }

  return (
    <main className={styles.main}>
      {background && (
        <Popup onClose={close}>
          <div className={styles.theme}>
            <h4 className={styles.heading}>
              <span className={styles.label}>theme:</span>
              {current.title}
            </h4>
            <p className={styles.textContent}>
              <span className={styles.label}>time interval:</span>
              {current.interval}
            </p>
            <div className={`${styles.person} ${styles.personModal}`}>
              <div className={styles.imgHolder}>
                <img
                  src="https://i.pravatar.cc/200"
                  alt=""
                  className={styles.img}
                />
              </div>
              <p className={styles.textContent}>{current.name}</p>
            </div>
            <div className={styles.description}>{current.description}</div>
            <div className={styles.level}>
              <p className={styles.levelEl}>
                Ниво:
                <span className={styles.info} style={styling(current.grade)}>
                  {current.gradeText}
                </span>
              </p>
            </div>
            <div className={`${styles.level} ${styles.levelModal}`}>
              <p className={styles.levelEl}>
                <span
                  className={styles.dot}
                  style={styling(current.grade)}
                ></span>
                {current.grade}
              </p>
            </div>
          </div>
        </Popup>
      )}
      <div>
        <div className={styles.container}>
          <p className={styles.timeHeader}>Time</p>

          <div className={`${styles.daysHeader} ${styles.header}`}>
            <p className={styles.weekDaysHeader}>Понеделник</p>
            <p className={styles.weekDaysHeader}>Вторник</p>
            <p className={styles.weekDaysHeader}>Сряда</p>
            <p className={styles.weekDaysHeader}>Четвъртък</p>
            <p className={styles.weekDaysHeader}>Петък</p>
            <p className={styles.weekDaysHeader}>Събота</p>
            <p className={styles.weekDaysHeader}>Неделя</p>
          </div>
        </div>

        {/* ITERABLE */}
        {data.map((el, i) => (
          <div className={styles.container} key={i}>
            <p className={styles.time}>{el.time}</p>
            <div className={styles.days}>
              <div className={styles.weekDays}>
                {el.day?.mon && (
                  <figure
                    className={styles.figure}
                    onClick={() => openModal(el.day.mon)}
                  >
                    <h2 className={styles.h2}>{el.day.mon.title}</h2>
                    <p className={styles.timeInterval}>{el.day.mon.interval}</p>
                    <div className={styles.person}>
                      <div className={styles.imgHolder}>
                        <img
                          src="https://i.pravatar.cc/100"
                          alt=""
                          className={styles.img}
                        />
                      </div>
                      <p>{el.day.mon.name}</p>
                    </div>
                    <div className={styles.level}>
                      <p className={styles.levelEl}>
                        <span
                          className={styles.dot}
                          style={styling(el.day.mon.grade)}
                        ></span>
                        {el.day.mon.grade}
                      </p>
                    </div>
                    <div className={styles.level}>
                      <p className={styles.levelEl}>
                        Ниво:
                        <span
                          className={styles.info}
                          style={styling(el.day.mon.grade)}
                        >
                          {el.day.mon.gradeText}
                        </span>
                      </p>
                    </div>
                  </figure>
                )}
              </div>

              <div className={styles.weekDays}>
                {el.day?.tue && (
                  <figure
                    className={styles.figure}
                    onClick={() => openModal(el.day.tue)}
                  >
                    <h2 className={styles.h2}>{el.day.tue.title}</h2>
                    <p className={styles.timeInterval}>{el.day.tue.interval}</p>
                    <div className={styles.person}>
                      <div className={styles.imgHolder}>
                        <img
                          src="https://i.pravatar.cc/100"
                          alt=""
                          className={styles.img}
                        />
                      </div>
                      <p>{el.day.tue.name}</p>
                    </div>
                    <div className={styles.level}>
                      <p className={styles.levelEl}>
                        <span
                          className={styles.dot}
                          style={styling(el.day.tue.grade)}
                        ></span>
                        {el.day.tue.grade}
                      </p>
                    </div>
                    <div className={styles.level}>
                      <p className={styles.levelEl}>
                        Ниво:
                        <span
                          className={styles.info}
                          style={styling(el.day.tue.grade)}
                        >
                          {el.day.tue.gradeText}
                        </span>
                      </p>
                    </div>
                  </figure>
                )}
              </div>

              <div className={styles.weekDays}>
                {el.day?.wed && (
                  <figure
                    className={styles.figure}
                    onClick={() => openModal(el.day.wed)}
                  >
                    <h2 className={styles.h2}>{el.day.wed.title}</h2>
                    <p className={styles.timeInterval}>{el.day.wed.interval}</p>
                    <div className={styles.person}>
                      <div className={styles.imgHolder}>
                        <img
                          src="https://i.pravatar.cc/100"
                          alt=""
                          className={styles.img}
                        />
                      </div>
                      <p>{el.day.wed.name}</p>
                    </div>
                    <div className={styles.level}>
                      <p className={styles.levelEl}>
                        <span
                          className={styles.dot}
                          style={styling(el.day.wed.grade)}
                        ></span>
                        {el.day.wed.grade}
                      </p>
                    </div>
                    <div className={styles.level}>
                      <p className={styles.levelEl}>
                        Ниво:
                        <span
                          className={styles.info}
                          style={styling(el.day.wed.grade)}
                        >
                          {el.day.wed.gradeText}
                        </span>
                      </p>
                    </div>
                  </figure>
                )}
              </div>

              <div className={styles.weekDays}>
                {el.day?.thu && (
                  <figure
                    className={styles.figure}
                    onClick={() => openModal(el.day.thu)}
                  >
                    <h2 className={styles.h2}>{el.day.thu.title}</h2>
                    <p className={styles.timeInterval}>{el.day.thu.interval}</p>
                    <div className={styles.person}>
                      <div className={styles.imgHolder}>
                        <img
                          src="https://i.pravatar.cc/100"
                          alt=""
                          className={styles.img}
                        />
                      </div>
                      <p>{el.day.thu.name}</p>
                    </div>
                    <div className={styles.level}>
                      <p className={styles.levelEl}>
                        <span
                          className={styles.dot}
                          style={styling(el.day.thu.grade)}
                        ></span>
                        {el.day.thu.grade}
                      </p>
                    </div>
                    <div className={styles.level}>
                      <p className={styles.levelEl}>
                        Ниво:
                        <span
                          className={styles.info}
                          style={styling(el.day.thu.grade)}
                        >
                          {el.day.thu.gradeText}
                        </span>
                      </p>
                    </div>
                  </figure>
                )}
              </div>

              <div className={styles.weekDays}>
                {" "}
                {el.day?.fri && (
                  <figure
                    className={styles.figure}
                    onClick={() => openModal(el.day.fri)}
                  >
                    <h2 className={styles.h2}>{el.day.fri.title}</h2>
                    <p className={styles.timeInterval}>{el.day.fri.interval}</p>
                    <div className={styles.person}>
                      <div className={styles.imgHolder}>
                        <img
                          src="https://i.pravatar.cc/100"
                          alt=""
                          className={styles.img}
                        />
                      </div>
                      <p>{el.day.fri.name}</p>
                    </div>
                    <div className={styles.level}>
                      <p className={styles.levelEl}>
                        <span
                          className={styles.dot}
                          style={styling(el.day.fri.grade)}
                        ></span>
                        {el.day.fri.grade}
                      </p>
                    </div>
                    <div className={styles.level}>
                      <p className={styles.levelEl}>
                        Ниво:
                        <span
                          className={styles.info}
                          style={styling(el.day.fri.grade)}
                        >
                          {el.day.fri.gradeText}
                        </span>
                      </p>
                    </div>
                  </figure>
                )}
              </div>

              <div className={styles.weekDays}>
                {" "}
                {el.day?.sat && (
                  <figure
                    className={styles.figure}
                    onClick={() => openModal(el.day.sat)}
                  >
                    <h2 className={styles.h2}>{el.day.sat.title}</h2>
                    <p className={styles.timeInterval}>{el.day.sat.interval}</p>
                    <div className={styles.person}>
                      <div className={styles.imgHolder}>
                        <img
                          src="https://i.pravatar.cc/100"
                          alt=""
                          className={styles.img}
                        />
                      </div>
                      <p>{el.day.sat.name}</p>
                    </div>
                    <div className={styles.level}>
                      <p className={styles.levelEl}>
                        <span
                          className={styles.dot}
                          style={styling(el.day.sat.grade)}
                        ></span>
                        {el.day.sat.grade}
                      </p>
                    </div>
                    <div className={styles.level}>
                      <p className={styles.levelEl}>
                        Ниво:
                        <span
                          className={styles.info}
                          style={styling(el.day.sat.grade)}
                        >
                          {el.day.sat.gradeText}
                        </span>
                      </p>
                    </div>
                  </figure>
                )}
              </div>

              <div className={styles.weekDays}>
                {" "}
                {el.day?.sun && (
                  <figure
                    className={styles.figure}
                    onClick={() => openModal(el.day.sun)}
                  >
                    <h2 className={styles.h2}>{el.day.sun.title}</h2>
                    <p className={styles.timeInterval}>{el.day.sun.interval}</p>
                    <div className={styles.person}>
                      <div className={styles.imgHolder}>
                        <img
                          src="https://i.pravatar.cc/100"
                          alt=""
                          className={styles.img}
                        />
                      </div>
                      <p>{el.day.sun.name}</p>
                    </div>
                    <div className={styles.level}>
                      <p className={styles.levelEl}>
                        <span
                          className={styles.dot}
                          style={styling(el.day.sun.grade)}
                        ></span>
                        {el.day.sun.grade}
                      </p>
                    </div>
                    <div className={styles.level}>
                      <p className={styles.levelEl}>
                        Ниво:
                        <span
                          className={styles.info}
                          style={styling(el.day.sun.grade)}
                        >
                          {el.day.sun.gradeText}
                        </span>
                      </p>
                    </div>
                  </figure>
                )}
              </div>
            </div>
          </div>
        ))}
        {/* END OF ITERABLE */}
      </div>
    </main>
  );
}

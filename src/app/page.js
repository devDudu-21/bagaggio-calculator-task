"use client";

import { useState, useEffect } from "react";
import {
  FaPercent,
  FaDeleteLeft,
  FaEquals,
  FaDivide,
  FaPlus,
  FaMinus,
} from "react-icons/fa6";
import { TbMathPi } from "react-icons/tb";
import { evaluate } from "mathjs";

import Button from "./components/Button";
import styles from "./page.module.css";

export default function Home() {
  const [display, setDisplay] = useState("");

  useEffect(() => {
    console.log("Display updated:", display);
  }, [display]);

  const handleButton = (value) => {
    setDisplay((prevDisplay) => prevDisplay + value);
  };

  const handleClear = () => {
    setDisplay("");
  };

  const handleDelete = () => {
    setDisplay((prevDisplay) => prevDisplay.slice(0, -1));
  };

  const handleEqual = () => {
    try {
      let result = display.replace(/x/g, "*");
      result = evaluate(result);
      if (result === Infinity) {
        setDisplay("Error");
      } else {
        setDisplay(evaluate(display).toString());
      }
    } catch (error) {
      setDisplay("Error");
    }
  };

  const handlePercentage = () => {
    try {
      let result = parseFloat(display) / 100;
      setDisplay(result.toString());
    } catch (error) {
      setDisplay("Error");
    }
  };

  return (
    <main className={styles.main}>
      <div className={styles.container}>
        <div className={styles.displayContainer}>
          <input
            type="text"
            className={styles.display}
            value={display}
            readOnly
          />
        </div>
        <div className={styles.content}>
          <div className={styles.row}>
            <Button
              label="C"
              onClick={handleClear}
              className={`${styles.funcButton} ${styles.clear}`}
            />
            <Button
              label={<TbMathPi />}
              onClick={() => handleButton(Math.PI.toString())}
              className={styles.funcButton}
            />
            <Button
              label={<FaDeleteLeft color="#ffcc00" />}
              onClick={handleDelete}
              className={styles.funcButton}
            />
            <Button
              label={<FaDivide />}
              onClick={() => handleButton("/")}
              className={styles.funcButton}
            />
          </div>
          <div className={styles.row}>
            <Button
              label="7"
              onClick={() => handleButton("7")}
              className={styles.button}
            />
            <Button
              label="8"
              onClick={() => handleButton("8")}
              className={styles.button}
            />
            <Button
              label="9"
              onClick={() => handleButton("9")}
              className={styles.button}
            />
            <Button
              label="x"
              onClick={() => handleButton("*")}
              className={styles.funcButton}
            />
          </div>
          <div className={styles.row}>
            <Button
              label="4"
              onClick={() => handleButton("4")}
              className={styles.button}
            />
            <Button
              label="5"
              onClick={() => handleButton("5")}
              className={styles.button}
            />
            <Button
              label="6"
              onClick={() => handleButton("6")}
              className={styles.button}
            />
            <Button
              label="-"
              onClick={() => handleButton("-")}
              className={styles.funcButton}
            />
          </div>
          <div className={styles.row}>
            <Button
              label="1"
              onClick={() => handleButton("1")}
              className={styles.button}
            />
            <Button
              label="2"
              onClick={() => handleButton("2")}
              className={styles.button}
            />
            <Button
              label="3"
              onClick={() => handleButton("3")}
              className={styles.button}
            />
            <Button
              label={<FaPlus />}
              onClick={() => handleButton("+")}
              className={styles.funcButton}
            />
          </div>
          <div className={styles.row}>
            <Button
              label={<FaPercent />}
              onClick={handlePercentage}
              className={styles.funcButton}
            />
            <Button
              label="0"
              onClick={() => handleButton("0")}
              className={styles.button}
            />
            <Button
              label=","
              onClick={() => handleButton(".")}
              className={styles.button}
            />
            <Button
              label={<FaEquals color="#1dff00" />}
              onClick={handleEqual}
              className={styles.funcButton}
            />
          </div>
        </div>
      </div>
    </main>
  );
}

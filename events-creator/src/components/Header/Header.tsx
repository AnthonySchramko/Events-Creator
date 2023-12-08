import React, { useContext, useEffect, useState } from "react";
import { CalenderContext } from "../../context/CalenderContextProvider";
import styles from "./Header.module.scss";
const Header = () => {
  const { date, setDate, monthWithYear, setMonthWithYear, showModal } =
    useContext(CalenderContext);
  const [container, setContainer] = useState<string>();
  useEffect(() => {
    if (showModal) {
      setContainer(styles.container_unfocused);
    } else {
      setContainer(styles.container);
    }
  }, [showModal]);
  const handlePreviousMonth = () => {
    const newDate = new Date(date.setMonth(date.getMonth() - 1));
    setDate(new Date(newDate));
    const month = newDate.toLocaleString("default", { month: "long" });
    const year = newDate.getFullYear();
    setMonthWithYear(`${month} ${year} `);
  };
  const handleNextMonth = () => {
    const newDate = new Date(date.setMonth(date.getMonth() + 1));
    setDate(new Date(newDate));
    const month = newDate.toLocaleString("default", { month: "long" });
    const year = newDate.getFullYear();
    setMonthWithYear(`${month} ${year} `);
  };
  return (
    <div className={container}>
      <h2 onClick={handlePreviousMonth}>←</h2>
      <div className={styles.text}>{monthWithYear}</div>
      <h2 onClick={handleNextMonth}>→</h2>
    </div>
  );
};

export default Header;

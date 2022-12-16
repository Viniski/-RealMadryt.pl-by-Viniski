import React, { useState, useRef, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import FormInput from "../../Input/FormInput";
import styles from "./Searchbar.module.css";

function Searchbar(props) {
  const navigate = useNavigate();
  const [term, setTerm] = useState("");
  const inputRef = useRef();

  const search = () => {
    if (term === "") return;
    navigate(`/wyszukaj/${term}`);
    setTerm("");
  };

  const onKeyDownHandler = (e) => {
    if (e.key === "Enter") {
      search();
    }
  };

  const focusInput = () => {
    inputRef.current.focus();
  };

  useEffect(() => {
    focusInput();
  }, [term]);

  return (
    <div
      className={
        props.targetDevice === "mobile"
          ? styles.searchBarMobile
          : styles.searchBarDeskop
      }
    >
      <FormInput
        innerRef={inputRef}
        placeholder={"Wyszukaj artykuł"}
        value={term}
        onChange={setTerm}
        onKeyDown={onKeyDownHandler}
        className={styles.input}
      />
      <button onClick={search} className={styles.button}>
        Szukaj
      </button>
    </div>
  );
}

export default Searchbar;

import styles from "./ButtonsContainer.module.css";
const ButtonsContainer = ({ onClickButton }) => {
  const ButtonName = [
    "C",
    "1",
    "2",
    "+",
    "3",
    "4",
    "-",
    "5",
    "6",
    "*",
    "7",
    "8",
    "/",
    "=",
    "9",
    "0",
    ".",
  ];
  return (
    <div className={styles.buttonContainer}>
      {ButtonName.map((ButtonName) => {
        return (
          <button
            className={styles.button}
            onClick={() => onClickButton(ButtonName)}
          >
            {ButtonName}
          </button>
        );
      })}
    </div>
  );
};

export default ButtonsContainer;

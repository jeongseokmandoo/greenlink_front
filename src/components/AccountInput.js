import React from "react";
import styles from "./AccountInput.module.css";

function Input2({ type, value, onChange, placeholder }) {
  return (
    <div>
      <input
        className={styles.Input2}
        type={type}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
      />
    </div>
  );
}

const Input3 = React.forwardRef(({ type, onChange }, ref) => {
  return (
    <div>
      <input
        className={styles.Input3}
        type={type}
        onChange={onChange}
        ref={ref}
      />
    </div>
  );
});

export { Input2, Input3 };

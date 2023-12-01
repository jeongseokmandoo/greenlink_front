import styles from "./UpdateBox.module.css";

function UpdateBox({ className, title, type, value, onChange, placeholder }) {
  return (
    <div className={className}>
      <p className={styles.ptag}>{title}</p>
      <input
        className={styles.UpdateBox}
        type={type}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
      />
    </div>
  );
}

export default UpdateBox;

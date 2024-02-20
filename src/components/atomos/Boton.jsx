import styles from "./Boton.module.css";

const Boton = ({ label, url }) => {
  return (
    <>
      <a className={styles} href={url}>
        <p>{label}</p>
      </a>
    </>
  );
}

export default Boton;
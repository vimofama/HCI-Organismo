import styles from "./Filtro.module.css";
import iconoAbajo from "../../assets/iconoAbajo.svg";

const Filtro = ({ label }) => {
  return (
    <>
      <div className={styles.contenedor}>
        <p>{label}</p>
        <img
          src={iconoAbajo}
          alt="Icono de una flecha apuntado para abajo"
        />
      </div>
    </>
  );
};

export default Filtro;

import styles from "./Barra_busqueda.module.css";
import iconoAbajo from "./images/iconoBuscar.svg";

const Barra_busqueda = ({ label }) => {
  return (
    <>
      <div className={styles.contenedor}>
        <p>{label}</p>
        <img src={iconoAbajo} alt="Icono de una lupa"/>      </div>
    </>
  );
}

export default Barra_busqueda;
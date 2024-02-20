import Boton from "../atomos/Boton";
import Cajita from '../atomos/Cajita';
import styles from "./Card_linea.module.css";

const Card_linea = ({ nombre, precio }) => {
  return (
    <>
      <div className={styles.contenedor}>
        <Cajita />
        <div className={styles.caja}>
          <div className={styles.info}>
            <h2>{nombre}</h2>
            <p>${precio}</p>
          </div>
          <div>
            <Boton label="Ver Detalle" url="#" />
          </div>
        </div>
        <Cajita />
      </div>
    </>
  );
}

export default Card_linea;

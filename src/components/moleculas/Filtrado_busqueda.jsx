import Filtro from "../atomos/Filtro";
import Barra_busqueda from "../atomos/Barra_busqueda";
import styles from "./Filtrado_busqueda.module.css";

const Filtrado_busqueda = () => {
  return (
    <div className={styles.contenedor}>
      <div className={styles.filtros}>
        <Filtro label="Alfabético" />
        <Filtro label="Precio" />
        <Filtro label="Paradas" />
      </div>
      <div className={styles.busqueda}>
        <Barra_busqueda label="Buscar" />
      </div>
    </div>
  );
};

export default Filtrado_busqueda;

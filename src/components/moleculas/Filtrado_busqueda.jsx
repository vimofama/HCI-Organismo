import Filtro from "../atomos/Filtro"
import Barra_busqueda from "../atomos/Barra_busqueda";
import styles from "./Filtrado_busqueda.module.css";

const Filtrado_busqueda = () => {
  return (
    <div className={styles.contenedor}>
        <div className={styles.filtros}>
            <Filtro label="Alfabético"></Filtro>
            <Filtro label="Precio"></Filtro>
            <Filtro label="Paradas"></Filtro>
        </div>
        <div className={styles.busqueda}>
            <Barra_busqueda label="Buscar"></Barra_busqueda>

        </div>
    </div>
  );
}

export default Filtrado_busqueda;

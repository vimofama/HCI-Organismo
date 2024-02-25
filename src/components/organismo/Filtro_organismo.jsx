import Filtrado_busqueda from "../moleculas/Filtrado_busqueda";
import styles from "./Filtro_organismo.module.css";

const Filtro_organismo = () => {
  return (
    <>
      <div className={styles.contenedor}>
        <h2>FILTROS</h2>
        <Filtrado_busqueda></Filtrado_busqueda>
        
      </div>
    </>
  );
}
export default Filtro_organismo
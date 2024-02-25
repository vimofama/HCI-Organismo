import Filtro_organismo from "../organismo/Filtro_organismo";
import Lista_lineas from "../organismo/Lista_lineas";
import styles from "./Dashboard.module.css";

const Dashboard = () => {
  return (
    <div className={styles.contenedor}>
      <Filtro_organismo />
      <Lista_lineas />
    </div>
  );
};

export default Dashboard;

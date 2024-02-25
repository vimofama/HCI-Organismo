import Card_linea from "../moleculas/Card_linea";
import styles from "./Lista_lineas.module.css";

export default function Lista_lineas() {
  return (
    <>
      <div className={styles.contenedor}>
        <div className={styles.caja}>
          <h2 className={styles.titulo}>LINEAS</h2>
        </div>
        <Card_linea nombre="MACHALA" precio="0.50" />
        <Card_linea nombre="CNN" precio="0.50" />
        <Card_linea nombre="CARAPUNGO - OFELIA" precio="0.35" />
        <Card_linea nombre="PAMPA - OFELIA" precio="0.60" />
      </div>
    </>
  );
}

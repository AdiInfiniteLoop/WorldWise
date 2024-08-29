import PageNav from "../components/PageNav";
import styles from "./Product.module.css";

export default function Product() {
  return (
    <main className={styles.product}>
      <PageNav />
      <section>
        <img
          src="img-1.jpg"
          alt="person with dog overlooking mountain with sunset"
        />
        <div>
          <h2>About WorldWide.</h2>
          <p>
            Travel the world with WorldWise, your ultimate adventure companion.
            Our app logs your travels on a world map, capturing every city you
            visit. With the Basic Plan, enjoy free real-time tracking for 3
            devices and 24-hour location history.
          </p>
          <p>
            Relive your journeys and share your global adventures with
            WorldWise. Start your free trial today!
          </p>
        </div>
      </section>
    </main>
  );
}

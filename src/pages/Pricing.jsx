// Uses the same styles as Product
import PageNav from "../components/PageNav";
import styles from "./Product.module.css";

export default function Product() {
  return (
    <main className={styles.product}>
      <PageNav />
      <section>
        <div>
          <h2>
            Simple pricing.
            <br />
            Just $9/month.
          </h2>
          <p>
            Travel the world with WorldWise, the ultimate app to keep track of
            your adventures. Our app offers a world map that logs your footsteps
            in every city you visit, ensuring you never forget your wonderful
            experiences.The Plan at $9 per month provides unlimited device
            tracking, 1 year of location history, route optimization, detailed
            activity reports, and third-party integrations. For businesses, the
            Enterprise Plan offers customized solutions with advanced analytics,
            API access, and dedicated support. Start your free trial today and
            discover the perfect plan for your travel tracking needs!
          </p>
        </div>
        <img src="img-2.jpg" alt="overview of a large city with skyscrapers" />
      </section>
    </main>
  );
}

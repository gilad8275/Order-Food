import classes from './MealsSummary.module.css';

const MealsSummary = () => {
  return (
    <section className={classes.summary}>
      <h2>Delicious Hamburgers, Delivered To You</h2>
      <p>
        Choose your favorite hamburger from our broad selection of available hamburgers
        and enjoy a delicious lunch or dinner at home.
      </p>
      <p>
        All our hamburgers are cooked with high-quality ingredients, just-in-time.
      </p>
    </section>
  );
};

export default MealsSummary;
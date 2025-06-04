import type { Food } from "../../hooks/useFetch";
import styles from "./RecipeCardPreview.module.css";

interface RecipeCardProps {
  food: Food;
}

export const RecipeCardPreview: React.FC<RecipeCardProps> = ({ food }) => {
  return (
    <div key={food.id} className={styles.foodItem}>
      <div className={styles.foodInfo}>
        <h3 className={styles.foodTitle}>{food.title}</h3>
        <p>Calories: {Math.round(food.nutrition.nutrients[0].amount)} kcal</p>
      </div>
      {food.image && (
        <div className={styles.imageContainer}>
          <img
            src={`${food.image}`}
            alt={food.title}
            className={styles.ingredientImage}
          />
        </div>
      )}
    </div>
  );
};

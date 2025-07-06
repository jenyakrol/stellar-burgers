import { FC } from 'react';
import { Preloader } from '../ui/preloader';
import { IngredientDetailsUI } from '../ui/ingredient-details';
import { useParams } from 'react-router-dom';
import { useSelector } from '@store';
import { getUnsortedIngredients } from '@slices/ingredientsSlice/ingredientsSlice';

export const IngredientDetails: FC = () => {
  const id = useParams().id;
  /** TODO: взять переменную из стора */
  const ingredientData = useSelector(getUnsortedIngredients).find(
    (item) => item._id === id
  );

  if (!ingredientData) {
    return <Preloader />;
  }

  return <IngredientDetailsUI ingredientData={ingredientData} />;
};

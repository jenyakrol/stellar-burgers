import { FC, memo } from 'react';
import { BurgerConstructorElementUI } from '@ui';
import { BurgerConstructorElementProps } from './type';
import { useDispatch } from '@store';
import {
  removeConstructorItem,
  swapBurgerIngredients
} from '@slices/constructorSlice/constructorSlice';

export const BurgerConstructorElement: FC<BurgerConstructorElementProps> = memo(
  ({ ingredient, index, totalItems }) => {
    const dispatch = useDispatch();

    const handleMoveDown = () =>
      dispatch(swapBurgerIngredients([index, index + 1]));

    const handleMoveUp = () =>
      dispatch(swapBurgerIngredients([index, index - 1]));

    const handleClose = () => dispatch(removeConstructorItem(ingredient));

    return (
      <BurgerConstructorElementUI
        ingredient={ingredient}
        index={index}
        totalItems={totalItems}
        handleMoveUp={handleMoveUp}
        handleMoveDown={handleMoveDown}
        handleClose={handleClose}
      />
    );
  }
);

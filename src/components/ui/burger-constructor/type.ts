import { TPlacedOrder } from '@utils-types';

export type BurgerConstructorUIProps = {
  constructorItems: any;
  orderRequest: boolean;
  price: number;
  orderModalData: TPlacedOrder | null;
  onOrderClick: () => void;
  closeOrderModal: () => void;
};

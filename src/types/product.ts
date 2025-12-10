export type TProduct = {
  id: number;
  title: string;
  price: number;
  img: string;
  quantity: number;
  isLiked: boolean;
  isAuthenticated: boolean;
  userId: number | null;
};

export type TOrder = {
  id: number;
  userId: number;
  subtotal: number;
  items: TProduct[];
};

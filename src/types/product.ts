export type TProduct = {
  id: number;
  title: string;
  price?: number;
  oldPrice?: number;
  newPrice?: number;
  image: string;
  quantity?: number;
  isLiked: boolean;
  isAuthenticated: boolean;
  userId: number | null;
  discount?: number;
  reviews?: number;
  stars?: number;
};

export type TOrder = {
  id: number;
  userId: number;
  subtotal: number;
  items: TProduct[];
};

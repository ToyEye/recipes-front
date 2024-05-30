export type TRecipe = {
  name: string;
  description: string;
  img: string;
  ingredients: string[];
  instructions: string[];
  vote_average: number;
  id: string;
};

export type TReview = {
  author: string;
  description: string;
  id: string;
};

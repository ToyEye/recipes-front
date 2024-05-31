export interface IRecipe {
  name: string;
  description: string;
  img: string;
  ingredients: string[];
  instructions: string[];
  vote_average: number;
  _id: string;
}

export type TReview = {
  author: string;
  description: string;
  id: string;
};

export interface IStatus {
  loading: boolean;
  error: null | string;
}

declare module "react-rating-stars-component" {
  export default function RatingStars(props: RatingStarsProps): JSX.Element;

  interface RatingStarsProps {
    count?: number;
    value: number;
    size?: number;
    isHalf?: boolean;
    activeColor?: string;
    edit?: boolean;
    onChange?: (args: number) => void;
  }
}

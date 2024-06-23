import StarIcon from "assets/icons/StarIcon";
import cls from './StarRating.module.scss';

type Props = {
  rating?: number;
}

const StarRating = ({rating}: Props) => {

  if (!rating) return null;

  const stars = Array(Math.round(rating)).fill(0);

  return (
    <div className={cls.wrapper}>
      {stars.map((_, index) => <StarIcon key={index} />)}
    </div>
  );
};

export default StarRating;

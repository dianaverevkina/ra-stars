import { Star } from "./Star/Star";

interface IStars {
  count: number,
}

export const Stars = ({ count = 0 }: IStars) => {
  if (count < 1 || count > 5 || typeof count !== 'number') return;

  const stars = [];
  for (let i = 0; i < count; i++) {
    const star = <Star />;
    stars.push(star);
  }
  return (
    <ul className="card-body-stars u-clearfix">
      {stars}
    </ul>
  );
}

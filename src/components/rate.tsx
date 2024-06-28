import { FaRegStar, FaStar } from 'react-icons/fa';
import { FaRegStarHalfStroke } from 'react-icons/fa6';

const Rate = ({ purcent = 50 }: { purcent: number }) => {
  const stars = (purcent / 100) * 5;
  const starsArr = Array.from({ length: stars }, (_, i) => i + 1);
  const halfStarsArr =
    Number(stars) === stars && stars % 1 !== 0 ?
      Array.from({ length: 1 }, (_, i) => i + 1)
    : [];
  const emptyStarsArr = Array.from(
    { length: 5 - (starsArr.length + halfStarsArr.length) },
    (_, i) => i + 1
  );

  return (
    <div className='flex'>
      {starsArr.map((_, index) => (
        <FaStar key={index} className='text-yellow-500' />
      ))}
      {halfStarsArr.map((_, index) => (
        <FaRegStarHalfStroke key={index} className='text-yellow-500' />
      ))}
      {emptyStarsArr.map((_, index) => (
        <FaRegStar key={index} />
      ))}
    </div>
  );
};

export default Rate;

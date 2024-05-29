const StarRating = ({ count }: { count: number }) => {
  const stars = Array.from({ length: count }, (_, i) => (
    <img key={i} src='../star.png' alt='star' width='20' height='20' />
  ));

  return <div className='flex gap-2 items-center'>{stars}</div>;
};

export default StarRating;

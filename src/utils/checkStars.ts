export const checkStars = (stars: number) => {
  if (stars === 1) {
    return "<div className=\"star-rating\"> <img src='../star.png' alt='stars' width={20} /></div>";
  } else if (stars === 2) {
    return "<div className=\"flex gap-2 items-center\"> <img src='../star.png' alt='stars' width={20} /> <img src='../star.png' alt='stars' width={20} />  </div>";
  } else if (stars === 3) {
    return "<div className=\"flex gap-2 items-center\"> <img src='../star.png' alt='stars' width={20} />  <img src='../star.png' alt='stars' width={20} />  <img src='../star.png' alt='stars' width={20} /></div>";
  } else if (stars === 4) {
    return "<div className=\"flex gap-2 items-center\"> <img src='../star.png' alt='stars' width={20} />  <img src='../star.png' alt='stars' width={20} />  <img src='../star.png' alt='stars' width={20} />  <img src='../star.png' alt='stars' width={20} /></div>";
  } else {
    return "<div className=\"flex gap-2 items-center\"> <img src='../star.png' alt='stars' width={20} />  <img src='../star.png' alt='stars' width={20} />  <img src='../star.png' alt='stars' width={20} />  <img src='../star.png' alt='stars' width={20} />  <img src='../star.png' alt='stars' width={20} /></div>";
  }
};

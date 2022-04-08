const Card = ({ id, image, title, description }) => {
  return (
    <div className="flex gap-5 flex- flex-wrap justify-center my-20">
      <div className="w-80 h-64 border rounded-xl drop-shadow-lg">
        {/* <img className="max-h-full max-w-full" src={image} alt={title} /> */}
        <h3 className="min-w-full text-center items-center">{title}</h3>
        <p className="min-w-full text-center items-center">{description}</p>
      </div>
    </div>
  );
};

export default Card;

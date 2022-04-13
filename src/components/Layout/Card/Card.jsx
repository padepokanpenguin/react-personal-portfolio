const Card = ({ image, title, description }) => {
  return (
    <div className="w-80 h-64 border rounded-xl drop-shadow-lg hover:bg-slate-100 cursor-pointer">
      <img
        className={`max-h-full max-w-full mx-auto h-2/3 my-4 px-3`}
        src={image}
        alt={title}
      />
      <h3 className="min-w-full text-center items-center font-bold">{title}</h3>
      <p className="min-w-full text-center items-center">{description}</p>
    </div>
  );
};

export default Card;

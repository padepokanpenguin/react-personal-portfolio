const ContactItem = ({ src, id, urlLink }) => {
  return (
    <div className="bg-contact mx-auto mb-8 w-[166px] h-40 hover:cursor-pointer">
      <a href={urlLink} target="_blank" rel="noreferrer">
        <img
          className="block mx-auto justify-center mt-7 items-center w-[100px] h-[100px]"
          src={src}
          alt={id}
        />
      </a>
    </div>
  );
};

export default ContactItem;

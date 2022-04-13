const Welcome = () => {
  return (
    <div className="flex min-w-screen min-h-screen -mt-10">
      <div className="max-h-full max-w-full font-poppin m-auto ">
        <h4 className="text-2xl text-logo sm:text-3xl lg:text-4xl">Hi!</h4>
        <h1 className="text-3xl font-semibold bg-gradient-to-b from-logo to-warna bg-clip-text text-transparent sm:text-4xl lg:text-5xl">
          I'm Aria Nur Jamal
        </h1>
        <h1 className="text-3xl font-semibold bg-gradient-to-t from-logo to-warna bg-clip-text text-transparent sm:text-4xl lg:text-5xl">
          I'm a Web Developer
        </h1>
      </div>
    </div>
  );  
};

export default Welcome;

import Card from "./Card";

const passionData = [
  {
    id: "p1",
    title: "Front-end",
    imgData: "../assets/frontend.png",
    description: "(Bootsrap, Tailwind)",
  },
  {
    id: "p2",
    title: "Back-end",
    imgData: "../assets/backend.png",
    description: "(Nodejs, Firebase)",
  },
  {
    id: "p3",
    title: "Operating System",
    imgData: "../assets/operatingsystem.png",
    description: "(Linux)",
  },
  {
    id: "p4",
    title: "UI/UX Design",
    imgData: "../assets/UIUXdesign.png",
    description: "(Figma)",
  },
  {
    id: "p5",
    title: "Finance",
    imgData: "../assets/finance.png",
    description: "(Sharia Economy)",
  },
];




const Passion = () => {
  return (
    <section>
      <div className="text-center">
        <h2 className="text-logo text-xl sm:text-2xl">
          My <span className="font-bold">Passion</span>
        </h2>
      </div>
      <Card id={passionData[0].id} image={passionData[0].imgData} title={passionData[0].title} description={passionData[0].description}  />
    </section>
  );
};

export default Passion;

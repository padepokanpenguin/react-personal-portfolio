import Card from "../Layout/Card/Card";
import Layout from "../Layout/Layout";

const PASSION_DATA = [
  {
    id: "p1",
    title: "Front-end",
    imgData: "asset/frontend.png",
    description: "(Bootsrap, Tailwind)",
  },
  {
    id: "p2",
    title: "Back-end",
    imgData: "asset/backend.png",
    description: "(Nodejs, Firebase)",
  },
  {
    id: "p3",
    title: "Operating System",
    imgData: "asset/operatingsytem.png",
    description: "(Linux)",
  },
  {
    id: "p4",
    title: "UI/UX Design",
    imgData: "asset/UIUXdesign.png",
    description: "(Figma)",
  },
  {
    id: "p5",
    title: "Finance",
    imgData: "asset/finance.png",
    description: "(Sharia Economy)",
  },
];

const Passion = () => {
  return (
    <Layout>
      <div className="text-center">
        <h2 className="text-logo text-xl sm:text-2xl">
          My <span className="font-bold">Passion</span>
        </h2>
      </div>
      <div className="flex gap-14 flex-wrap justify-center my-20">
        {PASSION_DATA.map((passion) => (
          <Card
            key={passion.id}
            id={passion.id}
            title={passion.title}
            image={passion.imgData}
            description={passion.description}
            variant='passion'
          />
        ))}
      </div>
    </Layout>
  );
};

export default Passion;

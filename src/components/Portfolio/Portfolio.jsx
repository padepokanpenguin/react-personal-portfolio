import Layout from "../Layout/Layout";

const PORTFOLIO_DATA = [
  {
    id: "pt1",
    imgData: "asset/portfolio.png",
  },
];

const Portfolio = () => {
  return (
    <Layout>
      <div className="text-center">
        <h2 className="text-logo text-xl sm:text-2xl">
          My <span className="font-bold">Portfolio</span>
        </h2>
      </div>
      <div className="flex gap-5 flex-wrap justify-center my-20 group">
        <img className="border rounded-md drop-shadow-md hover:cursor-pointer hover:scale-105 hover:transition" src={PORTFOLIO_DATA[0].imgData} alt="portfolio" />
      </div>
    </Layout>
  );
};

export default Portfolio;

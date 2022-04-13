import ContactItem from "./ContactItem";
import Layout from "../Layout/Layout";

const CONTACT_IMAGE = [
  {
    id: "im1",
    imgUrl: "asset/contact/linkedin.png",
  },
  {
    id: "im2",
    imgUrl: "asset/contact/fast-message.png",
  },
  {
    id: "im3",
    imgUrl: "asset/contact/github.png",
  },
  {
    id: "im4",
    imgUrl: "asset/contact/instagram.png",
  },
];

const Contact = () => {
  return (
    <Layout>
      <section>
        <div className="text-center">
          <h2 className="text-logo text-xl sm:text-2xl">
            My <span className="font-bold">Contact</span>
          </h2>
        </div>
        <div className="flex gap-5 flex-col flex-wrap justify-center my-20 lg:flex-row">
          {CONTACT_IMAGE.map((img) => (
            <ContactItem src={img.imgUrl} key={img.id} />
          ))}
        </div>
      </section>
    </Layout>
  );
};

export default Contact;

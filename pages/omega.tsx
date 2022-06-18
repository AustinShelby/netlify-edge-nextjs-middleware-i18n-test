import type { GetStaticProps, InferGetStaticPropsType, NextPage } from "next";

const Home: NextPage<InferGetStaticPropsType<typeof getStaticProps>> = ({
  text,
}) => {
  return <div>{text}</div>;
};

export const getStaticProps: GetStaticProps = async (context) => {
  const locale = context.locale;
  console.log(`Omegapage locale: ${locale}`);
  return { props: { text: locale === "de" ? "DE" : "EN" } };
};

export default Home;

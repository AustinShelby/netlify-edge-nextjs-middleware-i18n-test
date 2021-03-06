import type { GetStaticProps, InferGetStaticPropsType, NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";

const Home: NextPage<InferGetStaticPropsType<typeof getStaticProps>> = ({
  text,
}) => {
  return <div className={styles.container}>{text}</div>;
};

export const getStaticProps: GetStaticProps = async (context) => {
  const locale = context.locale;
  console.log(`Homepage locale: ${locale}`);
  return { props: { text: locale === "de" ? "DE" : "EN" } };
};

export default Home;

import type { GetStaticProps, NextPage } from "next";
import { getMonsters } from "../api/airtable";

const Monsters: NextPage = () => {
  return (
    <div>
      <p></p>
    </div>
  );
};

export const getStaticProps: GetStaticProps = async () => {
  const monsters = getMonsters();
  return {
    props: {
      monsters,
    },
  };
};

export default Monsters;

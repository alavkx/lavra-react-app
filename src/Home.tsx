import React from "react";
import { fullBleed } from "./Layout";
import { useQuery } from "react-query";

export const Home = () => {
  const { data, status } = useQuery("doggy", () =>
    fetch("https://dog.ceo/api/breeds/image/random").then((res) => res.json()),
  );
  return (
    <>
      {status === "success" ? (
        <img css={fullBleed} src={data.message} alt="A doggie" />
      ) : null}
      <h1>Howdy</h1>
    </>
  );
};

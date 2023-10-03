import { useQuery } from "@apollo/client";
import React from "react";
import { GET_ALL_QUOTES } from "../gqloperations/queries";

const Home = () => {
  const { loading, error, data } = useQuery(GET_ALL_QUOTES);
  // useEffect(() => {
  //   fetch("http://localhost:4000", {
  //     method: "POST",
  //     headers: {
  //       "Contet-type": "application/json",
  //     },
  //     body: JSON.stringify({
  //       query: `
  //       query getAllQuotes{
  //         quotes{
  //           name
  //           by{
  //             _id
  //             firstName
  //           }
  //         }
  //       }`,
  //     }),
  //   })
  //     .then((res) => res.json())
  //     .then((data) => console.log(data));
  // }, []);
  return (
    <div className="container">
      <blockquote>
        <h6>if it works dont touch it</h6>
        <p className="right-align">~rahat</p>
      </blockquote>
      <blockquote>
        <h6>if it works dont touch it</h6>
        <p className="right-align">~rahat</p>
      </blockquote>
    </div>
  );
};

export default Home;

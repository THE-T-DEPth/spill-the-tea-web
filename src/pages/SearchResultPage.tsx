import React from "react";
import SearchBox from "../components/searchResult/SearchBox";
import Box from "../components/searchResult/SearchBox";
import BoxData from "../assets/data/BoxData";

const searchResultPage: React.FC = () => {
  return (
    <div>
      {BoxData.map((data, index) => (
        <Box
          key={index}
          title={data.title}
          image={data.image}
          keywords={data.keywords}
          time={data.time}
          likes={data.likes}
          comments={data.comments}
        />
      ))}
    </div>
  );
};

export default searchResultPage;

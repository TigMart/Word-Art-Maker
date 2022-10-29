import React, { useEffect, useState } from "react";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";
import ListGroup from "react-bootstrap/ListGroup";
import { useSelector } from "react-redux";
import { useFonts } from "../../redux/actions/useFonts";
import SingleFont from "./SingleFont";

const Fonts = () => {
  const fonts = useSelector((state) => state.fonts);
  console.log(fonts);
  const { getAllFonts } = useFonts();

  const [searchText, setSearchText] = useState("");

  const search = (e) => {
    setSearchText(e.target.value);
  };

  useEffect(() => {
    getAllFonts();
  }, []);

  return (
    <div>
      <InputGroup size="sm" className="mb-3 mt-3">
        <InputGroup.Text>Search</InputGroup.Text>
        <Form.Control aria-label="Search" value={searchText} onChange={search} />
      </InputGroup>
      <ListGroup className="fonts-parent mt-4">
        {[
          fonts
            .filter((font) => {
              return font.name
                .split("_")[1]
                .toLowerCase()
                .includes(searchText.toLowerCase());
            })
            .map((font) => {
              return (
                <SingleFont
                  key={font.id}
                  fontSrc={`${process.env.REACT_APP_API}${font.src}`}
                  fontName={`${font.name}`}
                  id={font.id}
                />
              );
            }),
        ]}
      </ListGroup>
    </div>
  );
};

export default Fonts;

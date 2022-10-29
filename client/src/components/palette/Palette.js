import React, { useEffect, useState } from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import ButtonGroup from "react-bootstrap/ButtonGroup";
import ToggleButton from "react-bootstrap/ToggleButton";
import { useDispatch, useSelector } from "react-redux";
import { usePalettes } from "../../redux/actions/usePalettes";
const Palette = () => {
  const palettes = useSelector((state) => state.palettes);
  const [radioValue, setRadioValue] = useState();

  const { getAllPalettes } = usePalettes();
  const dispatch = useDispatch();
  useEffect(() => {
    getAllPalettes();
  }, []);

  const getPaletteId = (id) => {
    dispatch({
      type: "SET_PALETTE_ID",
      payload: id,
    });
  };

  return (
    <div>
      <Container>
        <ButtonGroup>
          <Row className="palette-parent align-content-start">
            {palettes && palettes.length ? (
              palettes.map((palette, idx) => {
                return (
                  <Col xs={4} md={4} key={palette.id}>
                    <ToggleButton
                      key={idx}
                      id={`palette-${idx}`}
                      type="radio"
                      variant="outline-light"
                      className={`${
                        radioValue === palette.id ? "choose" : ""
                      } box border`}
                      name="radio"
                      value={palette.id}
                      checked={radioValue === palette.id}
                      onChange={() => setRadioValue(palette.id)}
                      onClick={() => getPaletteId(palette.id)}
                    >
                      <img
                        src={`${process.env.REACT_APP_API}${palette.src}`}
                        alt={`${palette.id}`}
                        width="100%"
                        height="100%"
                      />
                    </ToggleButton>
                  </Col>
                );
              })
            ) : (
              <></>
            )}
          </Row>
        </ButtonGroup>
      </Container>
    </div>
  );
};

export default Palette;

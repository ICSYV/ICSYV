import React, {
  useState,
  useContext,
  useEffect,
  useCallback,
  useMemo,
} from "react";
import { SelectModal } from "./SelectModal";
import { PlayerModal } from "./PlayerModal";

export const ModalController = (props) => {
  const [visible, setVisible] = useState("");
  const [Modal, setModal] = useState(<div></div>);
  const [active1, setActive1] = useState(false);
  const [active2, setActive2] = useState(false);
  const [active3, setActive3] = useState(false);

  useEffect(() => {
    console.log(props.visible);
    setVisible(props.visible);
    if (props.visible == "select") {
      setActive1(true);
      setActive2(false);
      setActive3(false);
    } else if (props.visible == "player") {
      setActive1(false);
      setActive2(true);
      setActive3(false);
    }
  }, [props]);

  useEffect(() => {
    if (visible == "select") {
      setModal(
        <SelectModal
          visible={active1}
          setData={props.setData}
          Category={props.Category}
        />
      );
    } else if (visible == "player") {
      setModal(
        <PlayerModal
          visible={active2}
          setData={props.setData}
          Category={props.Category}
        />
      );
    }
  }, [visible]);
  return <div>{Modal}</div>;
};

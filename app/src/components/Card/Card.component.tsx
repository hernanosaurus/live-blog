import { useMemo } from "react";
import { Thumbtack } from "../../assets/icons/ui.icons";
import CardFooter from "./CardFooter/CardFooter.component";
import Pin from "../Pin/Pin.component";

import "./Card.styles.scss";

type CardProps = {
  pinned?: boolean; // if true, will display the "PINNED" tag
  hot?: boolean; // if true, will display the "BREAKING" tag, and the background & border will be red
  title: React.ReactNode | string;
  body: string[];
  children?: React.ReactNode;
};

function Card({
  pinned = false,
  hot = false,
  title,
  body,
  children,
}: CardProps) {
  const background = useMemo(
    () =>
      hot && pinned
        ? "#fef4f5"
        : hot
        ? "#fef4f5"
        : pinned
        ? "#e9edf1"
        : "#ffffff",
    [hot, pinned]
  );

  const borderColor = useMemo(
    () =>
      hot && pinned
        ? "#a30c27"
        : hot
        ? "#a30c27"
        : pinned
        ? "#0c355f"
        : "#ffffff",
    [hot, pinned]
  );

  const bordered = useMemo(() => hot || pinned, [hot, pinned]);

  const padding = useMemo(() => (pinned ? "0 24px 8px" : "8px 24px"), [pinned]);

  return (
    <div className="Card" style={{ background }}>
      {pinned && (
        <Pin
          label="PINNED"
          icon={<Thumbtack />}
          style={{ position: "absolute", top: 0, right: 0 }}
        />
      )}

      {bordered && <div className="CardHeader" style={{ borderColor }} />}

      <div className="CardBody" style={{ padding }}>
        <h3>
          {hot && <span style={{ color: "#a30c27" }}>BREAKING: </span>}
          {title}
        </h3>

        {body.map((paragraph, index) => (
          <p key={index}>{paragraph}</p>
        ))}

        {children}
      </div>

      <CardFooter />
    </div>
  );
}

export default Card;

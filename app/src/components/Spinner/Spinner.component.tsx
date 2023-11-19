import "./Spinner.styles.scss";

type SpinnerProps = {
  variant?: "default" | "hot";
  width?: number;
  height?: number;
};
const Spinner = ({
  variant = "default",
  width = 50,
  height = 50,
}: SpinnerProps) => (
  <div
    className={`Spinner ${variant}`}
    style={{ width: width, height: height }}
  ></div>
);

export default Spinner;

import "./Pin.styles.scss";

type PinProps = {
  label: string;
  icon?: React.ReactNode;
  variant?: "default" | "hot";
  style?: React.CSSProperties;
};

function Pin({ label, icon, variant = "default", style }: PinProps) {
  return (
    <button className={`Pinned ${variant}`} style={{ ...style }}>
      {icon}
      {label}
    </button>
  );
}

export default Pin;

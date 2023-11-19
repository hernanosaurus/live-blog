import "./Badge.styles.scss";

type BadgeProps = {
  icon?: React.ReactNode;
  onClick?: () => void;
};

function Badge({ icon, onClick }: BadgeProps) {
  return (
    <button onClick={onClick} className="Badge">
      {icon}
    </button>
  );
}

export default Badge;

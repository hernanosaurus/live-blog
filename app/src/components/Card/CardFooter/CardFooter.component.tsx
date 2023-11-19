import { Link } from "../../../assets/icons/ui.icons";
import {
  Facebook,
  Instagram,
  LinkedIn,
  Twitter,
  WhatsApp,
} from "../../../assets/icons/social.icons";

import "./CardFooter.styles.scss";
import Badge from "../../Badge/Badge.component";

function CardFooter() {
  return (
    <div className="CardFooter">
      <Badge icon={<Facebook />} />
      <Badge icon={<Twitter />} />
      <Badge icon={<Instagram />} />
      <Badge icon={<LinkedIn />} />
      <Badge icon={<WhatsApp />} />
      <Badge icon={<Link size={20} color="#0c355f" />} />
    </div>
  );
}

export default CardFooter;

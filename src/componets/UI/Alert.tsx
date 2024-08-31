import { X } from "lucide-react";
import "./index.scss";
import { ReactNode } from "react";
import { AlertType } from "../../types/alert";

interface IProps {
  type: AlertType;
  icon: ReactNode;
  title: string;
  description: string;
}
const Alert = ({ type, icon, title, description }: IProps) => {
  return (
    <div className={type}>
      <div className="alert-header">
        <div className="title">
          <span>{icon}</span>
          <h4> {title}</h4>
        </div>
        <X className="close" />
      </div>
      <div className="alert-text">{description}</div>
    </div>
  );
};

export default Alert;

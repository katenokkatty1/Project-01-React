import { useParams } from "react-router-dom";

export default function CarPage() {
  const { model } = useParams<{ model: string }>();
  return <div>Car with model {model}</div>;
}
interface Props {
  familyName: string;
  score?: number;
}

function Goodbye({ familyName, score }: Props) {
  return (
    <p>
      Goodbye, {familyName}! {score ? `Your score is ${score}` : null}
    </p>
  );
}

export default Goodbye;
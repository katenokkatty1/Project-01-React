import { useState } from "react";
import type { GenderInformation } from "../../types/GenderInformation";
import s from "./GenderReveal.module.css";
import { Results } from "./Results";

export default function GenderReveal() {
  const [name, setName] = useState<string>("");
  const [info, setInfo] = useState<GenderInformation | undefined>(undefined);

  async function fetchGender(name: string) {
    const res = await fetch(`https://api.genderize.io/?name=${name}`);
    const data = await res.json();
    setInfo(data);
  }

  return (
    <div className={s.container}>
      <h2>Gender Reveal</h2>
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
        placeholder="Your Name"
      />
      <button
        type="button"
        onClick={() => {
          fetchGender(name);
        }}
      >
        Submit
      </button>

      <Results info={info} />
    </div>
  );
}
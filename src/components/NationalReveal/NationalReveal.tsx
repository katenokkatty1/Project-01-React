import { useState } from "react";
import type {NationalInformation } from "../../types/NationalInformation";
import s from "./NationalReveal.module.css";
import { Results } from "./Results";

export default function NationalReveal() {
  const [name, setName] = useState<string>("");
  const [info, setInfo] = useState<NationalInformation | undefined>(undefined);

  async function fetchNational(name: string) {
    const res = await fetch(`https://api.nationalize.io/?name=${name}`);
    const data = await res.json();
    setInfo(data);
  }

  return (
    <div className={s.container}>
      <h2>Nationalise</h2>
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
        placeholder="Your Name"
      />
      <button
        type="button"
        onClick={() => {
          fetchNational(name);
        }}
      >
        Submit
      </button>

      <Results info={info} />
    </div>
  );
}
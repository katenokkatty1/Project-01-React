import type { FC } from "react";
import s from "./Results.module.css";
import type { NationalInformation } from "../../types/NationalInformation";
import getCountryNameByCode from "../../utils/getCountryNameByCode";

export const Results: FC<{ info: NationalInformation | undefined }> = ({info}) => {
  if (!info) return <p>No information yet. Please insert name</p>;
  return (
    <div className={s.results}>
      <h3>Results</h3>
      <p>Имя: {info?.name}</p>
     <p>Данных проанализировано: {info?.count}</p>
<p>Возможные национальности: </p>
     {info?.country.map((country) => (
        
          <span>- {country.country_id} - {Math.round(country.probability * 100)}%</span>
       
      
      ))}
      {/* или так */}
        <ul>
        {info?.country.map((c) => (
          <li key={c.country_id}>
            {getCountryNameByCode(c.country_id)} - {(c.probability * 100).toFixed(2)}%
          </li>
        ))}
      </ul>




    </div>
  );
};
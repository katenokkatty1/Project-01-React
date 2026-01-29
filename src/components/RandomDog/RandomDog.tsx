import { useEffect, useState } from "react";

export default function RandomDog() {
  const [image, setImage] = useState<string | undefined>(undefined);
  async function fetchDogImage() {
    console.log("fetch");
    const res = await fetch("https://dog.ceo/api/breeds/image/random");
    const data = await res.json();
    // console.log(data);
    setImage(data.message);
  }
  // useEffect с пустым массивом зависимостей срабатывает
  // только при mount
  useEffect(() => {
    console.log("Только при первом рендере");
  }, []);

  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect 
    fetchDogImage();
  }, []);

  return (
    <div>
      <h2>Random Dog</h2>
      <img src={image} alt="dog" />
    </div>
  );
}

// Component life-cycle:  mount -> update -> unmount
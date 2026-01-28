import "./App.css";
import Counter from "./components/Counter/Counter";
import Goodbye from "./components/Goodbye/Goodbye";
import Greetings from "./components/Greatings/Greatings";
import IdealWeightCalculator from "./components/IdealWeightCalculator/IdealWeightCalculator";
import ProfileCard from "./components/ProfileCard/ProfileCard";
import SpaceMissionForm from "./components/SpaceMissionForm/SpaceMissionForm";
import Tool from "./components/Tool/Tool";


function App() {
  return (
    <>
      <p className="heading">Hello, World!</p>
      {/* props */}
      {/* <Greetings name="Alisher" />
      <Greetings name="Vadim" /> */}
      <Tool />
      <Greetings name="User" />
      <Counter />
      <Counter />
      <Goodbye familyName="User" score={90} />
      {/* score опционально может быть или нет */}
      <Goodbye familyName="User" /> 

      <ProfileCard avatar="https://cs2.livemaster.ru/storage/7c/77/ef99ee5859a22fc21bfbddafbah8--kukly-i-igrushki-koshechka-puteshestvennitsa.jpg
      " name="Ket" description="Кошечка-путешественница" />
      <IdealWeightCalculator />
      <SpaceMissionForm />



    </>
  );
}
  
export default App;

// Задание
// Создайте компонент Goodbye
// компонент должен возвращать параграф с текстом Goodbye, <family_name>

// соответственно у компонента должен быть пропс familyName
// Создайте два элемента с разными фамилиями

// дополнительно добавьте score - числовой пропс
// Goodbye, John, your score is 97
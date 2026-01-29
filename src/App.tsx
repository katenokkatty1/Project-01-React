import { BrowserRouter, Route, Routes } from "react-router-dom";
import Counter from "./components/Counter/Counter";
import GenderReveal from "./components/GenderReveal/GenderReveal";
import IdealWeightCalculator from "./components/IdealWeightCalculator/IdealWeightCalculator";
import NationalReveal from "./components/NationalReveal/NationalReveal";
import ProfileCard from "./components/ProfileCard/ProfileCard";
import RandomDog from "./components/RandomDog/RandomDog";
import SpaceMissionForm from "./components/SpaceMissionForm/SpaceMissionForm";
import Home from "./pages/Home/Home";
import NotFound from "./pages/NotFound/NotFound";
import Layout from "./layouts/layout";
import About from "./pages/About/About";
import Contact from "./pages/Contact/Contact";
import ProfileLayout from "./layouts/ProfileLayout";
import ProfileData from "./pages/ProfileData/ProfileData";
import Profile from "./pages/Profile/Profile";
import Settings from "./pages/Settings/Settings";
import ProductPage from "./pages/ProductPage/ProductsPage";
import ProductList from "./components/ProductList/ProductList";
import CarPage from "./pages/CarPage/CarPage";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            {" "}
            // Общий лэйаут (макет)для всех страниц
            <Route path="/" element={<Home />} />
            {/* или  <Route index element={<Home />} /> - index означает домашнюю страничку*/}
            <Route path="/gender-reveal" element={<GenderReveal />} />
            <Route path="/counter" element={<Counter />} />
            <Route
              path="/ideal-weight-calculator"
              element={<IdealWeightCalculator />}
            />
            <Route path="/space-mission-form" element={<SpaceMissionForm />} />
            <Route path="/random-dog" element={<RandomDog />} />
            <Route path="/national-reveal" element={<NationalReveal />} />
            <Route
              path="/profile-card"
              element={
                <ProfileCard
                  avatar="https://cs2.livemaster.ru/storage/7c/77/ef99ee5859a22fc21bfbddafbah8--kukly-i-igrushki-koshechka-puteshestvennitsa.jpg
            "
                  name="Ket"
                  description="Кошечка-путешественница"
                />
              }
            />
            <Route path="/about" element={<About />} />
            <Route path="/profile" element={<ProfileLayout />}>
              <Route path="/profile" element={<Profile />} />
              <Route path="/profile/data" element={<ProfileData />} />
              <Route path="/profile/settings" element={<Settings />} />
            </Route>
            <Route path="/contact" element={<Contact />} />
            <Route path="*" element={<NotFound />} />
            <Route path="/products/:id" element={<ProductPage />}></Route>
            <Route path="/products/" element={<ProductList />}></Route>
            <Route path="/cars/:model" element={<CarPage />}></Route>
          </Route>

        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;

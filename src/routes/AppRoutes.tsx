import { Routes, Route } from "react-router-dom";
import Counter from "../components/Counter/Counter";
import GenderReveal from "../components/GenderReveal/GenderReveal";
import IdealWeightCalculator from "../components/IdealWeightCalculator/IdealWeightCalculator";
import SpaceMissionForm from "../components/SpaceMissionForm/SpaceMissionForm";
import ProfileLayout from "../layouts/ProfileLayout";
import About from "../pages/About/About";
import CarPage from "../pages/CarPage/CarPage";
import Home from "../pages/Home/Home";
import NotFound from "../pages/NotFound/NotFound";
import Profile from "../pages/Profile/Profile";
import ProfileData from "../pages/ProfileData/ProfileData";
import Settings from "../pages/Settings/Settings";
import UsersPage from "../pages/UsersPage/UsersPage";
import NationalReveal from "../components/NationalReveal/NationalReveal";
import Contact from "../pages/Contact/Contact";
import ProfileCard from "../components/ProfileCard/ProfileCard";
import RandomDog from "../components/RandomDog/RandomDog";
import Layout from "../layouts/layout";
import ProductPage from "../pages/ProductPage/ProductsPage";
import { ROUTES as R } from "../share/routes";
import ProductList from "../components/ProductList/ProductList";
import UserPage from "../pages/UserPage/UserPage";
import Signup from "../pages/Signup/Signup";
import Signin from "../pages/Signin/Signin";

export default function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        {" "}
        {/* // Общий лэйаут (макет)для всех страниц */}
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
        <Route path={R.ABOUT} element={<About />} />
        <Route path={R.PROFILE} element={<ProfileLayout />}>
          <Route path={R.PROFILE} element={<Profile />} />
          <Route path={R.PROFILE_DATA} element={<ProfileData />} />
          <Route path={R.PROFILE_SETTINGS} element={<Settings />} />
        </Route>
        <Route path={R.CONTACTS} element={<Contact />} />
        <Route path={R.NOT_FOUND} element={<NotFound />} />
        <Route path={R.PRODUCTS} element={<ProductList />} />

        <Route path={R.PRODUCT(":id")} element={<ProductPage />}></Route>
        <Route path={R.USER(":id")} element={<UserPage />}></Route>
        <Route path={R.CAR(":model")} element={<CarPage />}></Route>
        <Route path={R.USERS} element={<UsersPage />}></Route>
        <Route path={R.SIGNUP} element={<Signup />}></Route>
        <Route path={R.SIGNIN} element={<Signin />}></Route>

      </Route>
    </Routes>
  );
}

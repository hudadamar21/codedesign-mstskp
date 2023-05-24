import AlternativeSection from "./components/sections/AlternativeSection";
import FeaturesSection from "./components/sections/FeaturesSection";
import ReasonSection from "./components/sections/ReasonSection";
import TopSection from "./components/sections/TopSection";
import MainLayout from "./layouts/MainLayout";

function App() {
  return (
    <MainLayout>
      <TopSection />
      <FeaturesSection />
      <ReasonSection />
      <AlternativeSection />
    </MainLayout>
  );
}

export default App;

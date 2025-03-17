import Container from "@/components/Container/Container";
import Header from "@/components/Header/Header";
import AdsMain from "@/components/Ads/AdsMain";
import Head from "next/head";
import PickMain from "@/components/Pick-Off/PickMain";
import CollectionCarsMain from "@/components/CollectionCars/CollectionCarsMain";
import Footer from "@/components/Footer/Footer";

const App = () => {
  return (
    <>
      <Container>
        <Header />

        <AdsMain />
        <PickMain />
        <CollectionCarsMain />
        <Footer />
      </Container>
    </>
  );
};

export default App;

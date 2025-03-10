import Container from "@/components/Container/Container";
import Header from "@/components/Header/Header";
import AdsMain from "@/components/Ads/AdsMain";
import Head from "next/head";
import PickMain from "@/components/Pick-Off/PickMain";
import CollectionCars from "@/components/CollectionCars/CollectionCars";

const App = () => {
  return (
    <>
      <Container>
        <Header />

        <AdsMain />
        <PickMain />
        <CollectionCars />
      </Container>
    </>
  );
};

export default App;

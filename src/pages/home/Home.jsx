import { Helmet } from "react-helmet-async";
import Banner from "./banner/Banner";
import Features from "./features/Features";
import TopDeliveryMan from "./topDeliveryMan/TopDeliveryMan";
import Footer from "./footer/Footer";

const Home = () => {
    return (
        <div>
            <Helmet>
                <title>Home || Ship Ninja</title>
            </Helmet>
            <Banner></Banner>
            <Features></Features>
            <TopDeliveryMan></TopDeliveryMan>
            <Footer></Footer>
        </div>
    );
};

export default Home;
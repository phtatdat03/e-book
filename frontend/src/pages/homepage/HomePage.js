import React from "react";
import ShowCase from "../../components/layouts/showcase/showcase";
import ProductList from "../../components/layouts/productList/productList";
import Footer from "../../components/layouts/footer/Footer";

const HomePage = () => {
    return (
        <section>
            <ShowCase />
            <ProductList />
            <Footer />
        </section>
    )
}

export default HomePage;
import "react-multi-carousel/lib/styles.css";
import ProductCard from "./ProductCard";

const Tvhome = () => {
  console.log(products);

  const product =
    products &&
    products.map((item, i) => (
      <ProductCard
        key={i}
        name={item.productName}
        image={item.productImage}
        param={item.param}
        prod={item}
        description={item.description}
      />
    ));

  return <div></div>;
};

export default Tvhome;

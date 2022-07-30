import { useContext } from "react";

import "./shop.styles.scss";

import { CategoriesContext } from "../../contexts/categories.context";
import CategoryPreview from "../../components/categories-preview/categories-preview.component";

const Shop = () => {
  const { categoriesMap } = useContext(CategoriesContext);
  return (
    <div className="shop-container">
      {Object.keys(categoriesMap).map((title) => {
        const products = categoriesMap[title];
        return (
          <CategoryPreview key={title} title={title} products={products} />
        );
      })}
    </div>
  );
};

export default Shop;

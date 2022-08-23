import { useState, useEffect, Fragment } from "react";
import { useParams } from "react-router-dom";
import { gql, useQuery } from "@apollo/client";

import ProductCard from "../../components/product-card/product-card.component";
import Spinner from "../../components/spinner/spinner.component";

import { CategoryTitle, CategoryContainer } from "./category.styles";

const GET_CATEGORY = gql`
  query ($title: String!) {
    getCollectionsByTItle(title: $title) {
      id
      title
      items {
        id
        name
        price
        imageUrl
      }
    }
  }
`;

const Category = () => {
  const { category } = useParams();

  const { loading, error, data } = useQuery(GET_CATEGORY, {
    variables: {
      title: category,
    },
  });

  useEffect(() => {
    if (data) {
      const {
        getCollectionsByTitle: { items },
      } = data;

      setProducts(items);
    }
  }, [category, data]);

  const [products, setProducts] = useState([]);

  return (
    <Fragment>
      {loading ? (
        <Spinner />
      ) : (
        <Fragment>
          <CategoryTitle>{category.toUpperCase()}</CategoryTitle>
          <CategoryContainer>
            {products &&
              products.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
          </CategoryContainer>
        </Fragment>
      )}
    </Fragment>
  );
};

export default Category;

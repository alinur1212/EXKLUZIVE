import React, { useEffect} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Banner from '../components/banner/banner.jsx';
import ProductList from '../components/ProductList/ProductList.jsx';
import { getProduct } from '../redux/product/productSlice';

function Home() {
  const dispatch = useDispatch();
  const { products, loading, error, categoryList, search } = useSelector((state) => state.products);

  useEffect(() => {
    dispatch(getProduct({category: categoryList, search}));
  }, [categoryList, search])

  return (
    <div>
      <Banner/>
       <ProductList data={products} />
    </div>
  );
}

export default Home
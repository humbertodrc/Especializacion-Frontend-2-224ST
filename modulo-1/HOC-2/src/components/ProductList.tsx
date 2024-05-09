// import { useEffect, useState } from 'react';
import { getHouses } from '../service';
import { Home } from '../types';
import { ProductItem } from './ProductItem';
import { ProductGrid } from './ProductGrid';
import { WithLoader } from "../hoc/WithLoader";

interface ProductListProps {
  data: Home[]
}

const ProductList = ({data}: ProductListProps) => {

  if (!data) return null;

  return (
    <ProductGrid>
    {data.map((home: Home) => (
      <ProductItem key={home.id} home={home} />
    ))}
  </ProductGrid>
  )
}

const ProductListHOC = WithLoader(ProductList, getHouses, 'https://house-lydiahallie.vercel.app/api/listings')

export default ProductListHOC;
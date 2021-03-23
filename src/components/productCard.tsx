import React from 'react';
import Link from 'next/link';
import { Product } from 'type/types';

type Props = {
  product?: Product;
};

const ProductCard = ({ product }: Props) => {
  const imgUrl = String(product.image).replace('fakestoreapi.com','fakestoreapi.herokuapp.com');
  return (
    <Link href={`/product/${product.id}`}>
      <a className="card shadow-sm">
        <img className="card-img-top" src={imgUrl} alt={product.title} />
        <div className="card-body">
          <h5 className="card-title">{product.title}</h5>
        </div>
      </a>
    </Link>
  );
};

export default ProductCard;

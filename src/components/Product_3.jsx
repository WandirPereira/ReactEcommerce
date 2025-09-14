const Product_3 = ({ product }) => {
  return (
    <div className="card" key={product.code}>
      <img src={product.img} alt="apple" witdth={120} height={120} />
      <span>{product.code}</span>
      <span>{product.name}</span>
      <span>${product.price}</span>
    </div>
  );
};
export default Product_3;

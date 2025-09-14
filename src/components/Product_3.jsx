const Product_3 = ({ product }) => {
  // if (product.isActive) {
  //   return (
  //     <div className="card" key={product.code}>
  //       <img src={product.img} alt="apple" witdth={120} height={120} />
  //       <span>{product.code}</span>
  //       <span>{product.name}</span>
  //       <span>${product.price}</span>
  //       <span>{product.isActive.toString()}</span>
  //     </div>
  //   );  // }
  // return null;

  // return product.isActive ? (
  //   <div className="card">
  //     <img src={product.img} alt="apple" witdth={120} height={120} />
  //     <span>{product.code}</span>
  //     <span>{product.name}</span>
  //     <span>${product.price}</span>
  //     <span>{product.isActive.toString()}</span>
  //   </div>
  // ) : null;

  return (
    product.isActive && (
      <div className="card">
        <img src={product.img} alt="apple" witdth={120} height={120} />
        <span>{product.code}</span>
        <span>{product.name}</span>
        <span>${product.price}</span>
        <span>{product.isActive.toString()}</span>
      </div>
    )
  );
};
export default Product_3;

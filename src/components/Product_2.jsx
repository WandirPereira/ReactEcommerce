const Product_2 = ({ products }) => {
  // const products = [
  //   {
  //     name: "Apple",
  //     img: "/apple.png",
  //     code: "0001",
  //     price: 12,
  //   },
  //   {
  //     name: "Banana",
  //     img: "/banana2.png",
  //     code: "0002",
  //     price: 5,
  //   },
  //   {
  //     name: "Orange",
  //     img: "/orange.png",
  //     code: "0003",
  //     price: 8,
  //   },
  // ];

  return products.map((product) => (
    <div className="card" key={product.code}>
      <img src={product.img} alt="apple" witdth={120} height={120} />
      <span>{product.code}</span>
      <span>{product.name}</span>
      <span>${product.price}</span>
    </div>
  ));
};
export default Product_2;

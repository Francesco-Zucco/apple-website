import { useDispatch, useSelector } from "react-redux";
// import { useFetchProducts } from "./useFetchProducts";
// import CartItem from "./CartItem";
import { removeItem, add, subtract } from "../store/cart";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";

const Cart = () => {
  // const [collapse, setCollapse] = useState(false);

  const carts = useSelector((store) => store.cart.items);
  const [totalPrice, setTotalPrice] = useState();
  //   const { products } = useFetchProducts();
  const dispatch = useDispatch();

  // useEffect(() => {
  //   handleResize();
  //   window.addEventListener("resize", handleResize);
  // }, []);

  // const handleResize = () => {
  //   if (window.innerWidth > 834) {
  //     setCollapse(false);
  //     setShowNavBar(false);
  //   } else {
  //     setCollapse(true);
  //   }
  // };

  useEffect(() => {
    let total = 0;
    carts.forEach((item) => (total += item.quantity * item.prod.price));
    setTotalPrice(total);
    console.log(carts);
  }, [carts]);

  const deleteFromCart = (item) => {
    dispatch(removeItem(item));
    // console.log(item);
  };

  // const clearCartItems = () => {
  //   dispatch(clearCart());
  // };

  const incrementQuantity = (prod) => {
    dispatch(
      add({
        productId: prod.id,
      })
    );
  };

  const decrementQuantity = (prod) => {
    dispatch(
      subtract({
        productId: prod.id,
      })
    );
  };

  return (
    <div className="flex flex-col items-center bg-white w-full">
      {totalPrice ? (
        <div className="w-">
          <div className="flex flex-col w-full justify-center gap-5 h-[200px] items-center ">
            <h1 className="text-[40px] text-center leading-[30px] ">
              <b>Review your bag.</b>
            </h1>
            <h1 className="text-[17px] ">Free delivery and free returns.</h1>
          </div>
        </div>
      ) : (
        <div className="flex flex-col w-full justify-center gap-5 h-[300px] items-center border-b-[1px] border-b-[#d2d2d7]">
          <div className="text-[35px] w-auto leading-[40px] text-center flex flex-col items-center">
            <h1>
              <b>Your bag is empty.</b>
            </h1>
            <h1 className="text-[17px] ">
              You can continue shopping by pressing the button bellow.
            </h1>
            <div className="flex gap-3">
              {/* <button className="text-[17px] text-[#fafafc] border-[#0071e3] hover:bg-[#0077ED] flex justify-center items-center bg-[#0071e3] border w-[360px] h-[56px] mt-6 rounded-[13px]">
                Sign In
              </button> */}
              <Link to={"/store"}>
                <button className="text-[17px] text-[#0071e3] hover:text-white bg-white border-[#0071e3] hover:bg-[#0071e3] flex justify-center items-center  border w-[260px] h-[56px] mt-6 rounded-[13px]">
                  Continue Shopping
                </button>
              </Link>
            </div>
          </div>
        </div>
      )}
      {carts &&
        carts.map((item, key) => {
          return (
            <div
              className={
                item.quantity >= 1 ? "w-full flex justify-center" : "hidden"
              }
              key={key}
            >
              <div className="w-[1024px]">
                <div className="flex flex-col w-full h-auto  ">
                  <div className="border-b-[1px] pt-3 pb-5 pl-5 flex items-center justify-between border-gray-300 w-full pl- pr-5">
                    <div className="flex w-auto h-auto select-none">
                      <Link to={item.prod.route}>
                        <img
                          className="h-auto w-[180px] object-cover"
                          src={item.prod.productImage}
                          alt=""
                        />
                      </Link>
                    </div>
                    <div className="flex justify-between w-full pl-2 pb-[45px]">
                      <div>
                        <h2 className=" lg:text-[24px] md:text-[21px]  sm:text-[19px]  select-none">
                          <Link to={item.prod.route}>
                            <b className="hover:text-[#1d76cf]">
                              {item.prod.productName}
                            </b>
                          </Link>
                          <div className="flex items-center">
                            {/* <p className=" lg:text-[24px] md:text-[21px] sm:text-[19px]">
                              Quantity:
                            </p> */}
                            <button
                              onClick={() => decrementQuantity(item.prod)}
                              className="rounded-[900px] h-[19px] w-[19px] border-[2px] active:bg-[#cacaca] bg-[#e8e8e8] border-[#a5a5a7] flex justify-center items-center text-[#59595a]"
                            >
                              <p className="pb-[2px]">-</p>
                            </button>
                            <p>
                              {" "}
                              <b className="px-[3px]">{item.quantity}</b>
                            </p>
                            <button
                              onClick={() => incrementQuantity(item.prod)}
                              className="rounded-[900px] h-[19px] w-[19px] border-[2px] active:bg-[#cacaca] bg-[#e8e8e8] border-[#a5a5a7] flex justify-center items-center text-[#59595a]"
                            >
                              <p className="pt-[1px] text-[15px]">+</p>
                            </button>
                            {/* <button onClick={() => clearCartItems()}>
                              DELETE CART
                            </button> */}
                          </div>
                        </h2>
                      </div>
                      <div className="flex flex-col">
                        <p className="lg:text-[24px] md:text-[21px] sm:text-[18px] text-end">
                          <b>${item.quantity * item.prod.price}.00</b>
                        </p>
                        <button
                          className="lg:text-[19px] md:text-[18px] sm:text-[17px] active:text-[#1d76cf]  text-[#0066cc] text-end"
                          onClick={() => deleteFromCart(item)}
                        >
                          Remove
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      {totalPrice ? (
        <div className="w-full flex justify-center">
          <div className="w-[1024px] m-10">
            <div className="flex justify-between mt-[60px] pb-4   border-b-[1px] border-b-[#d2d2d7] ">
              <div className="flex flex-col gap-2 mr-[20px]">
                <p className="pl-2">Subtotal</p>
                <p className="pl-2">Shipping</p>
              </div>
              <div className="place-items-end flex flex-col gap-2">
                <p className="text-end pr-2">${totalPrice}.00</p>
                <p className="text-end pr-2">FREE</p>
              </div>
            </div>
            <div className="flex justify-between mt-[20px]  ">
              <div>
                <p className=" text-[24px]">
                  <b className="pl-2">Total</b>
                </p>
              </div>
              <div className="place-items-end flex flex-col gap-3">
                <div className="text-end ">
                  <p className="text-[24px] pr-2">
                    <b>${totalPrice}.00</b>
                  </p>
                  <p className="text-[#06c] pr-2">
                    {" "}
                    Get 3% Daily Cash with Apple Card
                  </p>
                </div>
                <button className="text-[17px] select-none text-[#fafafc] border-[#0071e3] hover:bg-[#0077ED] flex justify-center items-center bg-[#0071e3] border w-[280px] h-[56px] mt-6 rounded-[13px]">
                  Check Out
                </button>
              </div>
            </div>
          </div>
        </div>
      ) : (
        ""
      )}
    </div>
  );
};

export default Cart;

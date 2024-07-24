import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { clearCart } from "../store/cart";
import { Link } from "react-router-dom";

const Checkout = () => {
  const dispatch = useDispatch();
  const carts = useSelector((store) => store.cart.items);
  const [totalPrice, setTotalPrice] = useState();
  useEffect(() => {
    let total = 0;
    carts.forEach((item) => (total += item.quantity * item.prod.price));
    setTotalPrice(total);
    console.log(carts);
  }, [carts]);

  const clearCartItems = () => {
    dispatch(clearCart());
  };

  const [pageWidth, setPageWidth] = useState();
  const handleResize = () => {
    if (window.innerWidth > 834) {
      setPageWidth(false);
    } else {
      setPageWidth(true);
    }
  };

  useEffect(() => {
    handleResize();
    window.addEventListener("resize", handleResize);
  }, []);

  return (
    <>
      {pageWidth ? (
        // Mobile version
        <div className="w-full bg-white flex justify-center">
          <div className="w-[1024px] ml-[14px] mr-[14px] pt-[14px]">
            <div className="w-full border-b-[1px] border-[#d2d2d7] flex justify-between">
              <div className="text-[24px] flex items-center pb-2">
                <p>Checkout</p>
              </div>
              <p className="flex items-center text-[#1d76cf]">
                Order Summary: ${totalPrice}.00
              </p>
            </div>
            <div className="w-full flex flex-col justify-center">
              <div className="w-full pb-3 pt-3 flex justify-start">
                <p className="text-[24px]">
                  <b>In stock and ready to ship.</b>
                </p>
              </div>
              <div className="w-full h-auto grid grid-cols-2 gap-2 justify-center items-center pt-3">
                {carts &&
                  carts.map((item, key) => {
                    return (
                      <div
                        key={key}
                        className={
                          item.quantity >= 1
                            ? "w-full h-[100px flex "
                            : "hidden"
                        }
                      >
                        <img
                          className="w-[90px] h-auto object-fill"
                          src={item.prod.productImage}
                        />
                        <div className=" text-[14px] text-nowrap">
                          <p>{item.prod.productName}</p>
                          <p>Quantity: {item.quantity}</p>
                        </div>
                      </div>
                    );
                  })}
              </div>
              <div className="w-full flex justify-start pt-[30px]">
                <p className="text-[24px]">Delivery method:</p>
              </div>
              <div className="w-full flex-col justify-center pb-[40px] border-b-[1px] items-center border-[#d2d2d7]">
                <div className="w-full flex-col justify-center items-center">
                  <button className="border-[1px] flex justify-between items-center  focus:border-[2px] focus:border-[#06c] border-gray-600 w-[350px] h-[83px] rounded-[12px]">
                    <div className="pl-4 flex flex-col items-start">
                      <p>
                        <b>Delivers Tomorrow</b>
                      </p>
                      <p>Express Delivery</p>
                    </div>
                    <p className="pr-4">FREE</p>
                  </button>
                </div>
                <div className="flex flex-col justify-center pl-5 pt-5">
                  <p className="text-[15px]">
                    <b>Keep this in mind about your selection:</b>
                  </p>
                  <ul className="mt-1">
                    <li className="list-disc ms-[15px] text-[14px]">
                      The carrier may require a signature upon <br /> delivery.
                    </li>
                    <li className="list-disc ms-[15px] text-[14px] mt-1">
                      In-Transit Options: Once your order has <br /> been
                      shipped, you can use your tracking <br /> link to redirect
                      your shipment to a pickup <br /> point, hold it at a
                      secure location, or fill <br /> out a signature waiver or
                      shipment release.
                    </li>
                  </ul>
                  <p className="text-[#06c] text-[14px] mt-1">
                    View Apple Shipping Policy{" "}
                  </p>
                </div>
              </div>
              <div className="w-full pt-9 pb-[50px]">
                <Link to={"/cart/checkout/order-successful"}>
                  <button
                    onClick={() => clearCartItems()}
                    className="w-[250px] text-white bg-[#0071e3] rounded-[12px] h-[56px]"
                  >
                    Pay ${totalPrice}.00
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      ) : (
        // Desktop version
        <div className="w-full bg-white flex justify-center">
          <div className="w-[1024px] ml-[14px] mr-[14px] pt-[14px]">
            <div className="w-full border-b-[1px] border-[#d2d2d7] flex justify-between">
              <div className="text-[24px] flex items-center pb-2">
                <p>Checkout</p>
              </div>
              <p className="flex items-center text-[#1d76cf]">
                Order Summary: ${totalPrice}.00
              </p>
            </div>
            <div className="w-full flex flex-col justify-center">
              <div className="w-full pb-3 pt-3 flex justify-start">
                <p className="text-[24px]">
                  <b>In stock and ready to ship.</b>
                </p>
              </div>
              <div className="w-full h-auto grid grid-cols-3 gap-4 justify-center pt-3">
                {carts &&
                  carts.map((item, key) => {
                    return (
                      <div
                        key={key}
                        className={
                          item.quantity >= 1
                            ? "w-full h-[100px flex pl-3"
                            : "hidden"
                        }
                      >
                        <img
                          className="w-[90px] h-auto object-fill"
                          src={item.prod.productImage}
                        />
                        <div className="pl-3 text-[17px]">
                          <p>{item.prod.productName}</p>
                          <p>Quantity: {item.quantity}</p>
                        </div>
                      </div>
                    );
                  })}
              </div>
              <div className="w-full flex justify-start pt-[30px]">
                <p className="text-[24px]">Delivery method:</p>
              </div>
              <div className="w-full flex justify-start pb-[40px] border-b-[1px] border-[#d2d2d7]">
                <div className="w-[50%]">
                  <button
                    required
                    type="checkbox"
                    className="border-[1px] flex justify-between items-center peer appearance-none focus:border-[2px] focus:border-[#06c] border-gray-600 w-full h-[83px] rounded-[12px]"
                  >
                    <div className="pl-4 flex flex-col items-start">
                      <p>
                        <b>Delivers Tomorrow</b>
                      </p>
                      <p>Express Delivery</p>
                    </div>
                    <p className="pr-4">FREE</p>
                  </button>
                </div>
                <div className="flex flex-col justify-center pl-5">
                  <p className="text-[15px]">
                    <b>Keep this in mind about your selection:</b>
                  </p>
                  <ul className="mt-1">
                    <li className="list-disc ms-[15px] text-[14px]">
                      The carrier may require a signature upon delivery.
                    </li>
                    <li className="list-disc ms-[15px] text-[14px] mt-1">
                      In-Transit Options: Once your order has <br /> been
                      shipped, you can use your tracking <br /> link to redirect
                      your shipment to a pickup <br /> point, hold it at a
                      secure location, or fill out <br /> a signature waiver or
                      shipment release.
                    </li>
                  </ul>
                  <p className="text-[#06c] text-[14px] mt-1">
                    View Apple Shipping Policy{" "}
                  </p>
                </div>
              </div>
              <div className="w-full pt-9 pb-[50px]">
                <Link to={"/cart/checkout/order-successful"}>
                  <button
                    onClick={() => clearCartItems()}
                    className="w-[490px] text-white bg-[#0071e3] rounded-[12px] h-[56px]"
                  >
                    Pay ${totalPrice}.00
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Checkout;

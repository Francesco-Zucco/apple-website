import { useNavigate, useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import Carousel from "react-multi-carousel";

import { useDispatch } from "react-redux";
import { addToCart } from "../../store/cart";
import { useEffect, useState } from "react";

const WatchesDetails = () => {
  const dataBase = useSelector((store) => store.dataBase);
  const { param } = useParams();
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [responsivePhoto, setResponsivePhoto] = useState();

  useEffect(() => {
    changeBackgroundPhoto();
    window.addEventListener("resize", changeBackgroundPhoto);
  }, []);

  const changeBackgroundPhoto = () => {
    if (window.innerWidth > 734) {
      setResponsivePhoto(false);
    } else {
      setResponsivePhoto(true);
    }
  };

  const handleAddToCart = (result) => {
    dispatch(
      addToCart({
        productId: result.id,
        quantity: 1,
        prod: result,
      })
    );
  };

  const findMyProdDesktop = () => {
    // console.log("A");
    const result = dataBase[3].watches.find((p) => p.param === param);
    return (
      <div className="w-[1024px]  flex flex-col justify-center bg-white rounded-[20px] shadow-lg">
        <div className="w-full px-7 py-7 grid grid-cols-2 gap-[30px]">
          <div>
            <div className="w-full pb-4">
              <button
                onClick={() => navigate(-1)}
                className="bg-[#e8e8ed] active:bg-[#dedede] rounded-full	 h-[40px] w-[40px] flex justify-center items-center"
              >
                <svg
                  fill="#6e6e73"
                  width="21"
                  height="21"
                  role="img"
                  aria-hidden="true"
                >
                  <path fill="none" d="M0 0h21v21H0z"></path>
                  <path d="m12.12 10 4.07-4.06a1.5 1.5 0 1 0-2.11-2.12L10 7.88 5.94 3.81a1.5 1.5 0 1 0-2.12 2.12L7.88 10l-4.07 4.06a1.5 1.5 0 0 0 0 2.12 1.51 1.51 0 0 0 2.13 0L10 12.12l4.06 4.07a1.45 1.45 0 0 0 1.06.44 1.5 1.5 0 0 0 1.06-2.56Z"></path>
                </svg>
              </button>
            </div>
            <Carousel
              additionalTransfrom={0}
              arrows
              autoPlaySpeed={3000}
              centerMode={false}
              className=""
              containerClass="container "
              dotListClass=""
              draggable
              focusOnSelect={false}
              infinite={false}
              itemClass="m-0"
              keyBoardControl
              minimumTouchDrag={80}
              pauseOnHover
              renderArrowsWhenDisabled={false}
              renderButtonGroupOutside={false}
              renderDotsOutside={false}
              responsive={{
                superLargeDesktop: {
                  breakpoint: {
                    max: 3000,
                    min: 1534,
                  },
                  items: 1,
                  partialVisibilityGutter: 140,
                },
                bigDesktop: {
                  breakpoint: {
                    max: 1534,
                    min: 1279,
                  },
                  items: 1,
                  partialVisibilityGutter: 140,
                },
                desktop: {
                  breakpoint: {
                    max: 1279,
                    min: 1024,
                  },
                  items: 1,
                  partialVisibilityGutter: 140,
                },
                mobile: {
                  breakpoint: {
                    max: 464,
                    min: 0,
                  },
                  items: 1,
                  partialVisibilityGutter: 30,
                },
                tablet: {
                  breakpoint: {
                    max: 1024,
                    min: 615,
                  },
                  items: 1,
                  partialVisibilityGutter: 30,
                },
                smallTablet: {
                  breakpoint: {
                    max: 615,
                    min: 464,
                  },
                  items: 1,
                  partialVisibilityGutter: 30,
                },
              }}
              rewind={false}
              rewindWithAnimation={false}
              rtl={false}
              shouldResetAutoplay
              showDots={false}
              sliderClass=" flex m-0 bg-transparent  justify-between "
              slidesToSlide={1}
              swipeable
            >
              <img src={result.productImage1} alt="" />
              <img src={result.productImage2} alt="" />
              <img src={result.productImage3} alt="" />
              <img src={result.productImage4} alt="" />
            </Carousel>
          </div>
          <div className="pt-5">
            <h2 className="text-[32px]">
              <b>{result.productName}</b>
            </h2>
            <div className="flex w-full justify-between">
              <p className="pt-1">{result.description}</p>
              <button
                onClick={() => handleAddToCart(result)}
                className="h-[34px] pl-[14px] pr-[14px] pt-[5px] pb-[5px] hover:bg-[#0077ED] bg-[#0071e3] rounded-[980px] text-[#fafafc]"
              >
                Buy
              </button>
            </div>
            <div className="flex flex-col gap-3 pt-[30px] pb-8">
              <div className="border-b border-[#d2d2d7]">
                <p className="font-semibold pt-2 pb-2">{result.text1}</p>
              </div>
              <div className="border-b border-[#d2d2d7]">
                <p className="font-semibold pt-2 pb-2">{result.text2}</p>
              </div>
              <div className="border-b border-[#d2d2d7]">
                <p className="font-semibold pt-2 pb-2">{result.text3}</p>
              </div>
              <div className="border-b border-[#d2d2d7]">
                <p className="font-semibold pt-2 pb-2">{result.text4}</p>
              </div>
              <div>
                <p className="font-semibold pt-2 pb-2">{result.text5}</p>
              </div>
            </div>
          </div>
        </div>
        <div className="bg-[#f5f5f7] rounded-b-[20px] h-auto w-full grid grid-cols-3">
          <div className="flex justify-center pt-3 pb-4 px-2 gap-1">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-[25px] w-[25px]"
              viewBox="0 0 42 56"
              aria-hidden="true"
              role="img"
            >
              <path
                d="M37,12H5a5.006,5.006,0,0,0-5,5V39a5.006,5.006,0,0,0,5,5H37a5.006,5.006,0,0,0,5-5V17A5.006,5.006,0,0,0,37,12ZM5,14H37a3,3,0,0,1,3,3v3H2V17A3,3,0,0,1,5,14ZM37,42H5a3,3,0,0,1-3-3V24H40V39A3,3,0,0,1,37,42ZM6,33.5v-4A1.5,1.5,0,0,1,7.5,28h6A1.5,1.5,0,0,1,15,29.5v4A1.5,1.5,0,0,1,13.5,35h-6A1.5,1.5,0,0,1,6,33.5Z"
                fill="#6cca4e"
              ></path>
            </svg>
            <p className="text-[13px] leading-4 pt-[5px]">
              <b>Apple Card Monthly Installments</b> <br /> Pay over time,
              interest-free when you <br /> choose to check out with Apple Card{" "}
              <br />
              Monthly Installments.
            </p>
          </div>
          <div className="flex justify-center pt-3 gap-1 pb-4 px-2">
            <svg
              viewBox="0 0 43 56"
              className="h-[25px]"
              xmlns="http://www.w3.org/2000/svg"
              aria-hidden="true"
              role="img"
            >
              <path d="m0 0h43v56h-43z" fill="none"></path>
              <path
                d="m38.5 27a.99974.99974 0 0 0 -1 1v11a5.00588 5.00588 0 0 1 -5 5h-22a5.00588 5.00588 0 0 1 -5-5v-3.83594l1.543 1.543a.99989.99989 0 1 0 1.414-1.41406l-3.25-3.25a.99962.99962 0 0 0 -1.41406 0l-3.25 3.25a.99989.99989 0 1 0 1.41406 1.414l1.543-1.543v3.836a7.00818 7.00818 0 0 0 7 7h22a7.00818 7.00818 0 0 0 7-7v-11a.99974.99974 0 0 0 -1-1z"
                fill="#ab45fb"
              ></path>
              <path
                d="m28.17188 32.71533a.31074.31074 0 0 0 -.35157.35156q0 .334.35157.334h2.62792a.29915.29915 0 0 0 .34278-.334.30692.30692 0 0 0 -.34278-.35156z"
                fill="#ab45fb"
              ></path>
              <path
                d="m30.60156 21.32031a1.92007 1.92007 0 0 0 -1.40136-.47021h-15.75a1.94085 1.94085 0 0 0 -1.376.47021 1.81128 1.81128 0 0 0 -.50488 1.39307v10.43262h-.92481a.95033.95033 0 0 0 -.70312.29443 1.00858 1.00858 0 0 0 0 1.41553.9536.9536 0 0 0 .70312.29394h20.74416a1.96828 1.96828 0 0 0 1.415-.51855 1.78331 1.78331 0 0 0 .54492-1.35352v-8.376a1.78328 1.78328 0 0 0 -.54492-1.35352 1.96828 1.96828 0 0 0 -1.415-.51855h-.30762v-.31641a1.8689 1.8689 0 0 0 -.47949-1.39304zm-4.99609 3.58155v8.24414h-12.62109v-10.03711a.74576.74576 0 0 1 .84374-.84375h14.99415a.85949.85949 0 0 1 .63281.21093.827.827 0 0 1 .19971.55372h-2.08936a1.96828 1.96828 0 0 0 -1.415.51855 1.78328 1.78328 0 0 0 -.54496 1.35352zm5.53711-.334v-.35156h.09668a.94481.94481 0 0 1 .67676.23291.83527.83527 0 0 1 .24609.63721v8.00683a.83528.83528 0 0 1 -.24609.63721.94481.94481 0 0 1 -.67676.23291h-3.51563a.95761.95761 0 0 1 -.68554-.23291.83525.83525 0 0 1 -.2461-.63721v-8.00682a.83524.83524 0 0 1 .2461-.63721.95761.95761 0 0 1 .68554-.23291h.09668v.35156a.52959.52959 0 0 0 .14063.37793.48342.48342 0 0 0 .36914.14941h2.30273a.48342.48342 0 0 0 .36914-.14941.52959.52959 0 0 0 .14063-.37793z"
                fill="#ab45fb"
              ></path>
              <path
                d="m42.457 19.293a.99962.99962 0 0 0 -1.41406 0l-1.543 1.543v-3.836a7.00818 7.00818 0 0 0 -7-7h-22a7.00818 7.00818 0 0 0 -7 7v11a1 1 0 0 0 2 0v-11a5.00588 5.00588 0 0 1 5-5h22a5.00588 5.00588 0 0 1 5 5v3.83594l-1.543-1.543a.99989.99989 0 0 0 -1.41394 1.41406l3.25 3.25a.99963.99963 0 0 0 1.41406 0l3.25-3.25a.99962.99962 0 0 0 -.00006-1.414z"
                fill="#ab45fb"
              ></path>
            </svg>
            <p className="text-[13px] leading-4 pt-[5px]">
              <b>Trade in for credit</b> <br />
              Get credit toward your purchase when you <br /> trade in an
              eligible iPhone.
            </p>
          </div>
          <div className="flex justify-center pt-3 gap-1 pb-4 px-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-[25px] w-[25px]"
              viewBox="0 0 42 56"
              aria-hidden="true"
              role="img"
            >
              <path
                d="M37,12H5a5.006,5.006,0,0,0-5,5V39a5.006,5.006,0,0,0,5,5H37a5.006,5.006,0,0,0,5-5V17A5.006,5.006,0,0,0,37,12ZM5,14H37a3,3,0,0,1,3,3v3H2V17A3,3,0,0,1,5,14ZM37,42H5a3,3,0,0,1-3-3V24H40V39A3,3,0,0,1,37,42ZM6,33.5v-4A1.5,1.5,0,0,1,7.5,28h6A1.5,1.5,0,0,1,15,29.5v4A1.5,1.5,0,0,1,13.5,35h-6A1.5,1.5,0,0,1,6,33.5Z"
                fill="#6cca4e"
              ></path>
            </svg>
            <p className="text-[13px] leading-4 pt-[5px]">
              <b>Get a sweet carrier deal at Apple</b> <br /> Save even more on
              your new iPhone when <br /> you finance with select carrier deals.
            </p>
          </div>
        </div>
      </div>
    );
  };

  const findMyProdMobile = () => {
    // console.log("A");
    const result = dataBase[3].watches.find((p) => p.param === param);
    return (
      <div className="w-full  flex flex-col justify-center bg-white rounded-[20px] shadow-lg">
        <div className="w-full px-7 py-7 gap-[30px]">
          <div className="w-full flex justify-end">
            <button
              onClick={() => navigate(-1)}
              className="bg-[#e8e8ed] active:bg-[#dedede] rounded-full	 h-[40px] w-[40px] flex justify-center items-center"
            >
              <svg
                fill="#6e6e73"
                width="21"
                height="21"
                role="img"
                aria-hidden="true"
              >
                <path fill="none" d="M0 0h21v21H0z"></path>
                <path d="m12.12 10 4.07-4.06a1.5 1.5 0 1 0-2.11-2.12L10 7.88 5.94 3.81a1.5 1.5 0 1 0-2.12 2.12L7.88 10l-4.07 4.06a1.5 1.5 0 0 0 0 2.12 1.51 1.51 0 0 0 2.13 0L10 12.12l4.06 4.07a1.45 1.45 0 0 0 1.06.44 1.5 1.5 0 0 0 1.06-2.56Z"></path>
              </svg>
            </button>
          </div>
          <div className="flex flex-col items-center justify-center pb-6">
            <h2 className="text-[28px]">
              <b>{result.productName}</b>
            </h2>
            <p className="pt-1 pb-2">{result.description}</p>
            <button
              onClick={() => handleAddToCart(result)}
              className="h-[34px] pl-[14px] pr-[14px] pt-[5px] pb-[5px] hover:bg-[#0077ED] bg-[#0071e3] rounded-[980px] text-[#fafafc]"
            >
              Buy
            </button>
          </div>
          <Carousel
            additionalTransfrom={0}
            arrows
            autoPlaySpeed={3000}
            centerMode={false}
            className=""
            containerClass="container "
            dotListClass=""
            draggable
            focusOnSelect={false}
            infinite={false}
            itemClass="m-0"
            keyBoardControl
            minimumTouchDrag={80}
            pauseOnHover
            renderArrowsWhenDisabled={false}
            renderButtonGroupOutside={false}
            renderDotsOutside={false}
            responsive={{
              superLargeDesktop: {
                breakpoint: {
                  max: 3000,
                  min: 1534,
                },
                items: 1,
                partialVisibilityGutter: 140,
              },
              bigDesktop: {
                breakpoint: {
                  max: 1534,
                  min: 1279,
                },
                items: 1,
                partialVisibilityGutter: 140,
              },
              desktop: {
                breakpoint: {
                  max: 1279,
                  min: 1024,
                },
                items: 1,
                partialVisibilityGutter: 140,
              },
              mobile: {
                breakpoint: {
                  max: 464,
                  min: 0,
                },
                items: 1,
                partialVisibilityGutter: 30,
              },
              tablet: {
                breakpoint: {
                  max: 1024,
                  min: 615,
                },
                items: 1,
                partialVisibilityGutter: 30,
              },
              smallTablet: {
                breakpoint: {
                  max: 615,
                  min: 464,
                },
                items: 1,
                partialVisibilityGutter: 30,
              },
            }}
            rewind={false}
            rewindWithAnimation={false}
            rtl={false}
            shouldResetAutoplay
            showDots={false}
            sliderClass=" flex m-0 bg-transparent  justify-between "
            slidesToSlide={1}
            swipeable
          >
            <img src={result.productImage1} alt="" />
            <img src={result.productImage2} alt="" />
            <img src={result.productImage3} alt="" />
            <img src={result.productImage4} alt="" />
          </Carousel>

          <div className="flex flex-col gap-3 pt-[30px]">
            <div className="border-b border-[#d2d2d7]">
              <p className="font-semibold pt-2 pb-2">{result.text1}</p>
            </div>
            <div className="border-b border-[#d2d2d7]">
              <p className="font-semibold pt-2 pb-2">{result.text2}</p>
            </div>
            <div className="border-b border-[#d2d2d7]">
              <p className="font-semibold pt-2 pb-2">{result.text3}</p>
            </div>
            <div className="border-b border-[#d2d2d7]">
              <p className="font-semibold pt-2 pb-2">{result.text4}</p>
            </div>
            <div>
              <p className="font-semibold pt-2 pb-2">{result.text5}</p>
            </div>
          </div>
        </div>
        <div className="bg-[#f5f5f7] rounded-b-[20px] h-auto w-full grid grid-cols-3">
          <div className="flex justify-center pt-3 pb-4 px-2 gap-1">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-[25px] w-[25px]"
              viewBox="0 0 42 56"
              aria-hidden="true"
              role="img"
            >
              <path
                d="M37,12H5a5.006,5.006,0,0,0-5,5V39a5.006,5.006,0,0,0,5,5H37a5.006,5.006,0,0,0,5-5V17A5.006,5.006,0,0,0,37,12ZM5,14H37a3,3,0,0,1,3,3v3H2V17A3,3,0,0,1,5,14ZM37,42H5a3,3,0,0,1-3-3V24H40V39A3,3,0,0,1,37,42ZM6,33.5v-4A1.5,1.5,0,0,1,7.5,28h6A1.5,1.5,0,0,1,15,29.5v4A1.5,1.5,0,0,1,13.5,35h-6A1.5,1.5,0,0,1,6,33.5Z"
                fill="#6cca4e"
              ></path>
            </svg>
            <p className="text-[13px] leading-4 pt-[5px]">
              <b>Apple Card Monthly Installments</b> <br /> Pay over time,
              interest-free when you <br /> choose to check out with Apple Card{" "}
              <br />
              Monthly Installments.
            </p>
          </div>
          <div className="flex justify-center pt-3 gap-1 pb-4 px-2">
            <svg
              viewBox="0 0 43 56"
              className="h-[25px]"
              xmlns="http://www.w3.org/2000/svg"
              aria-hidden="true"
              role="img"
            >
              <path d="m0 0h43v56h-43z" fill="none"></path>
              <path
                d="m38.5 27a.99974.99974 0 0 0 -1 1v11a5.00588 5.00588 0 0 1 -5 5h-22a5.00588 5.00588 0 0 1 -5-5v-3.83594l1.543 1.543a.99989.99989 0 1 0 1.414-1.41406l-3.25-3.25a.99962.99962 0 0 0 -1.41406 0l-3.25 3.25a.99989.99989 0 1 0 1.41406 1.414l1.543-1.543v3.836a7.00818 7.00818 0 0 0 7 7h22a7.00818 7.00818 0 0 0 7-7v-11a.99974.99974 0 0 0 -1-1z"
                fill="#ab45fb"
              ></path>
              <path
                d="m28.17188 32.71533a.31074.31074 0 0 0 -.35157.35156q0 .334.35157.334h2.62792a.29915.29915 0 0 0 .34278-.334.30692.30692 0 0 0 -.34278-.35156z"
                fill="#ab45fb"
              ></path>
              <path
                d="m30.60156 21.32031a1.92007 1.92007 0 0 0 -1.40136-.47021h-15.75a1.94085 1.94085 0 0 0 -1.376.47021 1.81128 1.81128 0 0 0 -.50488 1.39307v10.43262h-.92481a.95033.95033 0 0 0 -.70312.29443 1.00858 1.00858 0 0 0 0 1.41553.9536.9536 0 0 0 .70312.29394h20.74416a1.96828 1.96828 0 0 0 1.415-.51855 1.78331 1.78331 0 0 0 .54492-1.35352v-8.376a1.78328 1.78328 0 0 0 -.54492-1.35352 1.96828 1.96828 0 0 0 -1.415-.51855h-.30762v-.31641a1.8689 1.8689 0 0 0 -.47949-1.39304zm-4.99609 3.58155v8.24414h-12.62109v-10.03711a.74576.74576 0 0 1 .84374-.84375h14.99415a.85949.85949 0 0 1 .63281.21093.827.827 0 0 1 .19971.55372h-2.08936a1.96828 1.96828 0 0 0 -1.415.51855 1.78328 1.78328 0 0 0 -.54496 1.35352zm5.53711-.334v-.35156h.09668a.94481.94481 0 0 1 .67676.23291.83527.83527 0 0 1 .24609.63721v8.00683a.83528.83528 0 0 1 -.24609.63721.94481.94481 0 0 1 -.67676.23291h-3.51563a.95761.95761 0 0 1 -.68554-.23291.83525.83525 0 0 1 -.2461-.63721v-8.00682a.83524.83524 0 0 1 .2461-.63721.95761.95761 0 0 1 .68554-.23291h.09668v.35156a.52959.52959 0 0 0 .14063.37793.48342.48342 0 0 0 .36914.14941h2.30273a.48342.48342 0 0 0 .36914-.14941.52959.52959 0 0 0 .14063-.37793z"
                fill="#ab45fb"
              ></path>
              <path
                d="m42.457 19.293a.99962.99962 0 0 0 -1.41406 0l-1.543 1.543v-3.836a7.00818 7.00818 0 0 0 -7-7h-22a7.00818 7.00818 0 0 0 -7 7v11a1 1 0 0 0 2 0v-11a5.00588 5.00588 0 0 1 5-5h22a5.00588 5.00588 0 0 1 5 5v3.83594l-1.543-1.543a.99989.99989 0 0 0 -1.41394 1.41406l3.25 3.25a.99963.99963 0 0 0 1.41406 0l3.25-3.25a.99962.99962 0 0 0 -.00006-1.414z"
                fill="#ab45fb"
              ></path>
            </svg>
            <p className="text-[13px] leading-4 pt-[5px]">
              <b>Trade in for credit</b> <br />
              Get credit toward your purchase when you <br /> trade in an
              eligible iPhone.
            </p>
          </div>
          <div className="flex justify-center pt-3 gap-1 pb-4 px-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-[25px] w-[25px]"
              viewBox="0 0 42 56"
              aria-hidden="true"
              role="img"
            >
              <path
                d="M37,12H5a5.006,5.006,0,0,0-5,5V39a5.006,5.006,0,0,0,5,5H37a5.006,5.006,0,0,0,5-5V17A5.006,5.006,0,0,0,37,12ZM5,14H37a3,3,0,0,1,3,3v3H2V17A3,3,0,0,1,5,14ZM37,42H5a3,3,0,0,1-3-3V24H40V39A3,3,0,0,1,37,42ZM6,33.5v-4A1.5,1.5,0,0,1,7.5,28h6A1.5,1.5,0,0,1,15,29.5v4A1.5,1.5,0,0,1,13.5,35h-6A1.5,1.5,0,0,1,6,33.5Z"
                fill="#6cca4e"
              ></path>
            </svg>
            <p className="text-[13px] leading-4 pt-[5px]">
              <b>Get a sweet carrier deal at Apple</b> <br /> Save even more on
              your new iPhone when <br /> you finance with select carrier deals.
            </p>
          </div>
        </div>
      </div>
    );
  };

  return (
    <div className="bg-[#f5f5f7] flex justify-center px- py-7">
      {responsivePhoto
        ? dataBase[3].watches && findMyProdMobile()
        : dataBase[3].watches && findMyProdDesktop()}
    </div>
  );
};

export default WatchesDetails;

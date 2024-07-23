import { Link } from "react-router-dom";

const ThanksForOrder = () => {
  const styles = {
    container: {
      textAlign: "center",
      padding: "50px 20px",
      fontFamily:
        '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif',
      color: "#333",
    },
    heading: {
      fontSize: "2.5em",
      fontWeight: "600",
      marginBottom: "20px",
    },
    message: {
      fontSize: "1.25em",
      fontWeight: "400",
      color: "#666",
    },
  };

  return (
    <div
      className="bg-white h-[500px] flex flex-col items-center"
      style={styles.container}
    >
      <h1 style={styles.heading}>Thank you for your order</h1>
      <p style={styles.message}>Your order is on the way.</p>
      <Link to={"/store"}>
        <button className="text-[17px] text-[#0071e3] hover:text-white bg-white border-[#0071e3] hover:bg-[#0071e3] flex justify-center items-center  border w-[260px] h-[56px] mt-6 rounded-[13px]">
          Continue Shopping
        </button>
      </Link>
    </div>
  );
};

export default ThanksForOrder;

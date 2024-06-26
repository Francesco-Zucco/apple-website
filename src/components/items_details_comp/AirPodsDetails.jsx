import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";

const AirPodsDetails = () => {
  const dataBase = useSelector((store) => store.dataBase);
  const { param } = useParams();

  const findMyProd = () => {
    // console.log("A");
    const result = dataBase[4].airpods.find((p) => p.param === param);
    return (
      <div className="w-full grid">
        <h2>{result.productName}</h2>
        <p>{result.description}</p>
        <p>{result.price}</p>
      </div>
    );
  };

  return <div className="bg-white"> {dataBase[4].airpods && findMyProd()}</div>;
};

export default AirPodsDetails;

import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";

const MacDetails = () => {
  const dataBase = useSelector((store) => store.dataBase);

  const { param } = useParams();

  const findMyProd = () => {
    // console.log("A");
    const result = dataBase[2].macbooks.find((p) => p.param === param);
    return (
      <div className="w-full grid">
        <h2>{result.productName}</h2>
        <p>{result.description}</p>
        <p>{result.price}</p>
      </div>
    );
  };

  return (
    <div className="bg-white"> {dataBase[2].macbooks && findMyProd()}</div>
  );
};

export default MacDetails;

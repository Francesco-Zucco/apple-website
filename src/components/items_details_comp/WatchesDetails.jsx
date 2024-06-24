import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";

const WatchesDetails = () => {
  const dataBase = useSelector((store) => store.dataBase);
  const { param } = useParams();

  const findMyProd = () => {
    // console.log("A");
    const result = dataBase[3].watches.find((p) => p.param === param);
    return (
      <div className="w-full grid">
        <h2>{result.productName}</h2>
        <p>{result.description}</p>
        <p>{result.price}</p>
      </div>
    );
  };

  return <div className="bg-white"> {dataBase[3].watches && findMyProd()}</div>;
};

export default WatchesDetails;

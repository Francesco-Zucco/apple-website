import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";

const IpadsDetail = () => {
  const dataBase = useSelector((store) => store.dataBase);
  const { param } = useParams();

  const findMyProd = () => {
    // console.log("A");
    const result = dataBase[1].ipads.find((p) => p.param === param);
    return (
      <div className="w-full grid">
        <h2>{result.productName}</h2>
        <p>{result.description}</p>
        <p>{result.price}</p>
      </div>
    );
  };

  return <div className="bg-white"> {dataBase[1].ipads && findMyProd()}</div>;
};

export default IpadsDetail;

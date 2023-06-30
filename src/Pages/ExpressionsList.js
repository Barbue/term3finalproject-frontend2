import ExpressionCard from "../Components/ExpressionCard";
import SearchBarExp from "../Components/SearchBarExp";
import SortingExp from "../Components/SortingExp";
import { GiFleurDeLys, GiTrefoilLily } from "react-icons/gi";


//home page component

const ExpressionsList = (props) => {
  // const auth = useAuth();
  // const navigate = useNavigate();
  const {
    expressionList,
    setExpressionList,
    urlEndPoint,
    setShouldRefresh,
    filterExpressions,
    sortExpressionsDsc,
    sortExpressionsAsc,
  } = props;

  console.log(expressionList);

  return (
    <div className="expressionList">
      

      <SearchBarExp
        filterExpressions={filterExpressions}
        expressionList={expressionList}
        setExpressionList={setExpressionList}
        setShouldRefresh={setShouldRefresh}
      />

      <h1 className="expressionsTitle">
        {" "}
        <GiFleurDeLys/><GiFleurDeLys/><GiFleurDeLys/> Expressions <GiFleurDeLys/><GiFleurDeLys/><GiFleurDeLys/> {" "}
      </h1>

      <br />

      {/* <div className="sortingexp">
        <SortingExp sortExpressionsDsc={sortExpressionsDsc} sortExpressionsAsc={sortExpressionsAsc} />
      </div> */}

      {expressionList.map((item, index) => {
        return (
          <ExpressionCard
            expressionEntry={item}
            expressionList={expressionList}
            setExpressionList={setExpressionList}
            urlEndPoint={urlEndPoint}
            setShouldRefresh={setShouldRefresh}
            key={index}
          />
        );
      })}
    </div>
  );
};

export default ExpressionsList;


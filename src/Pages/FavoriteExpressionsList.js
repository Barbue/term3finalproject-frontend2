import FavoriteExpressionsCard from "../Components/FavoriteExpressionsCard";
import SearchBarExpFavorites from "../Components/SearchBarExpFavorites";
import SortingExpFavorites from "../Components/SortingExpFavorites";
import { GiFleurDeLys, GiTrefoilLily } from "react-icons/gi";


//home page component

const FavoriteExpressionsList = (props) => {
  // const auth = useAuth();
  // const navigate = useNavigate();
  const {
    favoriteExpressionList,
    setFavoriteExpressionList,
    urlEndPoint,
    setShouldRefresh,
    filterFavoriteExpressions,
    sortFavoriteExpressionsDsc,
    sortFavoriteExpressionsAsc,
  } = props;

  console.log(favoriteExpressionList);

  return (
    <div className="expressionList">
      
      
      <SearchBarExpFavorites
        filterFavoriteExpressions={filterFavoriteExpressions}
        favoriteExpressionList={favoriteExpressionList}
        setFavoriteExpressionList={setFavoriteExpressionList}
        setShouldRefresh={setShouldRefresh}
      />

      <h1 className="favoriteExpressionsTitle">
        {" "}
        <GiFleurDeLys/><GiFleurDeLys/><GiFleurDeLys/> Expressions Préférées <GiFleurDeLys/><GiFleurDeLys/><GiFleurDeLys/> 
        <br/>
        <GiFleurDeLys/><GiFleurDeLys/> Favorite Expressions <GiFleurDeLys/><GiFleurDeLys/>
      </h1>

      <br />

      {/* <div className="sortingexp">
        <SortingExpFavorites sortFavoriteExpressionsDsc={sortFavoriteExpressionsDsc} sortFavoriteExpressionsAsc={sortFavoriteExpressionsAsc} />
      </div> */}

      {favoriteExpressionList.map((item, index) => {
        return (
          <FavoriteExpressionsCard
            favoriteExpressionEntry={item}
            favoriteExpressionList={favoriteExpressionList}
            setFavoriteExpressionList={setFavoriteExpressionList}
            urlEndPoint={urlEndPoint}
            setShouldRefresh={setShouldRefresh}
            key={index}
          />
        );
      })}
    </div>
  );
};

export default FavoriteExpressionsList;
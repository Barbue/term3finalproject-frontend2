import FavoriteWordCard from "../Components/FavoriteWordCard";
import SearchBarFavoriteWords from "../Components/SearchBarFavoriteWords";
//import SortingFavoriteWords from "../Components/SortingFavoriteWords"
import { GiFleurDeLys, GiTrefoilLily } from "react-icons/gi";


//home page component

const FavoriteWordsList = (props) => {
  // const auth = useAuth();
  // const navigate = useNavigate();
  const {
    favoriteWordList,
    setFavoriteWordList,
    urlEndPoint,
    setShouldRefresh,
    filterFavoriteWords,
    // sortFavoriteWordsDsc,
    // sortFavoriteWordsAsc,
  } = props;

  console.log(favoriteWordList);

  return (
    <div className="favoriteWordList">
      

      <SearchBarFavoriteWords
        filterFavoriteWords={filterFavoriteWords}
        favoriteWordList={favoriteWordList}
        setFavoriteWordList={setFavoriteWordList}
        setShouldRefresh={setShouldRefresh}
      />

      <h1 className="favoriteWordsTitle">
        {" "}
        <GiFleurDeLys/><GiFleurDeLys/><GiFleurDeLys/> Mots Préférés <GiFleurDeLys/><GiFleurDeLys/><GiFleurDeLys/> 
        <br/>
        <GiFleurDeLys/><GiFleurDeLys/> Favorite Words <GiFleurDeLys/><GiFleurDeLys/>
      </h1>

      <br />

      {/* <div className="sorting">
        <SortingFavoriteWords sortFavoriteWordsDsc={sortFavoriteWordsDsc} sortFavoriteWordsAsc={sortFavoriteWordsAsc} />
      </div> */}

      {favoriteWordList.map((item, index) => {
        return (
          <FavoriteWordCard
            favoriteWordEntry={item}
            favoriteWordList={favoriteWordList}
            setFavoriteWordList={setFavoriteWordList}
            urlEndPoint={urlEndPoint}
            setShouldRefresh={setShouldRefresh}
            key={index}
          />
        );
      })}
    </div>
  );
};

export default FavoriteWordsList;
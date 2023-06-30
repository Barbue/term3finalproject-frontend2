import FavoriteVerbCard from "../Components/FavoriteVerbCard";
import SearchBarVerbFavorite from "../Components/SearchBarVerbFavorite";
//import SortingVerbFavorite from "../Components/SortingVerbFavorite";
import { GiFleurDeLys, GiTrefoilLily } from "react-icons/gi";

// Favorite Verb page component

const FavoriteVerbsList = (props) => {
  // const auth = useAuth();
  // const navigate = useNavigate();
  const {
    favoriteVerbList,
    setFavoriteVerbList,
    urlEndPoint,
    setShouldRefresh,
    filterFavoriteVerbs,
    // sortFavoriteVerbsDsc,
    // sortFavoriteVerbsAsc,
  } = props;

  console.log(favoriteVerbList);

  return (
    <div className="verbList">
      <SearchBarVerbFavorite
        filterFavoriteVerbs={filterFavoriteVerbs}
        favoriteVerbList={favoriteVerbList}
        setFavoriteVerbList={setFavoriteVerbList}
        setShouldRefresh={setShouldRefresh}
      />

      <h1 className="favoriteVerbsTitle">
        {" "}
        <GiFleurDeLys /><GiFleurDeLys />
        <GiFleurDeLys /> Verbes Préférés 
        <GiFleurDeLys />
        <GiFleurDeLys />
        <GiFleurDeLys />
        <br/>
        <GiFleurDeLys />
        <GiFleurDeLys /> Favorite Verbs
        <GiFleurDeLys />
        <GiFleurDeLys />
        
        
      </h1>

      <br />

      {/* <div className="sorting">
        <SortingVerbFavorite sortFavoriteVerbsDsc={sortFavoriteVerbsDsc} sortFavoriteVerbsAsc={sortFavoriteVerbsAsc} />
      </div> */}

      {favoriteVerbList.map((item, index) => {
        return (
          <FavoriteVerbCard
            favoriteVerbEntry={item}
            favoriteVerbList={favoriteVerbList}
            setFavoriteVerbList={setFavoriteVerbList}
            urlEndPoint={urlEndPoint}
            setShouldRefresh={setShouldRefresh}
            key={index}
          />
        );
      })}
    </div>
  );
};

export default FavoriteVerbsList;

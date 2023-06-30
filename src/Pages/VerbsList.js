import VerbCard from "../Components/VerbCard";
import SearchBarVerb from "../Components/SearchBarVerb";
//import SortingVerb from "../Components/SortingVerb";
import { GiFleurDeLys, GiTrefoilLily } from "react-icons/gi";

//home page component

const VerbsList = (props) => {
  // const auth = useAuth();
  // const navigate = useNavigate();
  const {
    verbList,
    setVerbList,
    urlEndPoint,
    setShouldRefresh,
    filterVerbs,
    // sortVerbsDsc,
    // sortVerbsAsc,
  } = props;

  console.log(verbList);

  return (
    <div className="verbList">
      <SearchBarVerb
        filterVerbs={filterVerbs}
        verbList={verbList}
        setVerbList={setVerbList}
        setShouldRefresh={setShouldRefresh}
      />

      <h1 className="verbsTitle">
        {" "}
        <GiFleurDeLys />
        <GiFleurDeLys />
        <GiFleurDeLys /> Verbes <GiFleurDeLys />
        <GiFleurDeLys />
        <GiFleurDeLys />
        <br/>
        <GiFleurDeLys />
        <GiFleurDeLys /> Verbs <GiFleurDeLys />
        <GiFleurDeLys />
       
      </h1>

      <br />

       {/* <div className="sorting">
        <SortingVerb sortVerbsDsc={sortVerbsDsc} sortVerbsAsc={sortVerbsAsc} />
      </div>  */}

      {verbList.map((item, index) => {
        return (
          <VerbCard
            verbEntry={item}
            verbList={verbList}
            setVerbList={setVerbList}
            urlEndPoint={urlEndPoint}
            setShouldRefresh={setShouldRefresh}
            key={index}
          />
        );
      })}
    </div>
  );
};

export default VerbsList;

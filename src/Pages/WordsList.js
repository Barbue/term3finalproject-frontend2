import WordCard from "../Components/WordCard";
import SearchBar from "../Components/SearchBar";
//import Sorting from "../Components/Sorting";
import { GiFleurDeLys, GiTrefoilLily } from "react-icons/gi";

//home page component

const WordsList = (props) => {
  // const auth = useAuth();
  // const navigate = useNavigate();
  const {
    wordList,
    setWordList,
    urlEndPoint,
    setShouldRefresh,
    filterWords,
    // sortWordsDsc,
    // sortWordsAsc,
  } = props;

  console.log(wordList);

  return (
    <div className="wordList">
      <SearchBar
        filterWords={filterWords}
        wordList={wordList}
        setWordList={setWordList}
        setShouldRefresh={setShouldRefresh}
      />

      <h1 className="wordsTitle">
        {" "}
        <GiFleurDeLys />
        <GiFleurDeLys />
        <GiFleurDeLys /> Mots <GiFleurDeLys />
        <GiFleurDeLys />
        <GiFleurDeLys />
        <br />
        <GiFleurDeLys />
        <GiFleurDeLys /> Words <GiFleurDeLys />
        <GiFleurDeLys />
      </h1>

      <br />

      {/* <div className="sorting">
        <Sorting sortWordsDsc={sortWordsDsc} sortWordsAsc={sortWordsAsc} />
      </div> */}

      {wordList.map((item, index) => {
        return (
          <WordCard
            wordEntry={item}
            wordList={wordList}
            setWordList={setWordList}
            urlEndPoint={urlEndPoint}
            setShouldRefresh={setShouldRefresh}
            key={index}
          />
        );
      })}
    </div>
  );
};

export default WordsList;

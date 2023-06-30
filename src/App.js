import "./App.css";
import { useState, useEffect } from "react";
import axios from "axios";
import WordFormPage from "./Pages/WordFormPage";
import LoginPage from "./Pages/LoginPage";
import RegistrationPage from "./Pages/RegistrationPage";
import WordsList from "./Pages/WordsList";
import Pagination from "./Components/Pagination";
import PrivatePage from "./Pages/PrivatePage";
import { Route, Routes } from "react-router-dom";
//import NavBar from "./Components/NavBar";
import EditWordForm from "./Components/EditWordForm";
import { GiFleurDeLys, GiTrefoilLily } from "react-icons/gi";
import ExpressionsList from "./Pages/ExpressionsList";
import PaginationExp from "./Components/PaginationExp";
import ExpressionFormPage from "./Pages/ExpressionFormPage";
import EditExpressionForm from "./Components/EditExpressionForm";
import NavBar2 from "./Components/NavBar2";
import VerbsList from "./Pages/VerbsList";
import VerbFormPage from "./Pages/VerbFormPage";
import PaginationVerbs from "./Components/PaginationVerbs";
import EditVerbForm from "./Components/EditVerbForm";
import FavoriteWordsList from "./Pages/FavoriteWordsList";
import PaginationFavoriteWords from "./Components/PaginationFavoriteWords"
import FavoriteExpressionsList from "./Pages/FavoriteExpressionsList";
import PaginationFavoriteExpressions from "./Components/PaginationFavoriteExpressions";
import FavoriteVerbsList from "./Pages/FavoriteVerbsList";
import PaginationFavoriteVerbs from "./Components/PaginationFavoriteVerbs";






const urlEndPoint = process.env.REACT_APP_URL_ENDPOINT;

function App() {
  //set up hooks for the state

  //Words
  const [wordList, setWordList] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [wordsPerPage] = useState(3);
  const [filteredWords, setFilteredWords] = useState([]);
  // setWordsPerPage

  //Favorite Words
  const [favoriteWordList, setFavoriteWordList] = useState([]);
  //const [currentPage, setCurrentPage] = useState(1);
  const [favoriteWordsPerPage, setFavoriteWordsPerPage] = useState(3);
  const [filteredFavoriteWords, setFilteredFavoriteWords] = useState([]);

  // Expressions
  const [expressionList, setExpressionList] = useState([]);
  const [expressionsPerPage, setExpressionsPerPage] = useState(3);
  const [filteredExpressions, setFilteredExpressions] = useState([]);

  // Favorite Expressions
  const [favoriteExpressionList, setFavoriteExpressionList] = useState([]);
  const [favoriteExpressionsPerPage, setFavoriteExpressionsPerPage] =
    useState(3);
  const [filteredFavoriteExpressions, setFilteredFavoriteExpressions] =
    useState([]);

  // Verbs
  const [verbList, setVerbList] = useState([]);
  const [verbsPerPage, setVerbsPerPage] = useState(3);
  const [filteredVerbs, setFilteredVerbs] = useState([]);

  // Favorite Verbs
  const [favoriteVerbList, setFavoriteVerbList] = useState([]);
  const [favoriteVerbsPerPage, setFavoriteVerbsPerPage] = useState(3);
  const [filteredFavoriteVerbs, setFilteredFavoriteVerbs] = useState([]);

  // Refresh
  const [shouldRefresh, setShouldRefresh] = useState(false);

  // load the word items from the back end
  useEffect(() => {
    axios
      .get(`${urlEndPoint}/words/all`)
      .then(function (response) {
        console.log(response);
        setWordList(response.data.words);
        setFilteredWords(response.data.words);
      })
      .catch(function (error) {
        console.log(error);
      });
  }, [shouldRefresh]);

  // load the expression items from the back end
  useEffect(() => {
    axios
      .get(`${urlEndPoint}/expressions/all`)
      .then(function (response) {
        console.log(response);
        setExpressionList(response.data.expressions);
        setFilteredExpressions(response.data.expressions);
      })
      .catch(function (error) {
        console.log(error);
      });
  }, [shouldRefresh]);

  // load the verb items from the back end

  useEffect(() => {
    axios
      .get(`${urlEndPoint}/verbs/all`)
      .then(function (response) {
        console.log(response);
        setVerbList(response.data.verbs);
        setFilteredVerbs(response.data.verbs);
      })
      .catch(function (error) {
        console.log(error);
      });
  }, [shouldRefresh]);

  //console.log(filteredVerbs)

  // load the favorite word items from the back end

  useEffect(() => {
    axios
      .get(`${urlEndPoint}/favoritewords/all`)
      .then(function (response) {
        console.log(response);
        setFavoriteWordList(response.data.favoritewords);
        setFilteredFavoriteWords(response.data.favoritewords);
      })
      .catch(function (error) {
        console.log(error);
      });
  }, [shouldRefresh]);

  // load the favorite expression items from the back end

  useEffect(() => {
    axios
      .get(`${urlEndPoint}/favoriteexpressions/all`)
      .then(function (response) {
        console.log(response);
        setFavoriteExpressionList(response.data.favoriteexpressions);
        setFilteredFavoriteExpressions(response.data.favoriteexpressions);
      })
      .catch(function (error) {
        console.log(error);
      });
  }, [shouldRefresh]);

  // load the favorite verb items from the back end

  useEffect(() => {
    axios
      .get(`${urlEndPoint}/favoriteverbs/all`)
      .then(function (response) {
        console.log(response);
        setFavoriteVerbList(response.data.favoriteverbs);
        setFilteredFavoriteVerbs(response.data.favoriteverbs);
      })
      .catch(function (error) {
        console.log(error);
      });
  }, [shouldRefresh]);

  // Pagination

  // so if current page is 1 and there are 5 words/expressions/verbs per page, then last index of page will be 5

  const indexOfLastWord = currentPage * wordsPerPage;
  const indexOfLastExpression = currentPage * expressionsPerPage;
  const indexOfLastVerb = currentPage * verbsPerPage;

  // Favorites
  const indexOfLastFavoriteWord = currentPage * favoriteWordsPerPage;
  const indexOfLastFavoriteExpression =
    currentPage * favoriteExpressionsPerPage;
  const indexOfLastFavoriteVerb = currentPage * favoriteVerbsPerPage;

  // so if last index  of last word/expression/verb is 5 and word/expression/verb per page is 5, then the index of first word/expression/verb will be 1 because index starts at 0.

  const indexOfFirstWord = indexOfLastWord - wordsPerPage;
  const indexOfFirstExpression = indexOfLastExpression - expressionsPerPage;
  const indexOfFirstVerb = indexOfLastVerb - verbsPerPage;

  // Favorites

  const indexOfFirstFavoriteWord =
    indexOfLastFavoriteWord - favoriteWordsPerPage;

  const indexOfFirstFavoriteExpression =
    indexOfLastFavoriteExpression - favoriteExpressionsPerPage;
    
  const indexOfFirstFavoriteVerb =
    indexOfLastFavoriteVerb - favoriteVerbsPerPage;

  // so if the "indexOfFirstWord/Expression/Verb" is "0" and the "indexOfLastWord/Expression/Verb" is "5", then the displayed page will include indexes 0-4(word/expression/verb 1-5) and end with index 5, which is not included.
  const currentWords = filteredWords.slice(indexOfFirstWord, indexOfLastWord);
  console.log(currentWords);

  const currentExpressions = filteredExpressions.slice(
    indexOfFirstExpression,
    indexOfLastExpression
  );
  console.log(currentExpressions);

  const currentVerbs = filteredVerbs.slice(indexOfFirstVerb, indexOfLastVerb);
  console.log(currentVerbs);

  //Favorites

  const currentFavoriteWords = filteredFavoriteWords.slice(
    indexOfFirstFavoriteWord,
    indexOfLastFavoriteWord
  );
  console.log(currentFavoriteWords);

  const currentFavoriteExpressions = filteredFavoriteExpressions.slice(
    indexOfFirstFavoriteExpression,
    indexOfLastFavoriteExpression
  );
  console.log(currentFavoriteExpressions);

  const currentFavoriteVerbs = filteredFavoriteVerbs.slice(
    indexOfFirstFavoriteVerb,
    indexOfLastFavoriteVerb
  );
  console.log(currentFavoriteVerbs);

  // Sorting Word/Expression/Verb, ascending order(alphabetical):
  // Spread operator "spreads" filteredWords/Expressions/Verbs into its elements, makes a copy of it, then sorts(mutates) that copy
  // A conditional (ternary) operator is used in this compare function.
  // The array of objects are sorted by comparing the return value(Unicode code point value) of one of the properties(word).
  // if value of a.word/expression/verb is > b.word/expression/verb, return 1, if not return -1

  // > 0 sorts a after b or [b,a]
  // < 0 sorts a before b [a,b]
  // === 0 keeps original of a and b

  // const sortWordsAsc = () => {
  //   const sortedWordsAscending = [...filteredWords].sort((a, b) => {
  //     return a.word.toLowerCase() > b.word.toLowerCase() ? 1 : -1;
  //   });
  //   setFilteredWords(sortedWordsAscending);
  //   console.log(sortedWordsAscending);
  // };

  // const sortExpressionsAsc = () => {
  //   const sortedExpressionsAscending = [...filteredExpressions].sort((a, b) => {
  //     return a.expression.toLowerCase() > b.expression.toLowerCase() ? 1 : -1;
  //   });
  //   setFilteredExpressions(sortedExpressionsAscending);
  //   console.log(sortedExpressionsAscending);
  // };

  // const sortVerbsAsc = () => {
  //   const sortedVerbsAscending = [...filteredVerbs].sort((a, b) => {
  //     return a.verb.toLowerCase() > b.verb.toLowerCase() ? 1 : -1;
  //   });
  //   setFilteredVerbs(sortedVerbsAscending);
  //   console.log(sortedVerbsAscending);
  // };

  // // Favorites

  // const sortFavoriteWordsAsc = () => {
  //   const sortedWordsAscending = [...filteredWords].sort((a, b) => {
  //     return a.word.toLowerCase() > b.word.toLowerCase() ? 1 : -1;
  //   });
  //   setFilteredWords(sortedWordsAscending);
  //   console.log(sortedWordsAscending);
  // };

  // const sortFavoriteExpressionsAsc = () => {
  //   const sortedFavoriteExpressionsAscending = [
  //     ...filteredFavoriteExpressions,
  //   ].sort((a, b) => {
  //     return a.expression.toLowerCase() > b.expression.toLowerCase() ? 1 : -1;
  //   });
  //   setFilteredFavoriteExpressions(sortedFavoriteExpressionsAscending);
  //   console.log(sortedFavoriteExpressionsAscending);
  // };

  // const sortFavoriteVerbsAsc = () => {
  //   const sortedFavoriteVerbsAscending = [...filteredFavoriteVerbs].sort(
  //     (a, b) => {
  //       return a.verb.toLowerCase() > b.verb.toLowerCase() ? 1 : -1;
  //     }
  //   );
  //   setFilteredFavoriteVerbs(sortedFavoriteVerbsAscending);
  //   console.log(sortedFavoriteVerbsAscending);
  // };

  // Sorting by Word/Expression/Verb, descending order(alphabetical):
  // Spread operator "spreads" filteredWords/Expressions/Verbs into its elements, makes a copy of it, then sorts(mutates) that copy
  // A conditional (ternary) operator is used in this compare function.
  // The array of objects are sorted by comparing the return value(Unicode code point value) of one of the properties(word).
  // if value of a.word/expression/verb is > b.word/expression/verb, return -1, if not return 1

  // > 0 sorts a after b or [b,a]
  // < 0 sorts a before b [a,b]
  // === 0 keeps original of a and b

  // const sortWordsDsc = () => {
  //   const sortedWordsDescending = [...filteredWords].sort((a, b) => {
  //     return a.word.toLowerCase() > b.word.toLowerCase() ? -1 : 1;
  //   });
  //   setFilteredWords(sortedWordsDescending);
  //   console.log(sortedWordsDescending);
  // };

  // const sortExpressionsDsc = () => {
  //   const sortedExpressionsDescending = [...filteredExpressions].sort(
  //     (a, b) => {
  //       return a.expression.toLowerCase() > b.expression.toLowerCase() ? -1 : 1;
  //     }
  //   );
  //   setFilteredExpressions(sortedExpressionsDescending);
  //   console.log(sortedExpressionsDescending);
  // };

  // const sortVerbsDsc = () => {
  //   const sortedVerbsDescending = [...filteredVerbs].sort((a, b) => {
  //     return a.verb.toLowerCase() > b.verb.toLowerCase() ? -1 : 1;
  //   });
  //   setFilteredVerbs(sortedVerbsDescending);
  //   console.log(sortedVerbsDescending);
  // };

  // // Favorites

  // const sortFavoriteWordsDsc = () => {
  //   const sortedFavoriteWordsDescending = [...filteredFavoriteWords].sort(
  //     (a, b) => {
  //       return a.word.toLowerCase() > b.word.toLowerCase() ? -1 : 1;
  //     }
  //   );
  //   setFilteredFavoriteWords(sortedFavoriteWordsDescending);
  //   console.log(sortedFavoriteWordsDescending);
  // };

  // const sortFavoriteExpressionsDsc = () => {
  //   const sortedFavoriteExpressionsDescending = [
  //     ...filteredFavoriteExpressions,
  //   ].sort((a, b) => {
  //     return a.expression.toLowerCase() > b.expression.toLowerCase() ? -1 : 1;
  //   });
  //   setFilteredFavoriteExpressions(sortedFavoriteExpressionsDescending);
  //   console.log(sortedFavoriteExpressionsDescending);
  // };

  // const sortFavoriteVerbsDsc = () => {
  //   const sortedFavoriteVerbsDescending = [...filteredFavoriteVerbs].sort(
  //     (a, b) => {
  //       return a.verb.toLowerCase() > b.verb.toLowerCase() ? -1 : 1;
  //     }
  //   );
  //   setFilteredFavoriteVerbs(sortedFavoriteVerbsDescending);
  //   console.log(sortedFavoriteVerbsDescending);
  // };

  // Filter

  const filterWords = (input, field) => {
    if (field.length === 0) {
      setFilteredWords(wordList);
    } else {
      const filteredWords = wordList.filter((word) => {
        return word[field].toLowerCase().includes(input.toLowerCase());
      });
      setFilteredWords(filteredWords);
      if (filteredWords.length === 0) {
        alert("No word found!");
      }
    }
  };

  const filterExpressions = (input, field) => {
    if (field.length === 0) {
      setFilteredExpressions(expressionList);
    } else {
      const filteredExpressions = expressionList.filter((expression) => {
        return expression[field].toLowerCase().includes(input.toLowerCase());
      });
      setFilteredExpressions(filteredExpressions);
      if (filteredExpressions.length === 0) {
        alert("No expression found!");
      }
    }
  };

  const filterVerbs = (input, field) => {
    if (field.length === 0) {
      setFilteredVerbs(verbList);
    } else {
      const filteredVerbs = verbList.filter((verb) => {
        return verb[field].toLowerCase().includes(input.toLowerCase());
      });
      setFilteredVerbs(filteredVerbs);
      if (filteredVerbs.length === 0) {
        alert("No verb found!");
      }
    }
  };

  // Favorites Filter

  const filterFavoriteWords = (input, field) => {
    if (field.length === 0) {
      setFilteredFavoriteWords(favoriteWordList);
    } else {
      const filteredFavoriteWords = favoriteWordList.filter((word) => {
        return word[field].toLowerCase().includes(input.toLowerCase());
      });
      setFilteredFavoriteWords(filteredFavoriteWords);
      if (filteredFavoriteWords.length === 0) {
        alert("No favorite word found!");
      }
    }
  };

  const filterFavoriteExpressions = (input, field) => {
    if (field.length === 0) {
      setFilteredFavoriteExpressions(favoriteExpressionList);
    } else {
      const filteredFavoriteExpressions = favoriteExpressionList.filter(
        (expression) => {
          return expression[field].toLowerCase().includes(input.toLowerCase());
        }
      );
      setFilteredFavoriteExpressions(filteredFavoriteExpressions);
      if (filteredFavoriteExpressions.length === 0) {
        alert("No favorite expression found!");
      }
    }
  };

  const filterFavoriteVerbs = (input, field) => {
    if (field.length === 0) {
      setFilteredFavoriteVerbs(favoriteVerbList);
    } else {
      const filteredFavoriteVerbs = favoriteVerbList.filter((verb) => {
        return verb[field].toLowerCase().includes(input.toLowerCase());
      });
      setFilteredFavoriteVerbs(filteredFavoriteVerbs);
      if (filteredFavoriteVerbs.length === 0) {
        alert("No favorite verb found!");
      }
    }
  };

  return (
    <div className="App-header ">
      <NavBar2 />

      <h2 className="header1">
        <GiTrefoilLily />
        <GiTrefoilLily />
        <GiTrefoilLily /> Un Glossaire Francais Cadien - Anglais{" "}
        <GiTrefoilLily />
        <GiTrefoilLily />
        <GiTrefoilLily />
      </h2>

      <h2 className="header2">
        <GiTrefoilLily />
        <GiTrefoilLily />
        <GiTrefoilLily /> A Cajun French - English Glossary <GiTrefoilLily />
        <GiTrefoilLily />
        <GiTrefoilLily />
      </h2>

      <Routes>
        <Route path="/" element={<PrivatePage />}>
          <Route
            index
            element={
              <>
                <WordsList
                  wordList={currentWords} // without pagination it would be {wordList}
                  setWordList={setWordList}
                  filterWords={filterWords}
                  urlEndPoint={urlEndPoint}
                  setShouldRefresh={setShouldRefresh}
                  // sortWordsDsc={sortWordsDsc}
                  // sortWordsAsc={sortWordsAsc}
                />

                <Pagination
                  totalWords={filteredWords.length}
                  wordsPerPage={wordsPerPage}
                  setCurrentPage={setCurrentPage}
                  currentPage={currentPage}
                />
              </>
            }
          />
          <Route
            path="wordform"
            element={
              <WordFormPage
                urlEndPoint={urlEndPoint}
                setShouldRefresh={setShouldRefresh}
              />
            }
          />
          <Route
            path="edit-word/:id"
            element={
              <EditWordForm
                urlEndPoint={urlEndPoint}
                wordList={wordList}
                setShouldRefresh={setShouldRefresh}
              />
            }
          />
        </Route>
        <Route path="/registration" element={<RegistrationPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route
          path="/expressions"
          element={
            <>
              <PrivatePage />

              <ExpressionsList
                expressionList={currentExpressions} // without pagination it would be {expressionList}
                setExpressionList={setExpressionList}
                filterExpressions={filterExpressions}
                urlEndPoint={urlEndPoint}
                setShouldRefresh={setShouldRefresh}
                // sortExpressionsDsc={sortExpressionsDsc}
                // sortExpressionsAsc={sortExpressionsAsc}
              />

              <PaginationExp
                totalExpressions={filteredExpressions.length}
                expressionsPerPage={expressionsPerPage}
                setCurrentPage={setCurrentPage}
                currentPage={currentPage}
              />
            </>
          }
        />

        <Route
          path="expressionform"
          element={
            <ExpressionFormPage
              urlEndPoint={urlEndPoint}
              setShouldRefresh={setShouldRefresh}
            />
          }
        />
        <Route
          path="edit-expression/:id"
          element={
            <EditExpressionForm
              urlEndPoint={urlEndPoint}
              expressionList={expressionList}
              setShouldRefresh={setShouldRefresh}
            />
          }
        />

        <Route
          path="/verbs"
          element={
            <>
              <PrivatePage />

              <VerbsList
                verbList={currentVerbs} // without pagination it would be {verbList}
                setVerbList={setVerbList}
                filterVerbs={filterVerbs}
                urlEndPoint={urlEndPoint}
                setShouldRefresh={setShouldRefresh}
                // sortVerbsDsc={sortVerbsDsc}
                // sortVerbsAsc={sortVerbsAsc}
              />

              <PaginationVerbs
                totalVerbs={filteredVerbs.length}
                verbsPerPage={verbsPerPage}
                setCurrentPage={setCurrentPage}
                currentPage={currentPage}
              />
            </>
          }
        />

        <Route
          path="verbform"
          element={
            <VerbFormPage
              urlEndPoint={urlEndPoint}
              setShouldRefresh={setShouldRefresh}
            />
          }
        />
        <Route
          path="edit-verb/:id"
          element={
            <EditVerbForm
              urlEndPoint={urlEndPoint}
              verbList={verbList}
              setShouldRefresh={setShouldRefresh}
            />
          }
        />

        <Route
          path="/favoritewords"
          element={
            <>
              <PrivatePage />

              <FavoriteWordsList
                favoriteWordList={currentFavoriteWords} // without pagination it would be {favoriteWordList}
                setFavoriteWordList={setFavoriteWordList}
                filterFavoriteWords={filterFavoriteWords}
                urlEndPoint={urlEndPoint}
                setShouldRefresh={setShouldRefresh}
                // sortFavoriteWordsDsc={sortFavoriteWordsDsc}
                // sortFavoriteWordsAsc={sortFavoriteWordsAsc}
              />

              <PaginationFavoriteWords
                totalFavoriteWords={filteredFavoriteWords.length}
                favoriteWordsPerPage={favoriteWordsPerPage}
                setCurrentPage={setCurrentPage}
                currentPage={currentPage}
              />
            </>
          }
        />

        {/* <Route
          path="favoritewordsform"
          element={
            <favoriteWordFormPage
              urlEndPoint={urlEndPoint}
              setShouldRefresh={setShouldRefresh}
            />
          }
        /> */}
        {/* <Route
          path="edit-favoriteword/:id"
          element={
            <EditFavoriteWordForm
              urlEndPoint={urlEndPoint}
              favoriteWordList={favoriteWordList}
              setShouldRefresh={setShouldRefresh}
            />
          }
        /> */}

        <Route
          path="/favoriteexpressions"
          element={
            <>
              <PrivatePage />

              <FavoriteExpressionsList
                favoriteExpressionList={currentFavoriteExpressions} // without pagination it would be {favoriteExpressionList}
                setFavoriteExpressionList={setFavoriteExpressionList}
                filterFavoriteExpressions={filterFavoriteExpressions}
                urlEndPoint={urlEndPoint}
                setShouldRefresh={setShouldRefresh}
                // sortFavoriteExpressionsDsc={sortFavoriteExpressionsDsc}
                // sortFavoriteExpressionsAsc={sortFavoriteExpressionsAsc}
              />

              <PaginationFavoriteExpressions
                totalFavoriteExpressions={filteredFavoriteExpressions.length}
                favoriteExpressionsPerPage={favoriteExpressionsPerPage}
                setCurrentPage={setCurrentPage}
                currentPage={currentPage}
              />
            </>
          }
        /> 

        {/* <Route
          path="favoriteexpressionsform"
          element={
            <favoriteExpressionFormPage
              urlEndPoint={urlEndPoint}
              setShouldRefresh={setShouldRefresh}
            />
          }
        /> */}
        {/* <Route
          path="edit-favoriteexpression/:id"
          element={
            <EditFavoriteExpressionForm
              urlEndPoint={urlEndPoint}
              favoriteExpressionList={favoriteExpressionList}
              setShouldRefresh={setShouldRefresh}
            />
          }
        /> */}

        <Route
          path="/favoriteverbs"
          element={
            <>
              <PrivatePage />

              <FavoriteVerbsList
                favoriteVerbList={currentFavoriteVerbs} // without pagination it would be {favoriteVerbList}
                setFavoriteVerbList={setFavoriteVerbList}
                filterFavoriteVerbs={filterFavoriteVerbs}
                urlEndPoint={urlEndPoint}
                setShouldRefresh={setShouldRefresh}
                // sortFavoriteVerbsDsc={sortFavoriteVerbsDsc}
                // sortFavoriteVerbsAsc={sortFavoriteVerbsAsc}
              />

              <PaginationFavoriteVerbs
                totalFavoriteVerbs={filteredFavoriteVerbs.length}
                favoriteVerbsPerPage={favoriteVerbsPerPage}
                setCurrentPage={setCurrentPage}
                currentPage={currentPage}
              />
            </>
          }
        /> 

        {/* <Route
          path="favoriteverbform"
          element={
            <FavoriteVerbFormPage
              urlEndPoint={urlEndPoint}
              setShouldRefresh={setShouldRefresh}
            />
          }
        /> */}
        {/* <Route
          path="edit-favoriteverb/:id"
          element={
            <EditFavoriteVerbForm
              urlEndPoint={urlEndPoint}
              favoriteVerbList={favoriteVerbList}
              setShouldRefresh={setShouldRefresh}
            />
          }
        /> */}
      </Routes>
    </div>
  );
}

export default App;

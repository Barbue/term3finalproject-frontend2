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

const urlEndPoint = process.env.REACT_APP_URL_ENDPOINT;

function App() {
  //set up hooks for the state
  const [wordList, setWordList] = useState([]);
  const [expressionList, setExpressionList] = useState([]);
  const [shouldRefresh, setShouldRefresh] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [wordsPerPage] = useState(3);
  const [expressionsPerPage, setExpressionsPerPage] = useState(3);
  const [filteredWords, setFilteredWords] = useState([]);
  const [filteredExpressions, setFilteredExpressions] = useState([]);

  // setWordsPerPage

  //load the word items from the back end
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

  //load the expression items from the back end
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

  // Pagination
  // so if current page is 1 and there are 5 words per page, then
  // last index of page will be 5
  const indexOfLastWord = currentPage * wordsPerPage;
  const indexOfLastExpression = currentPage * expressionsPerPage;

  // so if last index  of last word is 5 and words per page is 5,
  // then the index of first word will be 1 because index starts at 0.
  const indexOfFirstWord = indexOfLastWord - wordsPerPage;
  const indexOfFirstExpression = indexOfLastExpression - expressionsPerPage;

  // so if the "indexOfFirstWord" is "0" and the "indexOfLastWord"
  // is "5", then the displayed page will include indexes 0-4(words 1-5) and end with index 5, which is not included.
  const currentWords = filteredWords.slice(indexOfFirstWord, indexOfLastWord);
  console.log(currentWords);

  const currentExpressions = filteredExpressions.slice(
    indexOfFirstExpression,
    indexOfLastExpression
  );
  console.log(currentExpressions);

  // Sorting Word, ascending order(alphabetical):
  // Spread operator "spreads" filteredWords into its elements, makes a copy of it, then sorts(mutates) that copy
  // A conditional (ternary) operator is used in this compare function.
  // The array of objects are sorted by comparing the return value(Unicode code point value) of one of the properties(word).
  // if value of a.word is > b.word, return 1, if not return -1

  // > 0 sorts a after b or [b,a]
  // < 0 sorts a before b [a,b]
  // === 0 keeps original of a and b

  const sortWordsAsc = () => {
    const sortedWordsAscending = [...filteredWords].sort((a, b) => {
      return a.word.toLowerCase() > b.word.toLowerCase() ? 1 : -1;
    });
    setFilteredWords(sortedWordsAscending);
    console.log(sortedWordsAscending);
  };

  const sortExpressionsAsc = () => {
    const sortedExpressionsAscending = [...filteredExpressions].sort((a, b) => {
      return a.expression.toLowerCase() > b.expression.toLowerCase() ? 1 : -1;
    });
    setFilteredExpressions(sortedExpressionsAscending);
    console.log(sortedExpressionsAscending);
  };

  // Sorting by word, descending order(alphabetical):
  // Spread operator "spreads" filteredWords into its elements, makes a copy of it, then sorts(mutates) that copy
  // A conditional (ternary) operator is used in this compare function.
  // The array of objects are sorted by comparing the return value(Unicode code point value) of one of the properties(word).
  // if value of a.word is > b.word, return -1, if not return 1

  // > 0 sorts a after b or [b,a]
  // < 0 sorts a before b [a,b]
  // === 0 keeps original of a and b

  const sortWordsDsc = () => {
    const sortedWordsDescending = [...filteredWords].sort((a, b) => {
      return a.word.toLowerCase() > b.word.toLowerCase() ? -1 : 1;
    });
    setFilteredWords(sortedWordsDescending);
    console.log(sortedWordsDescending);
  };

  const sortExpressionsDsc = () => {
    const sortedExpressionsDescending = [...filteredExpressions].sort(
      (a, b) => {
        return a.expression.toLowerCase() > b.expression.toLowerCase() ? -1 : 1;
      }
    );
    setFilteredExpressions(sortedExpressionsDescending);
    console.log(sortedExpressionsDescending);
  };

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
                  sortWordsDsc={sortWordsDsc}
                  sortWordsAsc={sortWordsAsc}
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
                sortExpressionsDsc={sortExpressionsDsc}
                sortExpressionsAsc={sortExpressionsAsc}
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
      </Routes>
    </div>
  );
}

export default App;

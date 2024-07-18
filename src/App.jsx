// import Welcome from "./componenets/Welcome";
import { useEffect, useReducer } from "react";
import Header from "./componenets/Header";
import Error from "./componenets/Error";
import Loader from "./componenets/Loader";
import Welcome from "./componenets/Welcome";
import Question from "./componenets/Question";
import NextButton from "./componenets/NextButton";
import Progress from "./componenets/Progress";
import Finish from "./componenets/Finish";

const initialState = {
  questions: [],
  //loading,error,ready,active,finished
  status: "loading",
  index: 0,
  answer: null,
  points: 0,
};

const reducer = (state, action) => {
  switch (action.type) {
    case "dataReceived":
      return {
        ...state,
        questions: action.payload,
        status: "ready",
      };

    case "dataFailed":
      return {
        ...state,
        status: "error",
      };
    case "start":
      return {
        ...state,
        status: "active",
      };
    case "newAnswer":
      const question = state.questions.at(state.index);
      return {
        ...state,
        answer: action.payload,
        points:
          action.payload === question.correctOption
            ? state.points + question.points
            : state.points,
      };
    case "nextQuestion":
      return {
        ...state,
        index: state.index + 1,
        answer: null,
      };
    case "finish":
      return {
        ...state,
        status: "finished",
      };
    case "resetquiz":
      return {
        ...initialState,
        questions: state.questions,
        status: "ready",
      };
    default:
      throw new Error("unkonw Action");
  }
};

function App() {
  const [{ questions, status, index, answer, points }, dispatch] = useReducer(
    reducer,
    initialState
  );

  const numQuestions = questions.length;
  const maxPossialbePoints = questions.reduce(
    (prev, cur) => prev + cur.points,
    0
  );

  const loadingQuestions = async () => {
    try {
      const res = await fetch("http://localhost:8000/questions");
      if (!res === "ok") throw new Error("Somting went wrong");
      const data = await res.json();
      dispatch({
        type: "dataReceived",
        payload: data,
      });
    } catch (err) {
      dispatch({
        type: "dataFailed",
      });
    }
  };

  useEffect(() => {
    loadingQuestions();
  }, []);
  return (
    <div className=" bg-slate-900 w-full min-h-screen font-raleway text-white">
      {/* <Welcome /> */}
      <Header />

      <div className=" container mx-auto text-white">
        {status === "loading" && <Loader />}
        {status === "error" && <Error />}
        {status === "ready" && (
          <Welcome numQuestions={numQuestions} dispatch={dispatch} />
        )}
        {status === "active" && (
          <>
            <Progress
              index={index}
              numQuestions={numQuestions}
              points={points}
              answer={answer}
              maxPossialbePoints={maxPossialbePoints}
            />
            <Question
              question={questions[index]}
              dispatch={dispatch}
              answer={answer}
            />
            <NextButton
              dispatch={dispatch}
              answer={answer}
              numQuestions={numQuestions}
              index={index}
            />
          </>
        )}
        {status == "finished" && (
          <Finish
            points={points}
            maxPossialbePoints={maxPossialbePoints}
            dispatch={dispatch}
          />
        )}
      </div>
    </div>
  );
}

export default App;

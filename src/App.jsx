// import Welcome from "./componenets/Welcome";
import { useEffect, useReducer } from "react";
import Header from "./componenets/Header";
import Error from "./componenets/Error";
import Loader from "./componenets/Loader";
import Welcome from "./componenets/Welcome";
import QuestionsCom from "./componenets/QuestionsCom";

const initialState = {
  questions: [],
  //loading,error,ready,active,finished
  status: "loading",
  index: 0,
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
    default:
      throw new Error("unkonw Action");
  }
};

function App() {
  const [{ questions, status, index }, dispatch] = useReducer(
    reducer,
    initialState
  );

  const numQuestions = questions.length;

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
        {status === "active" && <QuestionsCom questions={questions[index]} />}
      </div>
    </div>
  );
}

export default App;

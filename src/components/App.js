import React, { useState, useEffect } from "react";
import AdminNavBar from "./AdminNavBar";
import QuestionForm from "./QuestionForm";
import QuestionList from "./QuestionList";

function App() {
  const [page, setPage] = useState("List");
  const [questionsList, setQuestionList] = useState([])

  useEffect(()=>{
    fetch(`http://localhost:4000/questions`)
    .then((r)=>r.json())
    .then((data)=>{
      setQuestionList(data)
     // console.log(data)
    })
  },[])

  function handleUpdateNewQuestion (newQuestion) {
    setQuestionList([...questionsList, newQuestion])
  }

  function handleDeleteButton (questionId) {
    const newQuestionList = questionsList.filter((question)=>
      question.id !== questionId
    )
    setQuestionList(newQuestionList)
  }


  return (
    <main>
      <AdminNavBar onChangePage={setPage} />
      {page === "Form" ? <QuestionForm updateNewQuestion={handleUpdateNewQuestion}/> : <QuestionList onQuestionList={questionsList} onDeleteButton={handleDeleteButton}/>}
    </main>
  );
}

export default App;

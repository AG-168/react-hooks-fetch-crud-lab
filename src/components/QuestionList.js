import React from "react";
import QuestionItem from "./QuestionItem"

function QuestionList({onQuestionList, onDeleteButton}) {


  const handleQuestionDisplay = onQuestionList.map((question)=>
    <QuestionItem key={question.id} question={question} onDeleteButton={onDeleteButton}/>
  )


  return (
    <section>
      <h1>Quiz Questions</h1>
      <ul>
        {handleQuestionDisplay}
      </ul>
    </section>
  );
}

export default QuestionList;

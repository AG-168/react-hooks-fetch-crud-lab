import React, {useState} from "react";

function QuestionItem({ question, onDeleteButton }) {
  const { id, prompt, answers, correctIndex } = question;
  const [correctAnswer, setCorrectAnswer] = useState(correctIndex)

  const options = answers.map((answer, index) => (
    <option key={index} value={index}>
      {answer}
    </option>
  ));

  function handleDeleteButton () {
    //console.log(question.id)
    fetch(`http://localhost:4000/questions/${id}`,{
    method:"DELETE"
    })
    onDeleteButton(id)``
  }

  function handleSelectChange (event) {
    fetch(`http://localhost:4000/questions/${id}`,{
    method:"PATCH",
    headers:{"Content-Type":"application/json"},
    body: JSON.stringify({
      "correctIndex":event.target.selectedIndex
    })
    })
    setCorrectAnswer(event.target.selectedIndex)
  }



  return (
    <li>
      <h4>Question {id}</h4>
      <h5>Prompt: {prompt}</h5>
      <label>
        Correct Answer:
        <select defaultValue={correctAnswer} onChange={handleSelectChange}>{options}</select>
      </label>
      <button onClick={handleDeleteButton}>Delete Question</button>
    </li>
  );
}

export default QuestionItem;

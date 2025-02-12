import './App.css'
const questions = [
  {
    questionText: 'What is the capital of France?',
    answers:[
      {answerText:'New york',isCorrect:false},
      {answerText:'London',isCorrect:false},
      {answerText:'Paris',isCorrect:false},
      {answerText:'Dublin',isCorrect:false},
   
    ]
  },
  {
    questionText: 'What is the capital of Egypt?',
    answers:[
      {answerText:'Cairo',isCorrect:false},
      {answerText:'Riydh',isCorrect:false},
      {answerText:'Moscow',isCorrect:false},
      {answerText:'Dubai',isCorrect:false},
   
    ]
  },

]
function App() {


  return (
    <>
      <div className='container'>
        <div>
          <div className='quizTitle'>Quiz App</div>
          <div>
            <div>{questions[0].questionText}</div>
            {questions[0].answers.map((option,index)=>(
              <button key={index}className='ans-btn'>{option.answerText}</button>
            )
            )}
            <button className='next-btn'>Next</button>
            <p className='ques-count'>Question  of {questions.length}</p>
          </div>
        </div>
      </div>
    </>
  )
}

export default App

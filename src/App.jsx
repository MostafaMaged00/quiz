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
      <div className='App'>
        <div>
          <div className=''>Quiz App</div>
          <div>
            <div>{questions[0]}</div>
          </div>
        </div>
      </div>
    </>
  )
}

export default App

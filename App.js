
import React from 'react';
import { useState } from 'react';
import User from './User';


function App() {

  const questions= [
     
    {
        questionText : 'what is the capital of France?',
        answerOptions : [
                    
          { answerText : 'New York' , isCorrect: false},
          { answerText : 'London' , isCorrect: false},
          { answerText : 'Paris' , isCorrect: true},
          { answerText : 'Dublin' , isCorrect: false},

        ],
    },

    {
      questionText : 'who is the CEO of tesla?',
      answerOptions : [
                  
        { answerText : 'Jeff Bezos' , isCorrect: false},
        { answerText : 'Elon Musk' , isCorrect: true},
        { answerText : 'Bill Gates' , isCorrect: false},
        { answerText : 'Tony Stark' , isCorrect: false},

      ],
  },

  {
    questionText : 'The Iphone was created by which company?',
    answerOptions : [
                
      { answerText : 'Apple' , isCorrect: true},
      { answerText : 'Intel' , isCorrect: false},
      { answerText : 'Amazon' , isCorrect: false},
      { answerText : 'Microsoft' , isCorrect: false},

    ],
},
    
  ];

  const[currentQuestion,setCurrentQuestion] = useState(0);
  const[showScore,setShowScore]=useState(false);
  const[score,SetScore]=useState(0);
  
  const handleAnswerButton=(isCorrect)=>{

    if(isCorrect===true)
    {
              SetScore(score+1);
    }
    const nextQuestion = currentQuestion+1;

    if(nextQuestion<questions.length)
    {
      setCurrentQuestion(nextQuestion);
    }
    else
    {
      setShowScore(true);
    }
    

  };
  
  return(
    

    <div className='App'>

      {
        showScore? 
        (
          <div className='score'> You scored {score} out of {questions.length}</div>
        ):(
      
          <>
     
     <div className='question-section'>
     <div className='question-count'>
       <span>Question {currentQuestion+1}</span>/{questions.length}
     </div>
     <div className='question-text'>
         {questions[currentQuestion].questionText}
     </div>
  </div>
  <div className='answer-section'>

   
             {questions[currentQuestion].answerOptions.map((answerOption)=>(

               <button onClick={()=>handleAnswerButton(answerOption.isCorrect)}>{answerOption.answerText}</button>
      ))}

  </div>
  </>
     
        )}

        
      
     
    </div>
      
    

  );

}


export default App;

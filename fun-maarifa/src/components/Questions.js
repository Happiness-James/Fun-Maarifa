import { React } from "react";


function Questions(props) {
    
    console.log(props)
    let questions = []

    if (props.questions
        && props.questions.questions
        && props.questions.questions.length > 0) {
        questions = props.questions
    } else {
        questions = { questions: [{ question: { quiz: "" }, answers: [] }] }
    }


  const handleChange = (e) => {
    props.answeredQns[e.target.name] = e.target.value
  }


    const allAnswers = (quiz, answers) => {
     
        return answers.map(answer => {
           
            return (
                <>
                    <div className="radioButton">
                        <input onChange={handleChange} className="radioButtonInput" type="radio" value={answer.value + ":"+ answer.correct} name={quiz}/>{answer.value}
                    </div>

                </>

            )

        })

    }



    const allQuestions = questions.questions.map((question) => {
      
        return (

            <div className="cards">
                <h1> {question.question.quiz}</h1><br />
                <div className="answers">
                    {allAnswers(question.question.quiz, question.answers)}
                </div>
                <br />

            </div>

        )
    })


    const question = questions.questions[0]
  

    return (
        <>
            <div className="cards">
                {allQuestions}
            </div>


        </>
    )
}
export default Questions
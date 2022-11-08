import './index.css';
import {useState} from "react";

const questions = [
    {
        title: "What are the school colors of the University of Texas at Austin?",
        variants: [
            "Black, Red",
            "Blue, Orange",
            "White, Burnt Orange",
            "White, Old gold, Gold"
        ],
        correct: 2
    },
    {
        title: "What is 70 degrees Fahrenheit in Celsius?",
        variants: [
            "18.8889",
            "20",
            "21.1111",
            "158"
        ],
        correct: 2
    },
    {
        title: "When was Mahatma Gandhi born?",
        variants: [
            "October 2, 1869",
            "December 15, 1872",
            "July 18, 1918",
            "January 15, 1929"
        ],
        correct: 0
    },
    {
        title: "How far is the moon from Earth?",
        variants: [
            "7,918 miles (12,742 km)",
            "86,881 miles (139,822 km)",
            "238,400 miles (384,400 km)",
            "35,980,000 miles (57,910,000 km)"
        ],
        correct: 2
    }
]

function Result({correct}) {
    return (
        <div className="result">
            <img src="https://cdn-icons-png.flaticon.com/512/2278/2278992.png" />
            <h2>Вы отгадали {correct} ответа из {questions.length}</h2>
            <a href="/">
                <button>Попробовать снова</button>
            </a>
        </div>
    );
}

function Game({question,step ,onClickVariant}) {

    const percent = Math.round(step / questions.length * 100)

    return (
        <>
            <div className="progress">
                <div style={{ width: `${percent}%` }} className="progress__inner"></div>
            </div>
            <h1>{question.title}</h1>
            <ul>
                {question.variants.map((v,index) => (
                    <li onClick={() => onClickVariant(index)} key={v}>{v}</li>
                ))}
            </ul>
        </>
    );
}

function AppQuiz() {
    const [step, setStep] =     useState(0)
    const [correct, setCorrect] = useState(0)
    const question = questions[step]

    const onClickVariant = (index) => {
        console.log(step, index)
        setStep(step + 1)
        if (index === question.correct){
            setCorrect(correct + 1)
        }
    }

    return (
        <div className="App">
            {step !== questions.length ? <Game step={step} question={question}  onClickVariant={onClickVariant}/> : <Result correct={correct}/>}
        </div>
    );
}

export default AppQuiz;

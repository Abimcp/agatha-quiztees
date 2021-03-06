import QuestionCard from '.';
import { render } from 'react-dom'

describe('Question', ()=> {
    const testQuestion={
        category: "Entertainment: Musicals & Theatres",
        type: "multiple",
        difficulty: "hard",
        question: "Which Shakespeare play features the stage direction &quot;Enter a messenger, with two heads and a hand&quot;?",
        correct_answer: "Titus Andronicus",
        incorrect_answers: [
        "Othello",
        "Macbeth",
        "King Lear"
        ]
    }
    
    beforeEach(() => {
        render(<QuestionCard question={testQuestion} selected={(e)=>console.log(e)} />) // , { initState } this might change, may also want to have it render a different init state based on the test
    })
    
    test('Checks that it renders a div with a question class', () => {       
        let question = document.querySelector('.question');
        expect(question).toBeInTheDocument();
    })
})
const quizContainer = document.getElementById('quiz');
console.log(quizContainer)
const submitButton = document.getElementById('submit');
const resultsContainer = document.getElementById('results');
const myQuestions = [
        {
            question: "What does the passage describe?",
            answers: {
                a: "Arizona",
                b: "Arizona State Flag",
                c: "Stars and Stripes"
            },

            correctAnswer: "b"
        },

        {
            question: "What is NOT on the flag?",
            answers: {
                a: "Copper",
                b: "Star",
                c: "Yellow and Red rays"
            },

            correctAnswer: "a"
        },

        {
            question: "Where is the Star on the Flag?",
            answers: {
                a: "in the upper half",
                b: "middle",
                c: "lower half"
            },

            correctAnswer: "b"
        },
        {
            question: "What is the purpose of having the star on the flag?",
            answers: {
                a: "symbolizes Arizona's many starsango",
                b: "symbolic of the rising stararrot",
                c: "symbolic of Arizona's copper industrypple",
                d: "all of the above"
            },

            correctAnswer: "c"
        },
        {
            question: "How many rays are on the flag?",
            answers: {
                a: "12",
                b: "13",
                c: "6",
                d: "7"
            },

            correctAnswer: "b"
        },
        {
            question: "What is the color blue on the Arizona flag compared to?",
            answers: {
                a: "American Flag",
                b: "Stars",
                c: "Stripes"

            },

            correctAnswer: "a"
        },

        {
            question: "Why are there red and yellow rays on the Arizona Flag?",
            answers: {
                a: "to make it pretty",
                b: "to show a setting sun",
                c: "to emphasize the star"
            },

            correctAnswer: "b"
        },
        {
            question: "When did the flag become official?",
            answers: {
                a: "1917",
                b: "1927",
                c: "1937"
            },

            correctAnswer: "a"
        },
        
    ];
(function () {
    function buildQuiz() {
        
        const output = [];
        myQuestions.forEach(
            (currentQuestion, questionNumber) => {
                const answers = [];
                for (letter in currentQuestion.answers) {

                    answers.push(
                        `<label>
                <input type="radio" name="question${questionNumber}" value="${letter}">
                ${letter} :
                ${currentQuestion.answers[letter]}
              </label>`);

                }

                output.push(
                    `<div class="slide">
              <div class="question"> ${currentQuestion.question} </div>
              <div class="answers"> ${answers.join("")} </div>
            </div>`);

            });


        quizContainer.innerHTML = output.join('');
    }

    function showResults() {
        const answerContainers = quizContainer.querySelectorAll('.answers');

        let numCorrect = 0;

        myQuestions.forEach((currentQuestion, questionNumber) => {
            const answerContainer = answerContainers[questionNumber];
            const selector = `input[name=question${questionNumber}]:checked`;
            const userAnswer = (answerContainer.querySelector(selector) || {}).value;

            if (userAnswer === currentQuestion.correctAnswer) {
                numCorrect++;

                answerContainers[questionNumber].style.color = 'lightgreen';
            }
            else {
                
                answerContainers[questionNumber].style.color = 'red';
            }
        });

     
        resultsContainer.innerHTML = `${numCorrect} correct out of ${myQuestions.length}`;
    }

    function showSlide(n) {
        slides[currentSlide].classList.remove('active-slide');
        slides[n].classList.add('active-slide');
        currentSlide = n;
        if (currentSlide === 0) {
            previousButton.style.display = 'none';
        }
        else {
            previousButton.style.display = 'inline-block';
        }
        if (currentSlide === slides.length - 1) {
            nextButton.style.display = 'none';
            submitButton.style.display = 'inline-block';
        }
        else {
            nextButton.style.display = 'inline-block';
            submitButton.style.display = 'none';
        }
    }

    function showNextSlide() {
        showSlide(currentSlide + 1);
    }

    function showPreviousSlide() {
        showSlide(currentSlide - 1);
    }

  
    buildQuiz();


    const previousButton = document.getElementById("previous");
    const nextButton = document.getElementById("next");
    const slides = document.querySelectorAll(".slide");
    let currentSlide = 0;

    showSlide(currentSlide);

    submitButton.addEventListener('click', showResults);
    previousButton.addEventListener("click", showPreviousSlide);
    nextButton.addEventListener("click", showNextSlide);
})();
  var modal = document.getElementById('id01');


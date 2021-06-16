const quiz = [
    {
        question: "兵庫県の面積は全国で何位？",
        answers: ["5位", "12位", "38位"],
        correct: "12位"
    },{
        question: "兵庫県のマスコットキャラクターは次のうちどれ？",
        answers: ["はばたん", "ふなっしー", "メロングマ"],
        correct: "はばたん"
    },{
        question: "兵庫県の最初の知事は誰？",
        answers: ["岩倉具視", "坂本龍馬", "伊藤博文"],
        correct: "伊藤博文"
    }
]


const $button = document.getElementsByTagName("button");
const buttonLength = $button.length;
const quizLength = quiz.length;
let quizIndex = 0;

//ボタンを定義
const setupQuiz = () => {
    document.getElementById("question").textContent = quiz[quizIndex].question; 
    let buttonIndex = 0
    while(buttonIndex < buttonLength){
        $button[buttonIndex].textContent = quiz[quizIndex].answers[buttonIndex];
        buttonIndex++;
    }
}
setupQuiz();

//クリックで正誤判定
let score = 0;
const clickHandler = (e) => {
    if(quiz[quizIndex].correct === e.target.textContent){
        window.alert("正解！");
        score++;
    } else {
        window.alert(`不正解...。正解は${quiz[quizIndex].correct}です！`);
    }
    quizIndex++;
    if(quizIndex < quizLength){
        setupQuiz();
    } else {
        window.alert(`終了！3問中${score}問正解でした！`);
    }
}
let handlerIndex = 0;
while(handlerIndex < buttonLength){
    $button[handlerIndex].addEventListener("click", (e) => {
        clickHandler(e);
    });
    handlerIndex++;
}

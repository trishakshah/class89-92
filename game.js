var name1=localStorage.getItem("name1");
var name2=localStorage.getItem("name2");
var score1=0;
var score2=0;
document.getElementById("player1_name").innerHTML=name1+": ";
document.getElementById("player2_name").innerHTML=name2+": ";
document.getElementById("player1_score").innerHTML=score1;
document.getElementById("player2_score").innerHTML=score2;
document.getElementById("player_question").innerHTML="Question - "+name1;
document.getElementById("player_answer").innerHTML="Question - "+name2;

function send(){
getWord=document.getElementById("wordInput").value;
word=getWord.toLowerCase();
console.log(word);
alpha1=word.charAt(1);
console.log(alpha1);
wordLength=Math.floor(word.length/2);
alpha2=word.charAt(wordLength);
console.log(alpha2);
wordLength2=word.length-1;
alpha3=word.charAt(wordLength2);
console.log(alpha3);
remove1=word.replace(alpha1,"_");
remove2=remove1.replace(alpha2,"_");
remove3=remove2.replace(alpha3,"_");
console.log(remove3);
question="<h4 id='word_display'> Q. "+remove3+"</h4>";
answerInput="<br> Answer: <input type='text' id='input_check_box'>";
checkButton="<br><br><br><button class='btn btn-info' onclick='check()'>Check</button>";
row=question+answerInput+checkButton;
document.getElementById("output").innerHTML=row;
document.getElementById("wordInput").value="";
}

var questionTurn="Player1";
var answerTurn="Player2";

function check(){
    getAnswer=document.getElementById("input_check_box").value;
    answer=getAnswer.toLowerCase();
    console.log(answer);
    if(answer==word){
        if(answerTurn=="Player1"){
            score1=score1+1;
            document.getElementById("player1_score").innerHTML=score1;
        }
else{
    score2=score2+1;
    document.getElementById("player2_score").innerHTML=score2;
}
if(questionTurn=="Player1"){
    questionTurn="Player2";
    document.getElementById("player_question").innerHTML="Question turn - "+name2;
}
else{
    questionTurn="Player1";
    document.getElementById("player_question").innerHTML="Question turn - "+name1;
}
if (answerTurn=="Player1"){
answerTurn="Player2";
document.getElementById("player_answer").innerHTML="Answer turn - "+name2;
}
else {answerTurn="Player1";
document.getElementById("player_answer").innerHTML="Answer turn - "+name1;
}
document.getElementById("output").innerHTML="";
    }
}
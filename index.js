let cells=['','','','','','','','','',];
let currentPlayer= "X";
let result= document.querySelector(".result");
let btns=document.querySelectorAll(".btn");
let conditions=[
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6],
    
];
const ticTacToe=(element, index)=>{
    element.innerHTML =currentPlayer;
   element.disabled=true;
   element.classList.add(currentPlayer==='X'?'x-symbol':'o-symbol');
//    we are adding the classname according to the current player symbol
element.addEventListener('click', function(event){
    event.preventDefault();
});
cells[index]=currentPlayer;
currentPlayer=currentPlayer=='X'? 'O':'X';
result.innerHTML=`Player ${currentPlayer} Turn`;
for(let i=0; i<conditions.length; i++){
    let condition=conditions[i];
    let a=cells[condition[0]];
    let b= cells[condition[1]];
    let c= cells[condition[2]];

    if(a==''|| b==''|| c==''){
        continue
    }
    if((a==b)&&(b==c)){
        result.innerHTML=`Player ${a} won🎉`;
        btns.forEach((btn)=> btn.disabled=true);
        return;
    }
}
if(isTie()){
    result.innerHTML='It\'s a tie😅';
    btns.forEach((btn)=>btn.disabled=true);
}
// isTie=true; //we assumed that the game is a tie
// for(let i=0; i<cells.length; i++){
//    if(cells[i]==''){
//     isTie=false;
//     break;
//    }
// }
//    if(isTie){
//     result.innerHTML='It\'s a tie😅';
//     btns.forEach((btn)=>btn.disabled=true);
//    }
//    else{
    
//    }
};
function isTie(){
    return cells.every(cells=>cell !== '');
}

function reset(){

     cells=['','','','','','','','','',];
    btns.forEach((btn)=>{
        btn.innerHTML='';
        btn.disabled=false;
        btn.classList.remove('x-symbol','o-symbol');
    })
    currentPlayer='X';
    result.innerHTML=`Player X Turn`;
   
}
document.querySelector('#reset').addEventListener('click', reset);
btns.forEach((btn,index)=>{
    btn.addEventListener('click', ()=>ticTacToe(btn,index));
});











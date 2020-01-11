'use strict';
const userNameinput=document.getElementById('user-name');
const assesmentButton=document.getElementById('assesment');
const resultDivided=document.getElementById('result-area');
const tweetDivided=document.getElementById('tweet-area');

function removeAllChildren(element){
    while (element.firstChild){
        element.removeChild(element.firstChild);
    }
}

assesmentButton.onclick=()=>{
    const userName=userNameinput.value;
    if(userName.length===0){    //名前が空の時は何もしない
        return;
    }
removeAllChildren(resultDivided);
const header=document.createElement('h3');
header.innerText='診断結果';
resultDivided.appendChild(header);

const paragraph=document.createElement('p');
const result=assesment(userName);
paragraph.innerText=result;
resultDivided.appendChild(paragraph);
}

const answers = [
    '{userName}のおすすめポジションは投手です。',
    '{userName}のおすすめポジションは捕手です。',
    '{userName}のおすすめポジションは一塁手です。',
    '{userName}のおすすめポジションは二塁手です。',
    '{userName}のおすすめポジションは三塁手です。',
    '{userName}のおすすめポジションは遊撃手です。',
    '{userName}のおすすめポジションは左翼手です。',
    '{userName}のおすすめポジションは中堅手です。',
    '{userName}のおすすめポジションは左翼手です。',
];

const uniNumber='背番号は{uni}です。'

/**
 * 名前の文字列を渡すと診断結果を返す関数
 * @param{string} userName ユーザーの名前
 * @return{string} 診断結果
 */

 function assesment(userName){
     // 全ての文字のコード番号を取得し、足し合わせる

    let sumOfCharCode =0;
    for (let i=0;i<userName.length;i++){
        sumOfCharCode+=userName.charCodeAt(i);
    }

    // 文字のコード番号の合計を回答の数で割って添え字の数値を求める

    const index=sumOfCharCode%answers.length;
    let result1=answers[index];

    //背番号を乱数で決める。整数に
    var rannumber = Math.floor(Math.random()*100);
    let result2=uniNumber;

    result1=result1.replace(/\{userName\}/g,userName);
    result2=result2.replace(/\{uni\}/g,rannumber);

    let result=result1+result2;

     return result;
 }


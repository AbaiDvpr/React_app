import React, { useState } from "react";

function Quiz(){
    const [answer,setAnswer]=useState('C');
    const [my_answer,setMy_answer]=useState(null);

    const funct_Answer=(item)=>{
        setMy_answer(item)
    }

    const checkMyAnswer = ()=>{
        if(my_answer==null){
            alert("Жауабынызды белгыленыз")
        }else{
            if(answer==my_answer){
                alert("дурыс")
            }
            else if(answer != my_answer ){
                alert("Кате")
            }
        }
    }
    return(
        <>
            <h1>
                дурыс жауабы:{answer}
                <br />
                менын жауабы:{my_answer}
            </h1>
            <div className="quiz-container">
                <h2>Quiz Time!</h2>
                <p className="question">What is the capital of France?</p>
                <div className="options">
                    <button onClick={()=>funct_Answer('A')} className={`option ${my_answer=='A' ? 'active' : ''} `}>A) Berlin</button>
                    <button onClick={()=>funct_Answer('B')} className={`option ${my_answer=='B' ? 'active' : ''} `}>B) Madrid</button>
                    <button onClick={()=>funct_Answer('C')} className={`option ${my_answer=='C' ? 'active' : ''} `}>C) Paris</button>
                    <button onClick={()=>funct_Answer('D')} className={`option`}>D) Rome</button>
                </div>

                <button className=" check-btn" onClick={()=>checkMyAnswer()}>
                    Жауабымды тексеру
                </button>

            </div>


          

        </>
    )
}
export default Quiz;
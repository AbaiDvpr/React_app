import React from "react";
import { useState } from "react";

function About(){

    const [page,setPage]=useState(1);

    const [test___1,setTest___1]=useState(null);
    const [test___2,setTest___2]=useState(null);
    const [test___3,setTest___3]=useState(null);
    const [test___4,setTest___4]=useState(null);


    const [quiz_test, setQuiz_test] = useState(
        [
            {
                surak: '1. Столица Казахстана?',
                zhauaby: 'Астана',
                test1: 'Астана',
                test2: 'Алматы',
                test3: 'Шымкент',
                test4: 'Актобе',
            },
            {
                surak: '2. Какой язык программирования используется в React?',
                zhauaby: 'JavaScript',
                test1: 'Python',
                test2: 'C++',
                test3: 'JavaScript',
                test4: 'Java',
            },
            {
                surak: '3. Сколько континентов на планете?',
                zhauaby: '7',
                test1: '5',
                test2: '6',
                test3: '7',
                test4: '8',
            },
            {
                surak: '4. Какой тег в HTML для ссылки?',
                zhauaby: '<a>',
                test1: '<div>',
                test2: '<span>',
                test3: '<a>',
                test4: '<p>',
            },
      ]);

    const check =(zhauap_nomery)=> {
        if(page==1){
            setTest___1(zhauap_nomery)
        }

        if(page==2){
            setTest___2(zhauap_nomery)
        }

        if(page==3){
            setTest___3(zhauap_nomery)
        }

        if(page==4){
            setTest___4(zhauap_nomery)
        }
    }
    const toActiv=(number)=>{
        setPage(number)
    }
    return(
        <>


            <div>
                
               
                {/* page- =[1,2,3,4]
                quiz_Test=[0,1,2,3] */}
                <h1>
                    Active page {page}
                </h1>

                <button onClick={() => toActiv(1)} className={`btn_page ${page==1 ? 'active_btn' : ''}`}>1шы cуракты алу</button>
                <button onClick={() => toActiv(2)} className={`btn_page ${page==2 ? 'active_btn' : ''}`}>2шы cуракты алу</button>
                <button onClick={() => toActiv(3)} className={`btn_page  ${page==3 ? 'active_btn' : ''}`}>3шы cуракты алу</button>
                <button onClick={() => toActiv(4)} className={`btn_page  ${page==4 ? 'active_btn' : ''}`}>4шы cуракты алу</button>
             
            

            </div>
            

            <div>
                    <p>
                        тандалган элемент 1 _ сурак бойынша {test___1}
                        </p>

                        <p>
                        тандалган элемент 2 _ сурак бойынша {test___2}
                        </p>

                        <p>
                        тандалган элемент 3 _ сурак бойынша {test___3}
                        </p>

                        <p>
                        тандалган элемент 4 _ сурак бойынша {test___4}
                        </p>
                <h3>
                    {quiz_test[page-1].surak}
                </h3>
                    <p>
                    {quiz_test[page-1].zhauaby}
                    </p>

                    <div className="">
                        <button onClick={()=>check(1)}> 
                            {quiz_test[page-1].test1}
                        </button>
                        <button  onClick={()=>check(2)}>
                            {quiz_test[page-1].test2}
                        </button>
                        <button onClick={()=>check(3)}>
                            {quiz_test[page-1].test3}
                        </button>
                        <button onClick={()=>check(4)}>
                            {quiz_test[page-1].test4}
                        </button>
                    </div>
              


            </div>



          
        </>
    )
}
export default About;
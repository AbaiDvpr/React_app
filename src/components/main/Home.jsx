import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { increment,decrement,incrementByAmount } from "../../slices/counterSlices";
import { korsetu,owiru } from "../../slices/infoSlice";



function Home() {
    const showStatus=useSelector((state)=>state.info2.show)
    const count=useSelector((state)=>state.counter2.value)
    const dispatch = useDispatch();
    const check1 = ()=>{
        if(showStatus==true){
            dispatch(owiru())
        }
        else{
            dispatch(korsetu())
        }
    }
    return (
        <>
            <div>
                <h1>
                    {showStatus  == true ? 'koru kerek' : 'korsetpeymyz' }
                    <br />
                </h1>
                {
                    showStatus == true ?
                    <>
                            <p>
                            Биздин сайтымызды кору ушын осы ссылкамен танысыныз
                            </p>
                            <button onClick={()=>check1()} > алып тастау </button>    
                    </>
                    :
                    <>
                    </>
                }
            </div>
            <h1>
                count :{count}
            </h1>
            <button onClick={()=> dispatch(decrement())}> -1 </button>
            <button onClick={()=> dispatch(increment())}> +1 </button>
            <button onClick={()=> dispatch(incrementByAmount(5))}> +5 </button>
        </>
    )
}
export default Home;
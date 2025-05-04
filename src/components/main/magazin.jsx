import React, { useState } from "react"

function Magazin(){



    const allProducts=[
        {
            title:'Iphone 15',
            price:350000,
            size:256,
            color:'black',
            img:'https://api.technodom.kz/f3/api/v1/images/800/800/265269_1.jpg'

        },
        {
            title:'Iphone 16',
            price:450000,
            size:256,
            color:'black',
            img:'https://mac-center.com/cdn/shop/files/IMG-10942145_9f7ece93-39fc-4310-a98d-9c11efa3a51e.jpg?v=1723752783'
        },
        {
            title:'Iphone 16',
            price:550000,
            size:512,
            color:'white',
            img:'https://iplanet.one/cdn/shop/files/iPhone_15_Blue_PDP_Image_Position-1__en-IN.jpg?v=1695427876'
        }
        
    ];
    const [products,setProducts]=useState(allProducts)


    const [minValue,setMinValue]=useState(null);
    const [maxValue,setMaxValue]=useState(null);

    const toFilter =()=>{
        var minValue__filter=0
        
        if(minValue == null || minValue == ''){
            console.log("bir")
            minValue__filter=0
        }
        else{
            console.log("eki")

            minValue__filter=minValue
        }

        //--------------------------- 

        var maxValue__filter=0
        
        if(maxValue == null || maxValue == '' ){
            console.log("bir")
            maxValue__filter=Infinity
        }
        else{
            console.log("eki")

            maxValue__filter=maxValue
        }




        console.log("минимум прайс: "+ minValue__filter )
        console.log("maximum прайс: "+ maxValue__filter )

        const filtered = allProducts.filter(
            (item) =>  (item.price>=minValue__filter && item.price<=maxValue__filter)
        )
        console.log(filtered)

        setProducts(filtered)

    }

    const change_input_min = (event) =>{
        setMinValue(event.target.value)
    }

    const change_input_max = (event) =>{
        setMaxValue(event.target.value)
    }

    return(
        <>
            <div className="kaspi-container">
                <div className="kaspi-filter">
                    <p>
                        прайс Min:{minValue}
                    </p>

                    {/* <input onChange={ ()=> change_input(event) } type="text" /> */}
                    <input onChange={change_input_min} type="number" />



                    <p>
                        прайс Max:{maxValue}
                    </p>

                    <input onChange={change_input_max}  type="number" />

                    <br />



                    <p>

                        minSize:{}
                    </p>

                    <input type="text" />

                    <p>

                    maxSize:{}
                    </p>

                    <input type="text" />

                    <br />


                    <p>
                        color:
                    </p>

                    <button>
                        grey
                    </button>

                        
                    <button>
                        blue
                    </button>
                    
                    <br />
                    <br />

                    <button onClick={()=>toFilter()}>
                        табу
                    </button>

                </div>

                <div className="kaspi-products">

                    {
                        products.map((item)=>(
                            <div className="kaspi-products-item">
                                <img className="kaspi_img_product" src={item.img} alt="" />

                                <p>
                                    {item.title}
                                </p>

                                <p>
                                    {item.price}
                                </p>
                            </div>

                        ))
                    }
                     
                </div>
            </div>
        </>
    )
}

export default Magazin
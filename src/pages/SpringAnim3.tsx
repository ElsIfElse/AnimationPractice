import { animated, useSpring } from "@react-spring/web";
import { useEffect, useRef, useState } from "react";
import MainMenuBtn from "../compontents/MainMenuBtn";



const SpringAnim3 = () => {

    const [size,setSize] = useState<number>(1)
    const [color,setColor] = useState<number>(1)

    const colorsArray = ['green','black','yellow','white','brown','blue']

    const prevSize = useRef(size)
    const prevColor = useRef(color)

    const [anim,animApi] = useSpring(()=>({
        from:{scale:'1',transform:'translateX(0px)',backgroundColor:''}
    }))

    const anim1 = ()=>{
        animApi.start({
            from:{scale:`${prevSize.current}`,transform:'translateX(0px)',backgroundColor:colorsArray[prevColor.current]},
            to:{scale:`${size}`,transform:'translateX(0px)',backgroundColor:colorsArray[color]},
            config:{mass:1,friction:10}
        })
    }

    // Size change
    const addSize = function(){
        setSize(size+1)
    }
    const shrinkSize = function(){
        if(size > 0){
            setSize(size-1)
        }
    }
    useEffect(()=>{
        anim1()
        prevSize.current = size
    // eslint-disable-next-line react-hooks/exhaustive-deps
    },[size])

    // Color change
    const nextColor = function(){
        if(color === colorsArray.length-1){
            setColor(0)
        }
        else{
            setColor(color+1)
        }
    }
    const previousCol = function(){
        if(color === 0){
            setColor(colorsArray.length-1)
        }
        else{
            setColor(color-1)
        }
    }
    useEffect(()=>{
        anim1()
        prevColor.current = color
        console.log(color);
    // eslint-disable-next-line react-hooks/exhaustive-deps
    },[color])


    return ( 
        <div className="flex items-center flex-col h-screen w-screen bg-blue-300">
            <div className="box">
                <animated.div style={anim} className="h-[100px] w-[100px] rounded-full bg-green-500">

                </animated.div>
            <div className="mt-[300px] flex flex-col w-[400px]">
                {/* <button onClick={anim1} className="navbtn">Start</button> */}
                <div className="flex flex-row w-full justify-around">
                    <button onClick={addSize} className="navbtn">Add Size</button>
                    <button onClick={shrinkSize} className="navbtn">Smaller it</button>
                </div>
                <div className="flex flex-row w-full justify-around mt-5">
                    <button onClick={nextColor} className="navbtn">Next Color</button>
                    <button onClick={previousCol} className="navbtn">Previous Color</button>
                </div>
                <div className="flex flex-row w-full justify-around mt-5">
                    <p className="capitalize text-2xl text-slate-800">Color: {colorsArray[color]}</p>
                    <p className="capitalize text-2xl text-slate-800">Size: {size}</p>
                </div>
            </div>
            <MainMenuBtn/>
            </div>
        </div>
     );
}
 
export default SpringAnim3;
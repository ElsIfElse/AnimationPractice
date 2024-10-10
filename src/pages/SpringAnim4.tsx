import { animated, useTrail } from "@react-spring/web";
import { useEffect, useRef, useState } from "react";
import MainMenuBtn from "../compontents/MainMenuBtn";

const SpringAnim4 = () => {

    const [xPos,setXPos] = useState<number>(0)
    const [yPos,setYpos] = useState<number>(0)

    const xRef = useRef<number>(xPos)
    const yRef = useRef<number>(yPos)

    const [isMoving,setIsMoving] = useState<boolean>(false)

    const [speed,setSpeed] = useState<number>(1)


    const [anim,animApi] = useTrail(4,
        ()=>({
        from:{opacity:1,transform:'translateY(0px) translateX(0px)'},
        config:{mass:2,friction:20,tension:200},
    }),
    []
)

    // Animation settings
    const animating = ()=>{
        animApi.start({
            onStart:()=>{setIsMoving(true)},
            from:{opacity:1,transform:`translateY(${yRef.current}px) translateX(${xRef.current}px)`},
            to:{opacity:1,transform:`translateY(${yPos}px) translateX(${xPos}px)`},
            config:{mass:1,friction:10,tension:100},
            onRest:()=>{setIsMoving(false)}
            
        })
    }

    // Button Press Controls
    const buttonPress = function(event:KeyboardEvent){
        if(!isMoving){
            if(event.key === 'W' || event.key === 'w'){
                setYpos(yPos-(100*speed))
            }
            if(event.key === 'S' || event.key === 's'){
                setYpos(yPos+(100*speed))
            }
            if(event.key === 'A' || event.key === 'a'){
                setXPos(xPos-(100*speed))
            }
            if(event.key === 'D' || event.key === 'd'){
                setXPos(xPos+(100*speed))  
            }
        }

        if(event.key === 'R' || event.key === 'r'){
            setXPos(0);setYpos(0)
        }
    }

    useEffect(()=>{
        animating()
        xRef.current = xPos
        yRef.current = yPos
    // eslint-disable-next-line react-hooks/exhaustive-deps
    },[xPos, yPos])

    // Button press event listener
    useEffect(()=>{
            window.addEventListener('keydown',buttonPress);
            return () => window.removeEventListener('keydown', buttonPress);
    },)

    return ( 
        <div className="flex items-center flex-col h-screen w-screen bg-blue-300">
            <div className="box">
                {anim.map((prop,index)=>(
                    <animated.div key={index} style={prop} className="h-[100px] w-[100px] rounded-full bg-green-300 mt-10">
                        
                    </animated.div>
                ))}
            </div>
            
            <div className="flex flex-row items-center w-1/4 justify-center">
                <ul className="flex flex-col w-3/4 items-center">
                <h2 className="text-xl mb-5">Controls:</h2>
                    <li className="text-2xl">Up..........W</li>
                    <li className="text-2xl">Down.....S</li>
                    <li className="text-2xl">Left........A</li>
                    <li className="text-2xl">Right......D</li>
                    <li className="text-2xl">Reset.....R</li>
                </ul>
                <div className="flex flex-col w-3/4 items-center justify-center">
                    <h1 className="text-2xl">Set Speed</h1>
                    <input className="bg-white border border-black p-2 text-slate-800" onChange={(e)=>setSpeed(Number(e.target.value))} type="number" />
                    <h1 className="text-2xl">Position</h1>
                    <h1 className="text-xl">X: {xPos} || Y: {yPos}</h1>
                </div>
                <div className="flex flex-col w-3/4 items-center justify-center">
                    {isMoving ? <h1 className="text-3xl text-red-800">Can't move</h1> : <h1 className="text-3xl text-green-600">Can move</h1>}
                </div>
            </div>
            <MainMenuBtn/>
        </div>
     );
}
 
export default SpringAnim4;
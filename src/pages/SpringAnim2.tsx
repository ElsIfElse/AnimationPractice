import { animated, useSpring } from "@react-spring/web";
import MainMenuBtn from "../compontents/MainMenuBtn";

const SpringAnim2 = () => {

    const [grow,growApi] = useSpring(()=>({
        from:{scale:'0', transform:'translateX(0px)'}
    }))

    const startAnim1 = ()=>{
        growApi.start({
            from:{scale:'0',transform:'translateX(0px)'},
            to:{scale:'1',transform:'translateX(100px)'},
            config:{mass:0.5,friction:10,tension:50},
            reverse:false,
            onRest:()=>{startAnim2()}
        })
    }
    const startAnim2 = ()=>{
        growApi.start({
            from:{scale:'1',transform:'translateX(100px)'},
            to:{scale:'2',transform:'translateX(-100px)'},
            onRest:()=>{startnAnim3()},
            reverse:false
        })
        
    }

    const startnAnim3 = ()=>{
        growApi.start({
            from:{scale:'2',transform:'translateX(-100px)'},
            to:{scale:'3',transform:'translateX(-300px)'},
            reverse:false,
            config:{mass:1,friction:10,tension:50},
            onRest:()=>{startnAnim4()}
        })
    }

    const startnAnim4 = ()=>{
        growApi.start({
            from:{scale:'3',transform:'translateX(-300px)'},
            to:{scale:'0',transform:'translateX(0px)'},
            reverse:false,
            config:{mass:1,friction:10,tension:50},
            onRest:()=>{startAnim1()}
        })
    }

    const stopAnim = ()=>{
        growApi.pause()
    }

    const resumeAnim = ()=>{
        growApi.resume()
    }

    
    return ( 
        <div className="flex items-center flex-col h-screen w-screen bg-blue-300">
            <div className="box">

            <animated.div style={{...grow}} className="h-[100px] w-[100px] rounded-full bg-green-500">

            </animated.div>
            <div className="flex flex-row mt-10 w-1/6 justify-between">
                <button onClick={startAnim1} className="navbtn">Start</button>
                <button onClick={stopAnim} className="navbtn">Pause</button>
                <button onClick={resumeAnim} className="navbtn">Resume</button>

            </div>


            </div>
            <MainMenuBtn/>
        </div>
     );
}
 
export default SpringAnim2;
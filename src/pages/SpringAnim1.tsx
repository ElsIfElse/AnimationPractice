import { animated, useSpring } from "@react-spring/web";
import MainMenuBtn from "../compontents/MainMenuBtn";

const SpringAnim1 = () => {

    const [springs, api] = useSpring(() => ({
        from: { opacity: 0, transform: 'translateX(0px)' },
      }))

      const startAnim = () => {
        api.start({
          from: {
            opacity: 0,transform: 'translateX(0px)'
          },
          to: {
            opacity: 100,transform: 'translateX(400px)'
          },
          config:{mass:5,friction:100}
        })
      }

      const resumeAnim = ()=>{
        api.resume()
      }

      const stopAnim = () => {
        api.stop()}

    return ( 
        <div className="flex items-center flex-col h-screen w-screen bg-blue-300">
            <div className="box">
                <animated.div style={{...springs}} className="h-[100px] w-[100px] rounded-full bg-green-500">

                </animated.div>

                <button onClick={startAnim}>Start </button>
                <button onClick={stopAnim}>Stop</button>
                <button onClick={resumeAnim}>Resume</button>
            </div>
            <MainMenuBtn/>
        </div>
     );
}
 
export default SpringAnim1;
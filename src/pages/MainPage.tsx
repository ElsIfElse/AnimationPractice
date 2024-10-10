import { Link } from "react-router-dom";
const MainPage = () => {
    return ( 
        <div className="flex items-center flex-col h-screen w-screen bg-blue-300">
            <div className="w-3/4 h-screen flex flex-col items-center justify-center">
                <Link className="navbtn" to={'/anim1'}>Animation 1</Link>
                <Link className="navbtn mt-5" to={'/anim2'}>Animation Chain with Api</Link>
                <Link className="navbtn mt-5" to={'/anim3'}>Animation Settings</Link>
                <Link className="navbtn mt-5" to={'/anim4'}>Key Snake</Link>
            </div>
        </div>
     );
}
 
export default MainPage;
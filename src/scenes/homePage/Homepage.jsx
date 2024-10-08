// import React, { useEffect, useState } from "react";
// import { useUser } from "../../contexts/userContext";
// import { useNavigate } from "react-router-dom";
// import axios from "axios";
// import Navbar from "../navbar/Navbar";

// const Homepage = () => {
//     const { user } = useUser();
//     const navigate = useNavigate();
//     const [userDet, setUserDet] = useState();

//     useEffect(() => {
//         const checkAuth = async () => {
//             if (!user) {
//                 try {
//                     const response = await axios.get("http://127.0.0.1:6001/auth/checkAuth", { withCredentials: true });
//                     if (response.data.status !== "success") {
//                         navigate("/");
//                     }
//                 } catch (error) {
//                     navigate("/");
//                 }
//             }
//         };
//         checkAuth();
//     }, [user, navigate]); 

//     setUserDet(user);
//     console.log("through react context - ", user);
//     console.log("through useState - ", userDet);
    
//     if (!user) return(
//         <div className="text-2xl my-20 text-center">
//             User not found !!!
//         </div>
//     );

//     return (
//         <>
//             <Navbar />
//             <div className="flex flex-row justify-center my-24">
//                 <div className="artboard artboard-horizontal phone-6 bg-gray-700 rounded-3xl flex flex-row p-5">
//                     <div className="w-1/2">1</div>
//                     <div className="w-1/2">2</div>
//                 </div>
//             </div>
//         </>
//     );
// };

// export default Homepage;



const Homepage = ()=>{


    return(
        <div>
            homepage
        </div>
    )
}


export default Homepage;
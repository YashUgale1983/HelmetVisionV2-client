import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { toast } from "react-toastify";



const Navbar = ()=>{
    const navigate = useNavigate();

    const handleLogout = async () => {
        try {
            const res = await axios({
                method: "GET",
                url: "http://127.0.0.1:6001/auth/logout",
                withCredentials: true,
            });
            if (res.data.status === "success") {
                toast.success("Logging you out...");
                setTimeout(() => {
                    navigate("/");
                }, 2000);
            }
        } catch (err) {
            console.log(err);
            toast.error("Error logging out. Try again later...");
        }
    };

    return(
        <div className="navbar bg-white text-black">
            <div className="flex-1">
                <Link className="btn btn-ghost text-xl font-normal">HelmetVision</Link>
            </div>
            <div className="flex-none">
                <ul className="menu menu-horizontal px-1">
                <li><Link to="/home">Home</Link></li>
                <li><Link to="/instances">Instances</Link></li>
                <li><Link to="/challans">Challans</Link></li>
                <li><Link to="/profile">Profile</Link></li>
                <li><button onClick={handleLogout}>Logout</button></li>
                </ul>
            </div>
        </div>
    )
}

export default Navbar;
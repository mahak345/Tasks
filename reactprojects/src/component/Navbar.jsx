// // import { Link, useNavigate } from "react-router-dom";
// // import { isAuthenticated, logout } from "../auth";

// // function Navbar() {
// //     const navigate = useNavigate();

// //     const handleLogout = () => {
// //         logout();
// //         navigate("/login");
// //     };

// //     return (
// //         <nav style={styles.nav}>
// //             <h2>MyApp</h2>

// //             <div>
// //                 {!isAuthenticated() ? (
// //                     <>
// //                         <Link to="/login" style={styles.link}>Login</Link>
// //                         <Link to="/signup" style={styles.link}>Signup</Link>
// //                     </>
// //                 ) : (
// //                     <>
// //                         <Link to="/dashboard" style={styles.link}>Dashboard</Link>
// //                         <Link to="/profile" style={styles.link}>Profile</Link>
// //                         <button onClick={handleLogout} style={styles.btn}>
// //                             Logout
// //                         </button>
// //                     </>
// //                 )}
// //             </div>
// //         </nav>
// //     );
// // }

// // const styles = {
// //     nav: {
// //         display: "flex",
// //         justifyContent: "space-between",
// //         padding: "15px",
// //         background: "#333",
// //         color: "#fff"
// //     },
// //     link: {
// //         margin: "0 10px",
// //         color: "#fff",
// //         textDecoration: "none"
// //     },
// //     btn: {
// //         marginLeft: "10px",
// //         padding: "5px 10px",
// //         cursor: "pointer"
// //     }
// // };

// // export default Navbar;


// import { Link } from "react-router-dom";

// function Navbar() {
//     return (
//         <nav>
//             <h2>MyApp</h2>

//             <div>
//                 <Link to="/login">Login</Link>{" "}
//                 <Link to="/signup">Signup</Link>{" "}
//                 <Link to="/dashboard">Dashboard</Link>{" "}
//                 <Link to="/profile">Profile</Link>
//             </div>
//         </nav>
//     );
// }

// export default Navbar;


//congito
import { Link, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";

function Navbar() {
    const [isAuth, setIsAuth] = useState(false);
    const navigate = useNavigate();

    useEffect(() => {
        const user = localStorage.getItem("user");
        setIsAuth(!!user);
    }, []);

    const handleLogout = () => {
        localStorage.removeItem("user");
        setIsAuth(false);
        navigate("/login");
    };

    return (
        <nav>
            <h2>MyApp</h2>

            <div>
                {!isAuth ? (
                    <>
                        <Link to="/login">Login</Link>
                        <Link to="/signup">Signup</Link>
                    </>
                ) : (
                    <>
                        <Link to="/dashboard">Dashboard</Link>
                        <Link to="/profile">Profile</Link>
                        <button onClick={handleLogout}>Logout</button>
                    </>
                )}
            </div>
        </nav>
    );
}

export default Navbar;
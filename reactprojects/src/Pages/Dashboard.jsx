import React from "react";

export default function Dashboard() {

    const user = {
        firstName: localStorage.getItem("firstName"),
        lastName: localStorage.getItem("lastName"),
        email: localStorage.getItem("email"),
    };

    return (
        <div style={{ display: "flex", justifyContent: "center", marginTop: "60px" }}>

            <div style={{
                width: "320px",
                padding: "20px",
                border: "1px solid #ccc",
                borderRadius: "12px",
                boxShadow: "0 4px 12px rgba(0,0,0,0.1)",
                textAlign: "center"
            }}>

                <h2>Dashboard</h2>

                <img
                    src="https://randomuser.me/api/portraits/women/44.jpg"
                    alt="profile"
                    width="90"
                    height="90"
                    style={{ borderRadius: "50%", margin: "10px 0" }}
                />

                <h3>
                    {user.firstName} {user.lastName}
                </h3>

                <p style={{ color: "gray" }}>{user.email}</p>

                <hr />

                <button
                    onClick={() => {
                        localStorage.clear();
                        window.location.href = "/login";
                    }}
                    style={{
                        width: "100%",
                        padding: "10px",

                        color: "white",
                        border: "none",
                        borderRadius: "8px",
                        cursor: "pointer"
                    }}
                >
                    Logout
                </button>

            </div>
        </div>
    );
}
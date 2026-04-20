import { useState } from "react";
import { CognitoUser, CognitoUserPool } from "amazon-cognito-identity-js";

const poolData = {
    UserPoolId: "ap-south-1_Lwxf6ioCn",
    ClientId: "4iker1onsa93qf36qgncbbaarp"
};

const userPool = new CognitoUserPool(poolData);

function Verify() {
    const [otp, setOtp] = useState("");

    const handleVerify = () => {
        const email = localStorage.getItem("email");

        if (!email) {
            alert("Email missing");
            return;
        }

        const cognitoUser = new CognitoUser({
            Username: email,
            Pool: userPool
        });

        cognitoUser.confirmRegistration(otp.trim(), true, (err, result) => {
            if (err) {
                console.error(err);
                return alert(err.message);
            }

            alert("Account verified 🎉");
            localStorage.removeItem("email");
            window.location.href = "/login";
        });
    };

    return (
        <div style={{ textAlign: "center", marginTop: "100px" }}>
            <h2>Enter OTP</h2>

            <input
                type="text"
                placeholder="Enter OTP"
                onChange={(e) => setOtp(e.target.value)}
            /><br /><br />

            <button onClick={handleVerify}>Verify</button>
        </div>
    );
}

export default Verify;
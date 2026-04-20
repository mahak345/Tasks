import { useState } from "react";
import { CognitoUser, CognitoUserPool } from "amazon-cognito-identity-js";

const poolData = {
    UserPoolId: 'ap-south-1_Lwxf6ioCn',
    ClientId: '4iker1onsa93qf36qgncbbaarp'

};

const userPool = new CognitoUserPool(poolData);

function Verify() {
    const [otp, setOtp] = useState("");
    const email = localStorage.getItem("email");

    const handleVerify = () => {
        const userData = {
            Username: email,
            Pool: userPool
        };

        const cognitoUser = new CognitoUser(userData);

        cognitoUser.confirmRegistration(otp, true, (err, result) => {
            if (err) {
                alert(err.message);
                return;
            }

            alert("Account verify ho gaya 🎉");
            window.location.href = "/";
        });
    };

    return (
        <div style={{ textAlign: "center", marginTop: "100px" }}>
            <h2>Enter OTP</h2>

            <input
                type="text"
                placeholder="OTP"
                onChange={(e) => setOtp(e.target.value)}
            /><br /><br />

            <button onClick={handleVerify}>Verify</button>
        </div>
    );
}

export default Verify;
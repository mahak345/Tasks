// src/auth.js

// export const isAuthenticated = () => {
//     return !!localStorage.getItem("user");
// };

// export const logout = () => {
//     localStorage.removeItem("user");
// };
// import {
//     CognitoUserPool,
//     CognitoUser,
//     AuthenticationDetails
// } from "amazon-cognito-identity-js";

// const poolData = {
//     UserPoolId: '',
//     ClientId: ''

// };

// const userPool = new CognitoUserPool(poolData);

// export const loginUser = (email, password) => {

//     const authenticationDetails = new AuthenticationDetails({
//         Username: email.trim(),
//         Password: password
//     });

//     const cognitoUser = new CognitoUser({
//         Username: email.trim(),
//         Pool: userPool
//     });

//     cognitoUser.authenticateUser(authenticationDetails, {

//         onSuccess: (result) => {
//             console.log("LOGIN SUCCESS");

//             const accessToken = result.getAccessToken().getJwtToken();
//             const idToken = result.getIdToken().getJwtToken();

//             localStorage.setItem("accessToken", accessToken);
//             localStorage.setItem("idToken", idToken);

//             alert("Login Successful ✅");
//             window.location.href = "/dashboard";
//         },

//         onFailure: (err) => {
//             console.log("ERROR:", err);

//             if (err.code === "NotAuthorizedException") {
//                 alert("❌ Incorrect username or password");
//             } else if (err.code === "UserNotFoundException") {
//                 alert("❌ User not found");
//             } else if (err.code === "UserNotConfirmedException") {
//                 alert("❌ User not confirmed (OTP pending)");
//             } else {
//                 alert(err.message);
//             }
//         }
//     });
// };


export const isAuthenticated = () => {
    return !!localStorage.getItem("accessToken");
};

export const logout = () => {
    localStorage.removeItem("accessToken");
    localStorage.removeItem("idToken");
};

import {
    CognitoUserPool,
    CognitoUser,
    AuthenticationDetails
} from "amazon-cognito-identity-js";

const poolData = {
    UserPoolId: 'ap-south-1_Lwxf6ioCn',
    ClientId: '4iker1onsa93qf36qgncbbaarp'

};

const userPool = new CognitoUserPool(poolData);
export const loginUser = (email, password) => {

    if (!email || !password) {
        alert("Email aur password required hai");
        return;
    }

    const authenticationDetails = new AuthenticationDetails({
        Username: email.trim(),
        Password: password
    });

    const cognitoUser = new CognitoUser({
        Username: email.trim(),
        Pool: userPool
    });

    cognitoUser.authenticateUser(authenticationDetails, {

        onSuccess: (result) => {
            const accessToken = result.getAccessToken().getJwtToken();
            const idToken = result.getIdToken().getJwtToken();

            localStorage.setItem("accessToken", accessToken);
            localStorage.setItem("idToken", idToken);

            console.log("LOGIN SUCCESS");

            window.location.href = "/dashboard";
        },

        onFailure: (err) => {
            console.error("FULL ERROR:", err);

            switch (err.code) {
                case "NotAuthorizedException":
                    alert("❌ Incorrect email or password");
                    break;

                case "UserNotFoundException":
                    alert("❌ User does not exist");
                    break;

                case "UserNotConfirmedException":
                    alert("❌ Please verify OTP first");
                    break;

                default:
                    alert(err.message);
            }
        }
    });
};
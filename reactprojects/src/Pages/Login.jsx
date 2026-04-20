// // // import { useState } from "react";
// // // import { Container, Row, Col, Card, Form, Button, InputGroup } from "react-bootstrap";
// // // import { Formik } from "formik";
// // // import * as Yup from "yup";
// // // import "./Login.scss";

// // // const LoginSchema = Yup.object().shape({
// // //     email: Yup.string()
// // //         .email("Invalid email")
// // //         .required("Email is required"),

// // //     password: Yup.string()
// // //         .required("Password is required"),
// // // });

// // // function Login() {
// // //     const [showPassword, setShowPassword] = useState(false);

// // //     return (
// // //         <div className="login-wrapper">
// // //             <Container className="h-100">
// // //                 <Row className="justify-content-center align-items-center h-100">
// // //                     <Col md={5}>
// // //                         <Card className="login-card shadow-lg border-0">
// // //                             <Card.Body>
// // //                                 <h3 className="text-center fw-bold mb-2">
// // //                                     Welcome Back 👋
// // //                                 </h3>
// // //                                 <p className="text-center text-muted mb-4">
// // //                                     Sign in to continue
// // //                                 </p>

// // //                                 <Formik
// // //                                     initialValues={{
// // //                                         email: "",
// // //                                         password: "",
// // //                                     }}
// // //                                     validationSchema={LoginSchema}
// // //                                     onSubmit={(values, { setSubmitting, setErrors }) => {
// // //                                         const savedEmail = localStorage.getItem("email");
// // //                                         const savedPassword = localStorage.getItem("password");

// // //                                         if (
// // //                                             values.email === savedEmail &&
// // //                                             values.password === savedPassword
// // //                                         ) {
// // //                                             setTimeout(() => {
// // //                                                 alert("Login Successful ✅");
// // //                                                 window.location.href = "/dashboard";
// // //                                             }, 500);
// // //                                         } else {
// // //                                             setErrors({
// // //                                                 email: "Invalid credentials",
// // //                                                 password: "Invalid credentials",
// // //                                             });
// // //                                         }

// // //                                         setSubmitting(false);
// // //                                     }}
// // //                                 >
// // //                                     {({
// // //                                         handleSubmit,
// // //                                         handleChange,
// // //                                         values,
// // //                                         touched,
// // //                                         errors,
// // //                                         isSubmitting,
// // //                                     }) => (
// // //                                         <Form noValidate onSubmit={handleSubmit}>

// // //                                             {/* EMAIL */}
// // //                                             <Form.Group className="mb-3">
// // //                                                 <Form.Label>Email</Form.Label>
// // //                                                 <Form.Control
// // //                                                     type="email"
// // //                                                     name="email"
// // //                                                     placeholder="Enter email"
// // //                                                     value={values.email}
// // //                                                     onChange={handleChange}
// // //                                                     isInvalid={touched.email && errors.email}
// // //                                                 />
// // //                                                 <Form.Control.Feedback type="invalid">
// // //                                                     {errors.email}
// // //                                                 </Form.Control.Feedback>
// // //                                             </Form.Group>

// // //                                             {/* PASSWORD */}
// // //                                             <Form.Group className="mb-3">
// // //                                                 <Form.Label>Password</Form.Label>

// // //                                                 <InputGroup>
// // //                                                     <Form.Control
// // //                                                         type={showPassword ? "text" : "password"}
// // //                                                         name="password"
// // //                                                         placeholder="Enter password"
// // //                                                         value={values.password}
// // //                                                         onChange={handleChange}
// // //                                                         isInvalid={touched.password && errors.password}
// // //                                                     />

// // //                                                     <Button
// // //                                                         variant="outline-secondary"
// // //                                                         onClick={() =>
// // //                                                             setShowPassword(!showPassword)
// // //                                                         }
// // //                                                     >
// // //                                                         {showPassword ? "Hide" : "Show"}
// // //                                                     </Button>

// // //                                                     <Form.Control.Feedback type="invalid">
// // //                                                         {errors.password}
// // //                                                     </Form.Control.Feedback>
// // //                                                 </InputGroup>
// // //                                             </Form.Group>

// // //                                             <div className="d-flex justify-content-between mb-3">
// // //                                                 <small className="text-muted">
// // //                                                     Forgot Password?
// // //                                                 </small>
// // //                                             </div>

// // //                                             <Button
// // //                                                 type="submit"
// // //                                                 className="w-100"
// // //                                                 variant="dark"
// // //                                                 disabled={isSubmitting}
// // //                                             >
// // //                                                 {isSubmitting ? "Signing in..." : "Sign In"}
// // //                                             </Button>
// // //                                         </Form>
// // //                                     )}
// // //                                 </Formik>

// // //                             </Card.Body>
// // //                         </Card>
// // //                     </Col>
// // //                 </Row>
// // //             </Container>
// // //         </div>
// // //     );
// // // }

// // // export default Login;

















// // // ////chimport
// // import {
// //     Container,
// //     Row,
// //     Col,
// //     Card,
// //     Form,
// //     Button,
// // } from "react-bootstrap";
// // import { Formik } from "formik";
// // import * as Yup from "yup";
// // import {
// //     CognitoUserPool,
// //     CognitoUser,
// //     AuthenticationDetails
// // } from "amazon-cognito-identity-js";
// // import "./Login.scss";

// // const poolData = {
// //     UserPoolId: '',
// //     ClientId: ''
// // };

// // const userPool = new CognitoUserPool(poolData);

// // const LoginSchema = Yup.object().shape({
// //     email: Yup.string().email("Invalid email").required("Email is required"),
// //     password: Yup.string().required("Password is required"),
// // });

// // function Login() {
// //     return (
// //         <div className="login-wrapper">
// //             <Container className="h-100">
// //                 <Row className="justify-content-center align-items-center h-100">
// //                     <Col md={5}>
// //                         <Card className="login-card shadow-lg border-0">
// //                             <Card.Body>

// //                                 <h3 className="text-center fw-bold mb-2">
// //                                     Welcome Back 👋
// //                                 </h3>

// //                                 <p className="text-center text-muted mb-4">
// //                                     Sign in to continue
// //                                 </p>

// //                                 <Formik
// //                                     initialValues={{ email: "", password: "" }}
// //                                     validationSchema={LoginSchema}
// //                                     onSubmit={(values, { setSubmitting, setErrors }) => {

// //                                         const authenticationDetails = new AuthenticationDetails({
// //                                             Username: values.email,
// //                                             Password: values.password
// //                                         });

// //                                         const cognitoUser = new CognitoUser({
// //                                             Username: values.email,
// //                                             Pool: userPool
// //                                         });

// //                                         setSubmitting(true);

// //                                         cognitoUser.authenticateUser(authenticationDetails, {
// //                                             onSuccess: (result) => {
// //                                                 alert("Login Successful ✅");

// //                                                 // 👇 tokens (optional save)
// //                                                 const accessToken = result.getAccessToken().getJwtToken();
// //                                                 localStorage.setItem("token", accessToken);

// //                                                 window.location.href = "/dashboard";
// //                                             },

// //                                             onFailure: (err) => {
// //                                                 setErrors({
// //                                                     email: err.message,
// //                                                     password: err.message
// //                                                 });
// //                                                 setSubmitting(false);
// //                                             },

// //                                             newPasswordRequired: () => {
// //                                                 alert("New password required!");
// //                                                 setSubmitting(false);
// //                                             }
// //                                         });
// //                                     }}
// //                                 >
// //                                     {({
// //                                         handleSubmit,
// //                                         handleChange,
// //                                         values,
// //                                         touched,
// //                                         errors,
// //                                         isSubmitting,
// //                                     }) => (
// //                                         <Form noValidate onSubmit={handleSubmit}>

// //                                             {/* EMAIL */}
// //                                             <Form.Group className="mb-3">
// //                                                 <Form.Label>Email</Form.Label>
// //                                                 <Form.Control
// //                                                     type="email"
// //                                                     name="email"
// //                                                     placeholder="Enter email"
// //                                                     value={values.email}
// //                                                     onChange={handleChange}
// //                                                     isInvalid={touched.email && errors.email}
// //                                                 />
// //                                                 <Form.Control.Feedback type="invalid">
// //                                                     {errors.email}
// //                                                 </Form.Control.Feedback>
// //                                             </Form.Group>

// //                                             {/* PASSWORD */}
// //                                             <Form.Group className="mb-3">
// //                                                 <Form.Label>Password</Form.Label>
// //                                                 <Form.Control
// //                                                     type="password"
// //                                                     name="password"
// //                                                     placeholder="Enter password"
// //                                                     value={values.password}
// //                                                     onChange={handleChange}
// //                                                     isInvalid={touched.password && errors.password}
// //                                                 />
// //                                                 <Form.Control.Feedback type="invalid">
// //                                                     {errors.password}
// //                                                 </Form.Control.Feedback>
// //                                             </Form.Group>

// //                                             <Button
// //                                                 type="submit"
// //                                                 className="w-100"
// //                                                 variant="dark"
// //                                                 disabled={isSubmitting}
// //                                             >
// //                                                 {isSubmitting ? "Signing in..." : "Sign In"}
// //                                             </Button>

// //                                         </Form>
// //                                     )}
// //                                 </Formik>

// //                             </Card.Body>
// //                         </Card>
// //                     </Col>
// //                 </Row>
// //             </Container>
// //         </div>
// //     );
// // }

// // export default Login;


// import {
//     Container,
//     Row,
//     Col,
//     Card,
//     Form,
//     Button,
// } from "react-bootstrap";

// import { useForm } from "react-hook-form";
// import { yupResolver } from "@hookform/resolvers/yup";
// import * as Yup from "yup";

// import {
//     CognitoUserPool,
//     CognitoUser,
//     AuthenticationDetails
// } from "amazon-cognito-identity-js";

// import "./Login.scss";

// const poolData = {
//     UserPoolId: 'ap-south-1_Lwxf6ioCn',
//     ClientId: '4iker1onsa93qf36qgncbbaarp'

// };

// const userPool = new CognitoUserPool(poolData);

// /* ---------------- VALIDATION ---------------- */
// const LoginSchema = Yup.object().shape({
//     email: Yup.string()
//         .email("Invalid email")
//         .required("Email is required"),

//     password: Yup.string()
//         .required("Password is required"),
// });

// function Login() {

//     const {
//         register,
//         handleSubmit,
//         formState: { errors, isSubmitting },
//         setError
//     } = useForm({
//         resolver: yupResolver(LoginSchema)
//     });

//     const onSubmit = (values) => {

//         const email = values.email.trim();
//         const password = values.password;

//         const authenticationDetails = new AuthenticationDetails({
//             Username: email,
//             Password: password
//         });

//         const cognitoUser = new CognitoUser({
//             Username: email,
//             Pool: userPool
//         });

//         cognitoUser.authenticateUser(authenticationDetails, {

//             onSuccess: (result) => {
//                 console.log("LOGIN SUCCESS:", result);

//                 const accessToken =
//                     result.getAccessToken().getJwtToken();

//                 const idToken =
//                     result.getIdToken().getJwtToken();

//                 localStorage.setItem("accessToken", accessToken);
//                 localStorage.setItem("idToken", idToken);

//                 alert("Login Successful ");

//                 window.location.href = "/dashboard";
//             },

//             onFailure: (err) => {
//                 console.log("LOGIN ERROR:", err);

//                 setError("email", {
//                     type: "manual",
//                     message: err.message
//                 });

//                 setError("password", {
//                     type: "manual",
//                     message: err.message
//                 });

//                 alert(err.code + " - " + err.message);
//             },

//             newPasswordRequired: () => {
//                 alert("New password required from Cognito!");
//             }
//         });
//     };

//     return (
//         <div className="login-wrapper">
//             <Container className="h-100">
//                 <Row className="justify-content-center align-items-center h-100">
//                     <Col md={5}>
//                         <Card className="login-card shadow-lg border-0">
//                             <Card.Body>

//                                 <h3 className="text-center fw-bold mb-2">
//                                     Welcome Back 👋
//                                 </h3>

//                                 <p className="text-center text-muted mb-4">
//                                     Sign in to continue
//                                 </p>

//                                 <Form noValidate onSubmit={handleSubmit(onSubmit)}>

//                                     {/* EMAIL */}
//                                     <Form.Group className="mb-3">
//                                         <Form.Label>Email</Form.Label>
//                                         <Form.Control
//                                             type="email"
//                                             placeholder="Enter email"
//                                             {...register("email")}
//                                             isInvalid={!!errors.email}
//                                         />
//                                         <Form.Control.Feedback type="invalid">
//                                             {errors.email?.message}
//                                         </Form.Control.Feedback>
//                                     </Form.Group>

//                                     {/* PASSWORD */}
//                                     <Form.Group className="mb-3">
//                                         <Form.Label>Password</Form.Label>
//                                         <Form.Control
//                                             type="password"
//                                             placeholder="Enter password"
//                                             {...register("password")}
//                                             isInvalid={!!errors.password}
//                                         />
//                                         <Form.Control.Feedback type="invalid">
//                                             {errors.password?.message}
//                                         </Form.Control.Feedback>
//                                     </Form.Group>

//                                     {/* BUTTON */}
//                                     <Button
//                                         type="submit"
//                                         className="w-100"
//                                         variant="dark"
//                                         disabled={isSubmitting}
//                                     >
//                                         {isSubmitting ? "Signing in..." : "Sign In"}
//                                     </Button>

//                                 </Form>

//                             </Card.Body>
//                         </Card>
//                     </Col>
//                 </Row>
//             </Container>
//         </div>
//     );
// }

// export default Login;

import { useState } from "react";
import {
    CognitoUser,
    AuthenticationDetails,
    CognitoUserPool
} from "amazon-cognito-identity-js";

const poolData = {
    UserPoolId: "ap-south-1_Lwxf6ioCn",
    ClientId: "4iker1onsa93qf36qgncbbaarp"
};

const userPool = new CognitoUserPool(poolData);

function Login() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const handleLogin = () => {
        if (!email || !password) {
            alert("Email aur password required hai");
            return;
        }

        const emailLower = email.toLowerCase();

        const authDetails = new AuthenticationDetails({
            Username: emailLower,
            Password: password
        });

        const cognitoUser = new CognitoUser({
            Username: emailLower,
            Pool: userPool
        });

        cognitoUser.authenticateUser(authDetails, {
            onSuccess: (result) => {
                const token = result.getIdToken().getJwtToken();

                // token save
                localStorage.setItem("token", token);
                localStorage.setItem("userEmail", emailLower);

                alert("Login successful ✅");

                window.location.href = "/dashboard";
            },

            onFailure: (err) => {
                console.error(err);

                if (err.code === "UserNotConfirmedException") {
                    alert("Pehle OTP verify karo");
                    localStorage.setItem("email", emailLower);
                    window.location.href = "/verify";
                } else {
                    alert(err.message);
                }
            }
        });
    };

    return (
        <div style={{ textAlign: "center", marginTop: "100px" }}>
            <h2>Login</h2>

            <input
                type="email"
                placeholder="Enter Email"
                onChange={(e) => setEmail(e.target.value)}
            /><br />

            <input
                type="password"
                placeholder="Enter Password"
                onChange={(e) => setPassword(e.target.value)}
            /><br /><br />

            <button onClick={handleLogin}>Login</button>
        </div>
    );
}

export default Login;
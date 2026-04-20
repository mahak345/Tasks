
















































































































// // // ///aprove mentor

// // // import { Container, Row, Col, Card, Form, Button } from "react-bootstrap";
// // // import { Formik } from "formik";
// // // import * as Yup from "yup";
// // // import "./SignUp.scss";

// // // const SignupSchema = Yup.object().shape({
// // //     firstName: Yup.string().required("First name is required"),
// // //     lastName: Yup.string().required("Last name is required"),
// // //     email: Yup.string().email("Invalid email").required("Email is required"),
// // //     password: Yup.string().required("Password is required"),
// // // });

// // // function Signup() {
// // //     return (
// // //         <div className="signup-wrapper">
// // //             <Container className="h-100">
// // //                 <Row className="justify-content-center align-items-center h-100">
// // //                     <Col md={5}>
// // //                         <Card className="signup-card shadow-lg border-0">
// // //                             <Card.Body>

// // //                                 <h3 className="text-center mb-4 fw-bold">
// // //                                     Create Account
// // //                                 </h3>

// // //                                 <Formik
// // //                                     initialValues={{
// // //                                         firstName: "",
// // //                                         lastName: "",
// // //                                         email: "",
// // //                                         password: "",
// // //                                     }}
// // //                                     validationSchema={SignupSchema}
// // //                                     onSubmit={(values, { setSubmitting }) => {

// // //                                         const userData = {
// // //                                             firstName: values.firstName,
// // //                                             lastName: values.lastName,
// // //                                             email: values.email,
// // //                                             password: values.password,
// // //                                         };

// // //                                         localStorage.setItem("user", JSON.stringify(userData));

// // //                                         setTimeout(() => {
// // //                                             alert("Signup Successful ✅");
// // //                                             window.location.href = "/login";
// // //                                         }, 500);

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

// // //                                             {/* NAME ROW FIX */}
// // //                                             <Row className="g-2 mb-2">
// // //                                                 <Col xs={6}>
// // //                                                     <Form.Label>
// // //                                                         First name <span className="text-danger">*</span>
// // //                                                     </Form.Label>
// // //                                                     <Form.Control
// // //                                                         type="text"
// // //                                                         name="firstName"
// // //                                                         placeholder="First Name"
// // //                                                         value={values.firstName}
// // //                                                         onChange={handleChange}
// // //                                                         isInvalid={touched.firstName && errors.firstName}
// // //                                                     />
// // //                                                     <Form.Control.Feedback type="invalid">
// // //                                                         {errors.firstName}
// // //                                                     </Form.Control.Feedback>
// // //                                                 </Col>

// // //                                                 <Col xs={6}>
// // //                                                     <Form.Label>
// // //                                                         Last name <span className="text-danger">*</span>
// // //                                                     </Form.Label>
// // //                                                     <Form.Control
// // //                                                         type="text"
// // //                                                         name="lastName"
// // //                                                         placeholder="Last Name"
// // //                                                         value={values.lastName}
// // //                                                         onChange={handleChange}
// // //                                                         isInvalid={touched.lastName && errors.lastName}
// // //                                                     />
// // //                                                     <Form.Control.Feedback type="invalid">
// // //                                                         {errors.lastName}
// // //                                                     </Form.Control.Feedback>
// // //                                                 </Col>
// // //                                             </Row>

// // //                                             {/* EMAIL */}
// // //                                             <Form.Group className="mb-3">
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
// // //                                                 <Form.Control
// // //                                                     type="password"
// // //                                                     name="password"
// // //                                                     placeholder="Enter password"
// // //                                                     value={values.password}
// // //                                                     onChange={handleChange}
// // //                                                     isInvalid={touched.password && errors.password}
// // //                                                 />
// // //                                                 <Form.Control.Feedback type="invalid">
// // //                                                     {errors.password}
// // //                                                 </Form.Control.Feedback>
// // //                                             </Form.Group>

// // //                                             {/* SUBMIT */}
// // //                                             <Button
// // //                                                 variant="dark"
// // //                                                 type="submit"
// // //                                                 className="w-100 rounded-3"
// // //                                                 disabled={isSubmitting}
// // //                                             >
// // //                                                 {isSubmitting ? "Creating..." : "Signup"}
// // //                                             </Button>

// // //                                         </Form>
// // //                                     )}
// // //                                 </Formik>

// // //                                 <p className="text-center mt-3 mb-0">
// // //                                     Already have an account?{" "}
// // //                                     <a href="/login">Login</a>
// // //                                 </p>

// // //                             </Card.Body>
// // //                         </Card>
// // //                     </Col>
// // //                 </Row>
// // //             </Container>
// // //         </div>
// // //     );
// // // }

// // // export default Signup;



// import { useState } from "react";
// import {
//     CognitoUserPool,
//     CognitoUserAttribute,
//     CognitoUser
// } from "amazon-cognito-identity-js";

// import { Eye, EyeSlash } from "phosphor-react";

// const poolData = {
//     UserPoolId: 'ap-south-1_Lwxf6ioCn',
//     ClientId: '4iker1onsa93qf36qgncbbaarp'
// };

// const userPool = new CognitoUserPool(poolData);

// function Signup() {
//     const [formData, setFormData] = useState({
//         firstName: "",
//         lastName: "",
//         email: "",
//         password: ""
//     });

//     const [togglePassword, setTogglePassword] = useState(false);

//     const handleChange = (e) => {
//         setFormData({
//             ...formData,
//             [e.target.name]: e.target.value
//         });
//     };

//     const handleSubmit = (e) => {
//         e.preventDefault();

//         const { firstName, lastName, email, password } = formData;

//         if (!email || !password) {
//             alert("Email aur password required hai");
//             return;
//         }

//         const attributeList = [
//             new CognitoUserAttribute({ Name: "email", Value: email }),
//             new CognitoUserAttribute({ Name: "given_name", Value: firstName }),
//             new CognitoUserAttribute({ Name: "family_name", Value: lastName })
//         ];

//         userPool.signUp(email, password, attributeList, null, (err, result) => {
//             if (err) {
//                 if (err.code === "UsernameExistsException") {
//                     alert("User already exists, OTP resend ho raha hai...");

//                     const cognitoUser = new CognitoUser({
//                         Username: email,
//                         Pool: userPool
//                     });

//                     cognitoUser.resendConfirmationCode((err) => {
//                         if (err) return alert(err.message);

//                         alert("OTP resend ho gaya");
//                         localStorage.setItem("email", email);
//                         window.location.href = "/verify";
//                     });
//                 } else {
//                     alert(err.message);
//                 }
//                 return;
//             }

//             alert("Signup successful, OTP email par aa gaya");
//             localStorage.setItem("email", email);
//             window.location.href = "/verify";
//         });
//     };

//     return (
//         <div style={styles.container}>
//             <div style={styles.card}>

//                 <div style={styles.quoteBox}>
//                     <h2 style={styles.title}>Create Account</h2>
//                     <p style={styles.quote}>
//                         "Start your journey with us — where ideas turn into reality."
//                     </p>
//                 </div>



//                 <form onSubmit={handleSubmit} style={styles.form}>

//                     <div style={styles.nameRow}>
//                         <input
//                             type="text"
//                             name="firstName"
//                             placeholder="First Name"
//                             value={formData.firstName}
//                             onChange={handleChange}
//                             style={styles.inputHalf}
//                         />

//                         <input
//                             type="text"
//                             name="lastName"
//                             placeholder="Last Name"
//                             value={formData.lastName}
//                             onChange={handleChange}
//                             style={styles.inputHalf}
//                         />
//                     </div>

//                     <input
//                         type="email"
//                         name="email"
//                         placeholder="Enter email"
//                         value={formData.email}
//                         onChange={handleChange}
//                         style={styles.input}
//                     />


//                     <div style={styles.passwordWrapper}>
//                         <input
//                             type={togglePassword ? "text" : "password"}
//                             name="password"
//                             placeholder="Enter password"
//                             value={formData.password}
//                             onChange={handleChange}
//                             style={styles.passwordInput}
//                         />

//                         <span
//                             style={styles.icon}
//                             onClick={() => setTogglePassword(!togglePassword)}
//                         >
//                             {togglePassword ? (
//                                 <EyeSlash size={20} />
//                             ) : (
//                                 <Eye size={20} />
//                             )}
//                         </span>
//                     </div>

//                     <button type="submit" style={styles.button}>
//                         Signup
//                     </button>
//                 </form>
//             </div>
//         </div>
//     );
// }

// const styles = {
//     container: {
//         height: "100vh",
//         display: "flex",
//         justifyContent: "center",
//         alignItems: "center",
//         background: "linear-gradient(135deg, #667eea, #764ba2)"
//     },
//     card: {
//         background: "#fff",
//         padding: "40px",
//         borderRadius: "16px",
//         width: "450px",
//         boxShadow: "0 15px 40px rgba(0,0,0,0.15)"
//     },
//     quoteBox: {
//         textAlign: "center",
//         marginBottom: "10px"
//     },
//     quote: {
//         fontSize: "13px",
//         color: "#667eea",
//         fontStyle: "italic",
//         fontWeight: "500"
//     },
//     title: {
//         marginBottom: "20px",
//         textAlign: "center"
//     },
//     form: {
//         display: "flex",
//         flexDirection: "column"
//     },
//     nameRow: {
//         display: "flex",
//         gap: "10px",
//         marginBottom: "10px"
//     },
//     input: {
//         padding: "12px",
//         margin: "10px 0",
//         borderRadius: "10px",
//         border: "1px solid #ddd"
//     },
//     inputHalf: {
//         flex: 1,
//         padding: "12px",
//         borderRadius: "10px",
//         border: "1px solid #ddd"
//     },
//     passwordWrapper: {
//         position: "relative",
//         margin: "10px 0"
//     },
//     passwordInput: {
//         width: "100%",
//         padding: "12px",
//         borderRadius: "10px",
//         border: "1px solid #ddd"
//     },
//     icon: {
//         position: "absolute",
//         right: "12px",
//         top: "50%",
//         transform: "translateY(-50%)",
//         cursor: "pointer",
//         color: "#666"
//     },
//     button: {
//         padding: "12px",
//         border: "none",
//         borderRadius: "10px",
//         background: "#667eea",
//         color: "#fff",
//         fontWeight: "bold",
//         cursor: "pointer",
//         marginTop: "15px"
//     }
// };

// export default Signup;



import { useState } from "react";
import {
    CognitoUserPool,
    CognitoUserAttribute,
    CognitoUser
} from "amazon-cognito-identity-js";

const poolData = {
    UserPoolId: "ap-south-1_Lwxf6ioCn",
    ClientId: "4iker1onsa93qf36qgncbbaarp"
};

const userPool = new CognitoUserPool(poolData);

function Signup() {
    const [formData, setFormData] = useState({
        firstName: "",
        lastName: "",
        email: "",
        password: ""
    });

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        const { firstName, lastName, email, password } = formData;

        const emailLower = email.toLowerCase();

        const attributeList = [
            new CognitoUserAttribute({ Name: "email", Value: emailLower }),
            new CognitoUserAttribute({ Name: "given_name", Value: firstName }),
            new CognitoUserAttribute({ Name: "family_name", Value: lastName })
        ];

        userPool.signUp(emailLower, password, attributeList, null, (err, result) => {
            if (err) {
                console.error(err);

                if (err.code === "UsernameExistsException") {
                    const cognitoUser = new CognitoUser({
                        Username: emailLower,
                        Pool: userPool
                    });

                    cognitoUser.resendConfirmationCode((err) => {
                        if (err) return alert(err.message);

                        alert("OTP resend ho gaya");
                        localStorage.setItem("email", emailLower);
                        window.location.href = "/verify";
                    });
                    return;
                }

                return alert(err.message);
            }

            alert("Signup successful, OTP aa gaya");
            localStorage.setItem("email", emailLower);
            window.location.href = "/verify";
        });
    };

    return (
        <div style={{ textAlign: "center", marginTop: "100px" }}>
            <h2>Signup</h2>

            <form onSubmit={handleSubmit}>
                <input name="firstName" placeholder="First Name" onChange={handleChange} /><br />
                <input name="lastName" placeholder="Last Name" onChange={handleChange} /><br />
                <input name="email" placeholder="Email" onChange={handleChange} /><br />
                <input name="password" type="password" placeholder="Password" onChange={handleChange} /><br /><br />

                <button type="submit">Signup</button>
            </form>
        </div>
    );
}

export default Signup;
import { CognitoUserPool } from "amazon-cognito-identity-js";

const poolData = {
    UserPoolId: "ap-south-1_Lwxf6ioCn",
    ClientId: "4iker1onsa93qf36qgncbbaarp",
};

export const userPool = new CognitoUserPool(poolData);
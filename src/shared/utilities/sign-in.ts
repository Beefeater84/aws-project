import { Auth } from 'aws-amplify';

type SignInParameters = {
    username: string;
    password: string;
};

export default async function signIn({ username, password }: SignInParameters) {
    try {
        await Auth.signIn(username, password);
    } catch (error) {
        console.log('error signing in', error);
    }
}
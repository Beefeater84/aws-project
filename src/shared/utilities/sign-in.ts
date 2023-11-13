import { Auth } from 'aws-amplify';

type SignInParameters = {
    username: string;
    password: string;
};

export default async function signIn({ username, password }: SignInParameters) {
    try {
        const s = await Auth.signIn(username, password);
        return s

    } catch (error) {
        console.log('error signing in', error);
    }
}
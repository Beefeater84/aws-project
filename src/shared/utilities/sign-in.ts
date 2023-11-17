import { signIn, type SignInInput } from 'aws-amplify/auth';

export default async function signInHandler({ username, password }: SignInInput) {
    try {
        await signIn({ username, password });
    } catch (error) {
        console.log('error signing in', error);
    }
}
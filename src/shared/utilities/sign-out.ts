import {Auth} from "aws-amplify";

export default async function onSignOut() {
    await Auth.signOut()
}
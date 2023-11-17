import {Button, useAuthenticator} from "@aws-amplify/ui-react";
import React from "react";
import onSignOut from "../../shared/utilities/sign-out";

export default function BlueTeamIndex() {

    const {authStatus} = useAuthenticator(context => [context.authStatus])
    

    return (
        <section className="container">
            <Button onClick={onSignOut}>
                Sign Out
            </Button>
            <h1>Blue Team</h1>
        </section>
    )
}
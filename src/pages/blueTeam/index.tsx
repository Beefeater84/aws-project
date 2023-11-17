import {Button} from "@aws-amplify/ui-react";
import React from "react";
import handleSignOut from "../../shared/utilities/sign-out";

export default function BlueTeamIndex() {

    return (
        <section className="container">
            <Button onClick={handleSignOut}>
                Sign Out
            </Button>
            <h1>Blue Team</h1>
        </section>
    )
}
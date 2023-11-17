import React, {MouseEvent} from 'react';
import './App.css';
import {Button, Flex, Input, PasswordField, useAuthenticator} from "@aws-amplify/ui-react";
import '@aws-amplify/ui-react/styles.css';
import {User} from "./application/mockUsers/types";
import mockUsers from "./application/mockUsers/mock-users";
import {Navigate} from "react-router-dom";


import awsExports from './aws-exports';
import {Amplify} from "aws-amplify";
import signIn from "./shared/utilities/sign-in";

Amplify.configure(awsExports);

function App() {

    const {authStatus} = useAuthenticator(context => [context.authStatus])

    const [user, setUser] = React.useState<User>({
        login: "",
        password: "",
    })

    const onSelectUserHandler = (user: User) => {
        setUser(user)
    }



    const onSignInHandler = async (e: MouseEvent<HTMLButtonElement>) => {
        e.preventDefault()
        await signIn({
            username: user.login,
            password: user.password,
        })
    }


    if (authStatus === "authenticated") {
        return <Navigate to="./blue-team" />
    }


    return (
        <Flex>
            <section className="container">
                <ul>
                    <Button
                        size="small"
                        onClick={() => onSelectUserHandler(mockUsers["BlueAdmin"])}
                    >
                        Blue Admin
                    </Button>
                    <Button
                        size="small"
                        onClick={() => onSelectUserHandler(mockUsers["BlueUser"])}
                    >
                        Blue User
                    </Button>
                </ul>

                <Flex as="form" direction="column">
                    <Input
                        disabled={true}
                        placeholder="Loggin"
                        name="login"
                        value={user.login}
                    />
                    <PasswordField
                        autoComplete="new-password"
                        descriptiveText="Please enter password"
                        hideShowPassword={true}
                        isDisabled={true}
                        label="Password"
                        placeholder="Password"
                        labelHidden={true}
                        name="password"
                        value={user.password}
                    />
                    <Button type="submit" onClick={onSignInHandler}>
                        Sign in
                    </Button>
                </Flex>
            </section>
        </Flex>
    );
}

export default App;

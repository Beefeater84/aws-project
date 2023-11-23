import React, {MouseEvent} from 'react';
import './App.css';

import {Button, Flex, Input, PasswordField, useAuthenticator} from "@aws-amplify/ui-react";
import '@aws-amplify/ui-react/styles.css';
import {User} from "./application/mockUsers/types";
import mockUsers from "./application/mockUsers/mock-users";
import {Navigate} from "react-router-dom";
import signInHandler from "./shared/utilities/sign-in";


import {get, post} from "aws-amplify/api";


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
        await signInHandler({
            username: user.login,
            password: user.password,
        })
    }


    if (authStatus === "authenticated") {
        return <Navigate to="./blue-team"/>
    }

    // return (
    //     <Authenticator>
    //         {({ signOut, user }) => (
    //             <main>
    //                 <h1>Hello</h1>
    //                 <button onClick={signOut}>Sign out</button>
    //             </main>
    //         )}
    //     </Authenticator>
    // )

    const getDataHandler = async () => {
        try {
            const restOperation = post({
                apiName: 'apiawstest',
                path: '/get-file-csv'
            });
            const response = await restOperation.response;
            console.log('GET call succeeded: ', await response.body.json())
        } catch (error) {
            console.log('GET call failed: ', error);
        }
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

                <Button
                    loadingText=""
                    onClick={getDataHandler}
                >
                    Get data!
                </Button>

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

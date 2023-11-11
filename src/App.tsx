import React, {MouseEvent} from 'react';
import './App.css';
import {Authenticator, Button, Flex, Input, PasswordField, useAuthenticator} from "@aws-amplify/ui-react";
import '@aws-amplify/ui-react/styles.css';
import {User} from "./application/mockUsers/types";
import mockUsers from "./application/mockUsers/mock-users";


import awsExports from './aws-exports';
import {Amplify} from "aws-amplify";
import signIn from "./shared/utilities/sign-in";

Amplify.configure(awsExports);

function App() {


    const [user, setUser] = React.useState<User>({
        login: "",
        password: "",
    })

    const onSelectUserHandler = (user: User) => {
        setUser(user)
    }

    const onSignInHandler = async (e: MouseEvent<HTMLButtonElement>) => {
        e.preventDefault()
        console.log("onSignInHandler")
        await signIn({
            username: user.login,
            password: user.password,
        })
    }

    const formFields = {
        signIn: {
            username: {
                placeholder: 'login',
                isRequired: true,
                labelHidden: true,
            },
            password: {
                placeholder: 'password',
                isRequired: true,
                labelHidden: true,
            }
        },
        signUp: {}
    }

    return (
        <Flex>
            <section>
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
                <ul>
                    <li>Red Admin</li>
                    <li>Red User</li>
                </ul>

                <Authenticator
                    loginMechanisms={['email']}
                    formFields={formFields}
                    hideSignUp={true}
                >

                </Authenticator>

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

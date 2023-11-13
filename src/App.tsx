import React, {MouseEvent, useEffect} from 'react';
import './App.css';
import {Button, Flex, Input, PasswordField, useAuthenticator} from "@aws-amplify/ui-react";
import '@aws-amplify/ui-react/styles.css';
import {User} from "./application/mockUsers/types";
import mockUsers from "./application/mockUsers/mock-users";
import { redirect } from "react-router-dom";


import awsExports from './aws-exports';
import {Amplify, Auth} from "aws-amplify";
import signIn from "./shared/utilities/sign-in";
import {useNavigate} from "react-router-dom";

Amplify.configure(awsExports);

function App() {

    const {route} = useAuthenticator(context => [context.route])
    const navigate = useNavigate();

    const [user, setUser] = React.useState<User>({
        login: "",
        password: "",
    })

    const onSelectUserHandler = (user: User) => {
        setUser(user)
    }

    const onSignOutHandler = async () => {
        Auth.signOut()
    }

    const onSignInHandler = async (e: MouseEvent<HTMLButtonElement>) => {
        e.preventDefault()
        const res = await signIn({
            username: user.login,
            password: user.password,
        })

        if (res) {
            console.log("res", res)
            return redirect("/s")
        }
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

    if (route === "authenticated") {
        return (
            <Button onClick={onSignOutHandler}>
                Sign Out
            </Button>
            )

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

                {/*<Authenticator*/}
                {/*    loginMechanisms={['email']}*/}
                {/*    formFields={formFields}*/}
                {/*    hideSignUp={true}*/}
                {/*>*/}

                {/*</Authenticator>*/}

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

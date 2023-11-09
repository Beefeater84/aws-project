import React from 'react';
import './App.css';
import {Button, Flex, Input, PasswordField} from "@aws-amplify/ui-react";
import '@aws-amplify/ui-react/styles.css';
import {User} from "./application/mockUsers/types";
import MockUsers from "./application/mockUsers/mock-users";
import mockUsers from "./application/mockUsers/mock-users";

function App() {
    const [user, setUser] = React.useState<User>({
        login: "",
        password: "",
    })

    const onSelectUserHandler = (user: User) => {
        setUser(user)
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
                    <Button type="submit" onClick={(e) => e.preventDefault()}>
                        Login
                    </Button>
                </Flex>
            </section>
        </Flex>
    );
}

export default App;

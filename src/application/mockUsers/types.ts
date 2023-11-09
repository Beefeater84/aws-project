type UserLogin = string;
export type UserPassword = string;

export type User = {
    login: UserLogin;
    password: UserPassword;
}

export type MockUsers = {
    [key: string]: User;
}
import {MockUsers, UserPassword} from "./types";

const mockPassword: UserPassword = "1Qwerty!";

const mockUsers: MockUsers = {
    "BlueAdmin": {
        login: "admin@blue.com",
        password: mockPassword,
    },
    "BlueUser": {
        login: "user@blue.com",
        password: mockPassword,
    }
}

export default mockUsers;
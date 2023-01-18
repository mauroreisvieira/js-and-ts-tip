interface UserInfo {
    name: string;
    role: 'admin' | undefined;
}

export const createUser = (userInfo: UserInfo) => {
    console.log(userInfo);
};

createUser({ name: 'Matt', role: 'admin' });
createUser({ name: 'David', role: undefined});
createUser({ name: 'Laura', role: undefined});
createUser({ name: 'Farzad', role: undefined });
createUser({ name: 'Jenny', role: undefined});

import { F } from 'ts-toolbelt';

type Action = 'view' | 'create' | 'update' | 'delete';
type Role = 'anonymous' | 'admin' | 'loggedIn';

export const userActions: {
    type: Action;
    roles: Role[];
}[] = [
    {
        type: 'view',
        roles: ['anonymous', 'admin'],
    },
    {
        type: 'create',
        roles: ['admin'],
    },
    {
        type: 'update',
        roles: ['admin', 'loggedIn'],
    },
    {
        type: 'delete',
        roles: ['admin'],
    },
];

// Alternative 2;

const satisfies = <TWide>() => <TNarrow extends TWide>(narrow: F.Narrow<TNarrow>) => narrow;

export const num = satisfies<number>()(2);

export const consumerActions = satisfies<
    {
        type: string;
        roles: string[];
    }[]
>()([
    {
        type: 'view',
        roles: ['anonymous', 'admin'],
    },
    {
        type: 'create',
        roles: ['admin'],
    },
    {
        type: 'update',
        roles: ['admin', 'loggedIn'],
    },
    {
        type: 'delete',
        roles: ['admin'],
    },
]);

export type ActionType = typeof consumerActions[number]["type"];
export type RoleType = typeof consumerActions[number]["roles"];

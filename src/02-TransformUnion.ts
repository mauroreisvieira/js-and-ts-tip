export type Entity = { type: 'user' } | { type: 'post' } | { type: 'comment' };

type EntityWithId = {
    [EntityType in Entity['type']]: {
        type: EntityType;
    } & Record<`${EntityType}Id`, string>;
}[Entity['type']];

export const results: EntityWithId = {
    type: 'comment',
    commentId: '123',
};

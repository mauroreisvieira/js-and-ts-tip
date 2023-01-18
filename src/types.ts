declare global {
    // eslint-disable-next-line @typescript-eslint/no-empty-interface
    interface GlobalReducerEvent {}
}

export type GlobalReducer<T> = (
    state: T,
    event: {
        [EventType in keyof GlobalReducerEvent]: {
            type: EventType;
        } & GlobalReducerEvent[EventType];
    }[keyof GlobalReducerEvent]
) => T;

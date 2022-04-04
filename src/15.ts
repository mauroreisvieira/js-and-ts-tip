export type Event =
    | {
        type: 'LOG_IN',
        payload: {
            userId: string;
        };
    }
    | {
        type: "SIGN_OUT"
    };

type ExtractEvent<T> = Extract<Event, { type: T }> extends { payload: infer P }
    ? [type: T, payload: P]
    : [type: T];

export const sendEvent = <T extends Event["type"]>(...args: ExtractEvent<T>) => {
    console.log(args);
};

sendEvent('SIGN_OUT');
sendEvent('LOG_IN', {
    userId: '123',
});

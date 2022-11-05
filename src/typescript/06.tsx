import * as React from 'react';

const MyComponent = (props: { enabled: boolean }) => {
    console.log(props);
    return null;
};

// eslint-disable-next-line @typescript-eslint/no-unused-vars
class MyOtherComponent extends React.Component<{
    enabled: boolean;
}> {}

type PropsFrom<TComponent> = TComponent extends React.FC<infer Props>
    ? Props
    : TComponent extends React.Component<infer Props>
    ? Props
    : never;

const props: PropsFrom<typeof MyComponent> = {
    enabled: true,
};

console.log(props);

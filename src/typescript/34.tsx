import React from "react";

export const DefaultButton = "button" as const;

export type ButtonOwnProps<E extends React.ElementType> = {
    skin?: "primary" | "secondary" | "ghost";
    as?: E;
    children?: React.ReactNode;
};

export type ButtonProps<E extends React.ElementType> = ButtonOwnProps<E> &
    Omit<React.ComponentProps<E>, keyof ButtonOwnProps<E>>;

export const Button = <
    E extends React.ElementType = typeof DefaultButton
>({
    children,
    as,
    ...otherProps
}: ButtonProps<E>) => {
    const Tag = as || DefaultButton;

    return <Tag {...otherProps}>{children}</Tag>;
};

// Usage
export default () => {
    return (
        <>
            <Button as="a" href="/">Anchor</Button>
            <Button as="input" type="submit">Input</Button>
            <Button>Default</Button>
        </>
    );
};

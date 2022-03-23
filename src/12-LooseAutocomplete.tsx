import * as React from 'react';

type LooseAutoComplete<T extends string> = T | Omit<string, T>;

type IconSize = LooseAutoComplete<"sm" | "xs">;

interface IconProps {
    size: IconSize;
}

export const Icon = (props: IconProps) => <></>;

export default () => {
    return (
            <>
               <Icon size="sm" />
                <Icon size="something" />
            </>
    );
}

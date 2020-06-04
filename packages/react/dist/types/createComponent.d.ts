import React from "react";
export interface ReactProps {
    className?: string;
}
export declare const createReactComponent: <PropType, ElementType>(tagName: string) => React.ForwardRefExoticComponent<React.PropsWithoutRef<import("./utils").NeoReactExternalProps<PropType & ReactProps, ElementType>> & React.RefAttributes<ElementType>>;

import React, { FC, FormEvent, ReactNode } from 'react';

type FormProps = {
    onSubmit: (evt: FormEvent<HTMLFormElement>) => void
    children: ReactNode
    pt?: string
}
const Form: FC<FormProps> = ({children, pt, ...rest}) => {
    return (
        <form
            style={{width: "400px", margin: "0 auto", paddingTop: pt}}
            {...rest}
        >
            {children}
        </form>
    );
};

export default Form;

import React from 'react';

export type ButtonProps = {
    name: string
    callBack: () => void
}

export const Button = (props: ButtonProps) => {
   const onClickHandler = () => {
       props.callBack()
   }
    return (
        <div>
<button onClick={onClickHandler}>{props.name}</button>
        </div>
    );
};

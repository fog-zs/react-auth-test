import React, { useState } from 'react';
import SignOut from "./SignOut";

const Main = (props: any) =>{
    return <>
        <h1>Main</h1>
        {props.user}
        <SignOut />

    </>
}

export default Main;
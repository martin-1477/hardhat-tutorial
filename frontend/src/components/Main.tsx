import React, { useState } from 'react';

import { Heading, Pane, Position, Popover, toaster, Menu, Button } from 'evergreen-ui'

interface Props {

}


const Main: React.FC<Props> = () => {


    return (
        <Pane display="flex">
            <Pane flex={1} alignItems="center" display="flex">
                <Heading size={600}></Heading>
            </Pane>
        </Pane>
    );
}


export default Main;

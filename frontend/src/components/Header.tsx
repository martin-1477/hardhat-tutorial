import React, { useState } from 'react';
import Caver from 'caver-js'
//import Web3 from 'web3'

import { Heading, Pane, Popover, toaster, Menu, Button } from 'evergreen-ui'

interface Props {

}

declare global {
    interface Window {
        klaytn: String
    }
}

const Header: React.FC<Props> = () => {

    const [address, setAddress] = useState<string>('')
    const contractAddress = '0x733D423e9F8b1160E34917Df1526dC6bae8D8405'

    const connectKaikas = async () => {
        // kaikas
        await window.klaytn.enable()
        //const accounts:Array<any> = await window.klaytn.enable()
        //setAddress(accounts[0])
        //const provider = window.klaytn
        //const contract = new (new Caver(provider)).klay.Contract(abi, contractAddress);
        //console.log(`Kaikas selected ${address}`)
    }

    return (
        <Pane display="flex" padding={16} background="tint2" borderRadius={3}>
            <Pane flex={1} alignItems="center" display="flex">
                <Heading size={600}>Klayon</Heading>
            </Pane>
            <Pane>
                <Popover
                    position={Position.BOTTOM_RIGHT}
                    content={
                        <Menu>
                            <Menu.Group>
                                <Menu.Item onSelect={() => connectKaikas()}>
                                    Kaikas by Klaytn
                                </Menu.Item>
                                <Menu.Item onSelect={() => toaster.notify('Metamask')}>
                                    Metamask
                                </Menu.Item>
                                <Menu.Item onSelect={() => toaster.notify('Klip')}>
                                    Connect Klip via Kakao Talk
                                </Menu.Item>
                            </Menu.Group>
                        </Menu>
                    }
                >
                    <Button appearance="primary">
                        Connect Wallet
                    </Button>
                </Popover>
            </Pane>
        </Pane>
    );
}


export default Header;

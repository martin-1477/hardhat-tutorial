import React, { useState } from 'react';
import Caver from 'caver-js'
//import Web3 from 'web3'

import { Heading, Pane, Position, Popover, Badge, Menu, Button } from 'evergreen-ui'

interface Props {

}

declare global {
    interface Window {
        klaytn: any
    }
}


const Header: React.FC<Props> = () => {

    const [address, setAddress] = useState<string>('')
    const contractAddress = '0x733D423e9F8b1160E34917Df1526dC6bae8D8405'

    const disconnectWallet = () => {
        setAddress('')
    }
    const connectWallet = async (walletType: string) => {
        if (walletType === 'kaikas') {
            // kaikas
            const { klaytn } = window

            if (klaytn) {
                const accounts = await klaytn.enable()
                setAddress(accounts[0])
            }
        }
    }

    const connectKaikas = async () => {


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
                <Badge color="green" marginRight={8}>
                    {address}
                </Badge>
            </Pane>
            <Pane>
                {address !== '' ?
                    <Button appearance="primary" onClick={() => disconnectWallet()}>
                        Disconnect
                    </Button>

                    :

                    <Popover
                        position={Position.BOTTOM_RIGHT}
                        content={
                            <Menu>
                                <Menu.Group>
                                    <Menu.Item onSelect={() => connectWallet('kaikas')}>
                                        Kaikas by Klaytn
                                    </Menu.Item>
                                    <Menu.Item onSelect={() => connectWallet('metamask')}>
                                        Metamask
                                    </Menu.Item>
                                    <Menu.Item onSelect={() => connectWallet('klip')}>
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
                }

            </Pane>
        </Pane>
    );
}


export default Header;

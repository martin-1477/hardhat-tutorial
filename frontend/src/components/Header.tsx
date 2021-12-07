import React, { useState } from 'react';

import TokenArtifact from "../contracts/KToken.json";
import contractAddress from "../contracts/contract-address.json";

import Caver from 'caver-js'
import Web3 from 'web3'

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


    const disconnectWallet = () => {
        setAddress('')
    }
    const connectWallet = async (walletType: string) => {
        if (walletType === 'kaikas') {
            // kaikas
            const { klaytn } = window

            // real en
            const web3 = new Web3('https://klaytn-en.sixnetwork.io:8651/')

            if (klaytn) {
                const accounts = await klaytn.enable()
                const userAddress = accounts[0]
                setAddress(userAddress)
                const contract = new (new Caver(klaytn)).klay.Contract(TokenArtifact.abi as any,
                                                                       contractAddress.Token)
                console.log(accounts[0])
                console.log(userAddress)
                if (userAddress != '') {
                    const addr: string = Web3.utils.toChecksumAddress(userAddress)
                    const balance: string = await web3.eth.getBalance(userAddress)
                    const tokenBalance = await contract.methods.balanceOf(addr).call()

                    console.log(addr)
                    console.log(balance)
                    console.log(tokenBalance)
                }


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

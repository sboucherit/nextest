import React, { useState, useEffect } from 'react';
import getWeb3 from './getWeb3';
import getContract from './getContract';
import contractDefinition from './contracts/Uchat.json';

const Web3HContainer = () => {

    const [web3, setWeb3] = useState(null);
    const [accounts, setAccounts] = useState(null);
    const [contract, setContract] = useState(null);

    useEffect(() => {
        async function getData() {
            try {
                const web3 = await getWeb3();
                const accounts = await web3.eth.getAccounts();
                const contract = await getContract;

                /* Maybe we can do :

                                setWeb3(await getWeb3());
                setAccounts(await web3.eth.getAccounts());
                setContract(await getContract);

                */

                setWeb3(web3);
                setAccounts(accounts);
                setContract(contract);
            } catch(error) {
                alert(
                    `Failed to load Web3, accounts, or contract. Checl console for details.`
                )
                console.log(error);
            }
        };
        getData();
    });

export default Web3HContainer;

/*     useEffect(() => {
        async function fetchData() {
            try {
                const response = await fetch(
                    `https://www.reddit.com/r/${subreddit}.json`
                );
                const json = await response.json();
                setPosts(json.data.children.map(it => it.data));
            } catch (e) {
                console.error(e);
            }
        };
        fetchData();
    }, []); */

}
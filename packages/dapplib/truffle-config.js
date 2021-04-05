require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'guess kiwi suit food shrug rebel machine mistake industry light army gaze'; 
let testAccounts = [
"0xafddcd1576fa0a9ef988afeb9c6aa0a2508e59ff665d2269baa9e197b4ecbcb8",
"0x9533d4f488e98517d4eb321bc589691a672ca917586ca0d41010ab723d326bdb",
"0x4e791eaccf259f8c863c9199fc9939d37ee967ce541d034e07831eac78c65221",
"0x3ba55ffcee96a3facb866b51efa49cea7032e00b0dcb56e879e26b4a94ff4cd2",
"0x4c14e993cb97b95d84ad3baed0ec81fdd12edceb212d8de35a38ca1a6eaef4a6",
"0xeb863152d5e1f05f05c2779817d621c82cd5ae320680a9baedc44730114d072c",
"0xece038de80fe6c1b45246f6da43e070615b7d18552d7694f7764f82d4b570ab5",
"0x8d394da67807e921179b01243d73a3f0c2f1bc7473a22aa314357635d6699d5a",
"0xf0b174f1d307f262ed457b23ae4f44ec15605524478d17855e50faea532f983a",
"0xc990c9de12add0f7103cf6dc088bc0438edbbc374987b1e1b5416d0cd446a530"
]; 
let devUri = 'http://127.0.0.1:7545/';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            network_id: '*'
        }
    },
    compilers: {
        solc: {
            version: '^0.5.11'
        }
    }
};

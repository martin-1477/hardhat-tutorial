
# https://hardhat.org/tutorial/
npm init --yes
npm install --save-dev hardhat
npm install --save-dev @nomiclabs/hardhat-ethers ethers @nomiclabs/hardhat-waffle ethereum-waffle chai
#npm install --save-dev @openzeppelin/hardhat-upgrades

# run
npx hardhat compile
npx hardhat test


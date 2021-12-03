# hardhat tutorial
- 참고 사이트: https://hardhat.org/tutorial/

# main 브랜치
- 튜토리얼 따라 해 보기
```
> npm init --yes
> npm install --save-dev hardhat
> npm install --save-dev @nomiclabs/hardhat-ethers ethers @nomiclabs/hardhat-waffle ethereum-waffle chai
```

# feature/ERC20 브랜치
- ERC20 으로 토큰 만들기 
```
> npm install @openzeppelin/contracts
```

# feature/baobab 브랜치
- Klaytn baobab 에 배포해 보기 
```
> npm install ethers@5.0.32		// 버전 문제로 낮춰야 된다고 함 
> npm install hardhat-klaytn-patch
> npm install --save-dev @openzeppelin/hardhat-upgrades
```
- hardhat.config.js 의 ${YOUR PRIVATE KEY} 부분을 실제 개인키로 세팅 필요 

# run
```
> npx hardhat compile
> npx hardhat test
```

# baobab deploy
```
> npx hardhat run scripts/deploy.js --network baobab
```
---- 실행결과 예제 
```
Deploying contracts with the account: 0x2eDA5B1abD38B3915939791a5ee3E788935C4697
Account balance: 105221602075000000000
Token address: 0x4Bcfb9fc5a291e550cc9213D6EaD397f3CC1A4dD
```
----

# 컨트랙트 배포 결과 확인 
https://baobab.scope.klaytn.com/token/0x4bcfb9fc5a291e550cc9213d6ead397f3cc1a4dd?tabId=tokenTransfer

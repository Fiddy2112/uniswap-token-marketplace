// SPDX-License-Identifier: MIT
pragma solidity >=0.8.0 <0.9.0;

import "@openzeppelin/contracts/token/ERC20/ERC20.sol";

contract CustomEx is ERC20 {
    uint256 private cap = 10_000_000_000 * 10 ** uint256(18);
    constructor (string memory name, string memory symbol) ERC20(name,symbol){
        _mint(msg.sender, cap);
    }
}

contract CustomDex {
    // Custom tokens to be initialized
    string[] public tokens = ["Tether USD", "BNB", "USD Coin", "stEth", "Tron" ,"Matic Token", "SHIBA INU", "Uniswap"];

    // map to maintain the tokens and its instance
    mapping(string => ERC20) public tokenInstanceMap;

    uint256 ethValue = 100000000000000;

    struct History {
        uint256 historyId;
        string tokenA;
        string tokenB;
        uint256 inputValue;
        uint256 outputValue;
        address userAddress;
    }

    uint256 public _historyIndex;
    mapping(uint256 => History) private historys;

    constructor() {
        for(uint i =0; i< tokens.length; i++){
            CustomEx token = new CustomEx(tokens[i], tokens[i]);
            tokenInstanceMap[tokens[i]] = token;
        }
    }

    function getBalance(string memory tokenName,address _address) public view returns(uint256){
        return tokenInstanceMap[tokenName].balanceOf(_address);
    }

    function getTotalSupply(string memory tokenName) public view returns(uint256){
        return tokenInstanceMap[tokenName].totalSupply();
    }

    function getName( string memory tokenName ) public view returns(string memory){
        return tokenInstanceMap[tokenName].name();
    }

    function getTokenAddress(string memory tokenName) public view returns(address ){
        return address(tokenInstanceMap[tokenName]);
    }

    function getEthBalance() public view returns(uint256){
        return address(this).balance;
    }

    function _transactionHistory(string memory _tokenA,string memory _tokenB, uint256 inputValue, uint256 outputValue) internal {
        _historyIndex++;
        uint256 _hostoryId = _historyIndex;
        History storage history = historys[_hostoryId];

        history.historyId = _hostoryId;
        history.tokenA = _tokenA;
        history.tokenB = _tokenB;
        history.inputValue = inputValue;
        history.outputValue= outputValue;
        history.userAddress = msg.sender;
    }

    function swapEthToToken(string memory tokenName) public payable returns(uint256){
        uint256 inputValue = msg.value;
        uint256 outputValue = (inputValue / ethValue) * 10 ** 18; // convert to 18 decimal places
        require(tokenInstanceMap[tokenName].transfer(msg.sender, outputValue));

        string memory etherToken = "Ether";
        _transactionHistory(tokenName, etherToken, inputValue, outputValue);
        return outputValue;
    }

    function swapTokentoEth(string memory tokenName, uint256 _amount) public returns(uint256){
        // convert the token amount  (ethValue) to exact amount (10)
        uint256 exactAmount = _amount /10 ** 18;
        uint256 ethToBeTransferred = exactAmount * ethValue;
        require(address(this).balance >= ethToBeTransferred,"Dex is running low on balance" );
        
        payable(msg.sender).transfer(ethToBeTransferred);
        require(tokenInstanceMap[tokenName].transferFrom(msg.sender,address(this),_amount));

        string memory etherToken = "Ether";
        _transactionHistory(tokenName, etherToken, exactAmount, ethToBeTransferred);
        return ethToBeTransferred;
    } 

    function swapTokenToToken(string memory srcTokenName,string memory destTokenName, uint256 _amount) public{
        require(tokenInstanceMap[srcTokenName].transferFrom(msg.sender,address(this),_amount));
        require(tokenInstanceMap[destTokenName].transfer(msg.sender,_amount));
        _transactionHistory(srcTokenName, destTokenName, _amount, _amount);
    }

    function getAllHistory() public view returns(History[] memory){
        uint256 itemCount = _historyIndex;
        uint256 currentIndex = 0;

        History[] memory items = new History[] (itemCount);
        for(uint256 i =0; i< itemCount; i++){
            uint256 currentId = i + 1;
            History storage currentItem = historys[currentId];
            items[currentIndex] = currentItem;
            currentIndex +=1;
        }
        return items;
    }
}

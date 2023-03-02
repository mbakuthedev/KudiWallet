// SPDX-License-Identifier: MIT
pragma solidity 0.8.7;

contract Kudiwallet{
    //This wallet only allows the account that deploys the smart contract to be able to withdraw
address payable public owner;

    constructor(){
        msg.sender == owner;
    }
    modifier requireOwner() {
        require(msg.sender == owner, "Not owner!");
        _;
    }
    function withdraw(uint _amount) external payable requireOwner{
       payable (msg.sender).transfer(_amount);
    }
    function getBalance() external view returns(uint){
        return address(this).balance;
    }
}
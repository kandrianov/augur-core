pragma solidity 0.4.17;


import 'trading/Order.sol';


contract IFillOrder {
    function publicFillOrder(bytes32 _orderId, uint256 _amountFillerWants, uint256 _tradeGroupId) external payable returns (uint256);
    function fillOrder(address _filler, bytes32 _orderId, uint256 _amountFillerWants, uint256 tradeGroupId) external returns (uint256);
}

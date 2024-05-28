// SPDX-License-Identifier: MIT
pragma solidity ^0.8.23;

contract SmartContract {
    uint256 public value;

    function requireValue(uint256 _newValue) external {
        require(_newValue >= 200 && _newValue <= 4000, "There is a value range of 200 to 4000 that you cannot exceed.");
        value = _newValue;
    }

    function assertValue(uint256 _num) external pure returns (uint256) {
        assert(_num >= 200 && _num <= 4000);
        return _num;
    }

    function revertValue(uint256 _num) external pure returns (uint256) {
        if (!(_num >= 200 && _num <= 4000)) {
            revert("It must have a value between 200 and 4000.");
        }
        return _num;
    }

    // Function to set a specific value if all checks pass
    function setValue(uint256 _value) external {
        require(_value >= 200 && _value <= 4000, "Value must be between 200 and 4000.");
        assert(_value >= 200 && _value <= 4000); // This will always pass due to the require above
        if (!(_value >= 200 && _value <= 4000)) {
            revert("Value must be between 200 and 4000."); // This will not trigger due to the require above
        }

        value = _value;
    }
}

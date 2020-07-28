---
name: Introduction
menu: Getting Started
route: /
---
# Welcome to Ethcode documentation!

Ethcode is a powerful, open source IDE that helps you write Solidity and Vyper Smart Contracts straight from the VS Code.

Ethcode also supports testing, debugging and deploying **(multiple test networks)** of smart contracts and much more. Our IDE tool is available at [our GitHub repository](https://github.com/quantanet/ethcode)

This set of documents covers instructions on how to use Ethcode and some tutorials to help you get started.

Useful links:
* [Solidity documentation](https://solidity.readthedocs.io/en/v0.6.4/)
* [Community Support Channel](https://gitter.im/Ethereum-Devtools-Developers-Studio/ethcode)



## Installation

You can install Ethcode from VS Code marketplace.

![Screenshot from 2020-03-16 17-56-14](https://user-images.githubusercontent.com/9979182/76758502-ce854680-67af-11ea-9430-cc03b1c45e5d.png)

To install manually:

* Download the **vsix** file from [marketplace](https://marketplace.visualstudio.com/items?itemName=quantanetwork.ethcode).
* Goto extensions tab and install from **vsix**.

![Screenshot from 2020-03-16 18-09-14](https://user-images.githubusercontent.com/9979182/76759278-5cadfc80-67b1-11ea-9315-e1426871bb6d.png)

## Activate Ethcode

Press **Ctrl + Alt + e ** to activate Ethcode.

Let us begin with the most basic example.

### Storage

```
contract SimpleStorage {
    uint storedData;
    function set(uint x) {
        storedData = x;
    }
    function get() constant returns (uint retVal) {
        return storedData;
    }
}
```
A contract in the sense of Solidity is a collection of code (its functions) and data (its state) that resides at a specific address on the Ethereum blockchain. The line uint storedData; declares a state variable called storedData of type uint (unsigned integer of 256 bits). You can think of it as a single slot in a database that can be queried and altered by calling functions of the code that manages the database. In the case of Ethereum, this is always the owning contract. And in this case, the functions set and get can be used to modify or retrieve the value of the variable.

To access a state variable, you do not need the prefix this. as is common in other languages.

This contract does not yet do much apart from (due to the infrastructure built by Ethereum) allowing anyone to store a single number that is accessible by anyone in the world without (feasible) a way to prevent you from publishing this number. Of course, anyone could just call set again with a different value and overwrite your number, but the number will still be stored in the history of the blockchain. Later, we will see how you can impose access restrictions so that only you can alter the number. -->
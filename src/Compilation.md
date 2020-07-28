---
name: Compiler
menu: Getting Started
---

# Compiler

Ethcode auto-detect the file wheather it's **solidity** or **vyper** and sets your environment according to that.

Compiling triggered when you hit **Ctrl + Alt + C** (make sure your active window is the smart contract).

Ethcode fetches updated version of solidity compiler. If you are compiling different versions of smart contract then please select your version from **solidity version selector**.

After each compilation, a list is updated with all newly compiled contracts. A compiled contract can be selected with the Contract pulldown menu **(see below image)**. Multiple contracts are compiled when one contract imports other contracts. Selecting a contract will show information about that one.

![contracts](https://user-images.githubusercontent.com/9979182/76950720-7f1a5400-6930-11ea-8ad1-6e17011f85bf.png)

After successful compilation, Ethcode displays detailed information about the current selected contract. Compiled contract notably contains the **abi** and the **byte code**. Compilation Errors and Warning are displayed below the contract section.

![contract details](https://user-images.githubusercontent.com/9979182/76951260-63fc1400-6931-11ea-9637-71cf7a52b9b5.png)



---
name: Compilation
route: /docs/getting-started
---

# Compilation

Ethcode auto-detect the file wheather it's **solidity** or **vyper** and sets your environment according to that.

Compilation triggered when you hit **Ctrl + Alt + C** (make sure your active window is the smart contract).

Ethcode fetches updated version of solidity compiler. If you are compiling different versions of smart contract then please select your version from **solidity version selector**.

After each compilation, a list is updated with all newly compiled contracts. A compiled contract can be selected with the Contract pulldown menu **(see image below)**. Multiple contracts are compiled when one contract imports other contracts. Selecting a contract will show information about that one.

![contracts](https://user-images.githubusercontent.com/9979182/93399480-4df8ed00-f89b-11ea-997f-ccee3cd37452.png)

After successful compilation, Ethcode displays detailed information about the current selected contract. Compiled contract notably contains the **abi** and the **byte code**. Compilation Errors and Warning are displayed below the contract section.

![contract details](https://user-images.githubusercontent.com/9979182/93399652-a203d180-f89b-11ea-845b-e59759cdd5d9.png)


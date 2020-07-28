import * as React from "react";
import { Helmet } from "react-helmet-async";

// The doc prop contains some metadata about the page being rendered that you can use.
const Wrapper = ({ children, doc }) => (
  <React.Fragment>
    <Helmet>
      <meta charset="utf-8" />
      <meta http-equiv="X-UA-Compatible" content="IE=edge" />
      <meta name="viewport" content="width=device-width,initial-scale=1.0" />
      <meta
        name="description"
        content="Ethcode is a Visual Studio Code plugin for Ethereum Blockchain application development. Features include Solidity and Vyper compilation, Transaction debugging and unit-testing."
      />
      <meta name="keywords" content="ethcode, ethereum, solidity, vyper, smart contract, dApp" />
      <title>Ethcode | A Visual Studio Code plugin for Ethereum Blockchain</title>
      <link rel="icon" type="image/png" href="https://ethcode.dev/favicon.ico" />
    </Helmet>
    {children}
  </React.Fragment>
);
export default Wrapper;

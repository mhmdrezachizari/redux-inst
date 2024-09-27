const { createStore } = require("redux");
// import { createStore } from "redux";
const { default: MobileStoreReducer } = require("./MobileStoreReducer");

export const data = createStore(MobileStoreReducer)
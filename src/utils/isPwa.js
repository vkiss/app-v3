import { getQueryParams } from "$/utils";

export default () => {
  return getQueryParams( "source" ) === "pwa";
};

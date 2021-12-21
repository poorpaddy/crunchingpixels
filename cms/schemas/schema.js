import createSchema from "part:@sanity/base/schema-creator";
import schemaTypes from "all:part:@sanity/base/schema-type";
import saga from "./saga";
import portfolio from "./portfolio";
import category from "./category";

export default createSchema({
  name: "Sagas",
  types: schemaTypes.concat([category, saga, portfolio]),
});

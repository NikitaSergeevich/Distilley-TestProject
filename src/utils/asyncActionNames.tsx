export default (actionName : string) => ({
  LOADING: `${actionName}_LOADING`,
  SUCCESS: `${actionName}_SUCCESS`,
  FAIL: `${actionName}_FAIL`,
  toString: () => actionName,
});

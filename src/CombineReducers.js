export default function combineReducers(reducers){
  return (state = {}, action) => {
    const keys = Object.keys(reducers);
    const nextReducers = {};
    for (let i = 0; i < keys.length; i++) {
      const invoke = reducers[keys[i]](state[keys[i]], action);
      nextReducers[keys[i]] = invoke;
    }
    return nextReducers;
  };
}



export const ideasReducer = (state = [], action) => {
  console.log('ideasReducer')
  switch(action.type) {
    case 'ADD_IDEA':
      return [...state, action.idea];
    default:
      return state;
  }
}
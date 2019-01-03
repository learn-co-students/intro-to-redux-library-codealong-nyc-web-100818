export default function shoppingListItemReducer(
	state = {
		items: []
	},
	action
) {
	console.log(action);
	switch (action.type) {
		case 'INCREASE_COUNT':
		   console.log('Current state.items length %s', state.items.length);
 			return state.items.concat(state.items.length + 1);
			console.log('Updating state.items length to %s', state.items.length + 1);
			return Object.assign({}, state, {
				items: state.items.concat(state.items.length + 1)
             });
						 default:
						 console.log('Initial state.itmes lenght: %s', state.items.lenght);
						 return state

	switch (action.type) {
		case 'INCREASE_COUNT':
			return state.items.concat(state.items.length + 1);

		default:
			return state;
	}
}

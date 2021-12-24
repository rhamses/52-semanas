export function mutGoals (state, payload) {
  state.goals.push(payload);
}

export function mutPayment (state, payload) {
  const goal = JSON.stringify(payload.goal);
  const goalIndex = state.goals.findIndex(item => JSON.stringify(item) === goal)
  state.goals[goalIndex].weeks[payload.index].status = payload.status;
}

export function mutAnimation (state, payload) {
  state.animation = payload
}

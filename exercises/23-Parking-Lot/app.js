let parking_state = [
  [1, 0, 1, 1],
  [0, 0, 0, 2],
  [1, 1, 2, 1],
  [2, 1, 1, 1]
]

let state = {};

const getParkingLotState = (arr) => {
  state.totalSlots = 0
  state.availableSlots = 0
  state.occupiedSlots = 0
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr[i].length; j++) {
      switch (arr[i][j]) {
        case 1:
          state.occupiedSlots++;
          state.totalSlots++;
          break;
        case 2:
          state.availableSlots++;
          state.totalSlots++;
          break;
      } 
  }
}
return state;
};

console.log(getParkingLotState(parking_state));
console.log(getParkingLotState(parking_state2));
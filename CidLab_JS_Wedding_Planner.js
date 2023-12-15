function distributeGuests(totalGuest, numberOfTables){

  let guestPerTable = Math.ceil (totalGuest/numberOfTables);
  let leftoverGuests = totalGuest % guestPerTable;
  let fullTables = numberOfTables - 1
  let leftoverTable = 1
    
  return{
    totalGuest:totalGuest,
    numberOfTables:numberOfTables,
    guestPerTable:guestPerTable,
    leftoverGuests:leftoverGuests,
    fullTables:fullTables,
    leftoverTable:leftoverTable,

  }
 

}


 let totalGuestInput = prompt ("How many guests do you have?");
 let numberOfTablesInput= prompt("How many tables do you want?");


  let totalGuest = parseInt(totalGuestInput);
  let numberOfTables = parseInt(numberOfTablesInput);

  if (isNaN(totalGuest) || isNaN(numberOfTables) || totalGuest < 0 || numberOfTables <= 0) {
          alert("Invalid input. Please enter valid positive numbers.");
      } else {
        let result = distributeGuests(totalGuest, numberOfTables);
          alert(`Your ${totalGuest} will be seated as followed: ${result.fullTables} tables of ${result.guestPerTable} guests and ${result.leftoverTable} table of ${result.leftoverGuests} guests.`);
      }

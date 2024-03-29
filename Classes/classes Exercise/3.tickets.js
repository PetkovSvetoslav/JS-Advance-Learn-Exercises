function solve(ticketsArr, sortingCriteria){

    let tickets = [];
    
    class Ticket {
        constructor(destination, price, status){
    this.destination =destination;
    this.price = price;
    this.status =status;
        }
    
    compareTo(other, criteria){
    if (typeof this[criteria] === 'string') {
        return this[criteria].localeCompare(other[criteria]);
    } else {
        return this[criteria] - other[criteria];
    }
    }

}

for (let index = 0; index < ticketsArr.length; index++) {
  let [destination, price, status] = ticketsArr[index].split('|');
    price = Number(price);
    let ticket = new Ticket(destination, price, status);
    tickets.push(ticket);
}

tickets.sort((a,b) => a.compareTo(b, sortingCriteria));
return tickets;

}
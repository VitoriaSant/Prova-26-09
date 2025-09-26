    
interface bookingdates {
    checkin :  String;
    checkout : String
}

export class Reserva {
    id: number;
    firstname : string;
    lastname : string;
    totalprice : number;
    depositpaid : boolean;
    bookingdates : bookingdates[]
    additionalneeds : string;

    constructor(
        id: number,
        firstname : string,
        lastname : string,
        totalprice : number,
        depositpaid : boolean,
        bookingdates : bookingdates[],
        additionalneeds : string,
    ) {
        this.id = id;
        this.firstname = firstname;
        this.lastname = lastname;
        this.totalprice = totalprice;
        this.depositpaid = depositpaid;
        this.bookingdates = bookingdates;
        this. additionalneeds = additionalneeds;
    }
}
export default Reserva;
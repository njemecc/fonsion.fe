interface GuestCompanion{
    firstName:string,
    lastName:string
}



export interface CreateReservationRequestDto {
    userId: string,
    roomId:string,
    fromDate:Date,
    toDate:Date,
    guestCompanions?:Array<GuestCompanion>
    promoCodeId? : string
}
export class IUser {
  
    firstName: string;
    lastName: string;
    lastLogin: Date;
    id:number;
    username:string;
    password:string;
    email:string;
    contactNumber:number;
    bankBranchCode:string;
    userStatus:string
    lastUpdated:Date;
    address:IAddress;
    account:IAccount[];
    recipientList:IRecipient[];
    isAdminRole:string;
    isUserRole:string;

}

export class IAccount {
    accountNumber: string;
    accountBalance: string;
    lastTransactionDate: string;
    accountType: string;
    
}

export class IAddress {

}

export class IRecipient {

}
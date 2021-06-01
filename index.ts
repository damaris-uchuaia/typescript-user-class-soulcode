interface UserProps{
    firstName: string,
    lastName: string,
    userName: string,
    email: string,
    password: string,
    cpf: string,
    contact: string,
    isAdmin: boolean
}

class User implements UserProps{
    firstName: string ='';
    lastName: string ='';
    userName: string ='';
    email: string ='';
    password: string ='';
    cpf: string ='';
    contact: string ='';
    isAdmin: boolean = false;
    
    constructor(
        firstName: string,
        lastName: string,
        userName: string,
        email: string,
        password: string,
        cpf: string,
        contact: string,
        isAdmin: boolean
    ) {
        this.firstName = firstName
        this.lastName = lastName
        this.userName = userName
        this.email = email
        this.password = password
        this.cpf = cpf
        this.contact = contact
        this.isAdmin = isAdmin
    }

    getFirstName():string{
        return this.firstName
    }
    setFirstName(firstName:string):void{ //void = sem retorno
        this.firstName = firstName
    }

    getLastName():string{
        return this.lastName
    }
    setLastName(lastName:string):void{ //void = sem retorno
        this.lastName = lastName
    }
    getUserName():string{
        return this.userName
    }
    setUserName(userName:string):void{ //void = sem retorno
        this.userName = userName
    }
    getEmail():string{
        return this.email
    }
    setEmail(email:string):void{ //void = sem retorno
        this.email = email
    }
    getPassword():string{
        return this.password
    }
    setPassword(password:string):void{ //void = sem retorno
        this.password = password
    }
    getCpf():string{
        return this.cpf
    }
    setCpf(cpf:string):void{ //void = sem retorno
        this.cpf = cpf
    }
    getContact():string{
        return this.contact
    }
    setContact(contact:string):void{ //void = sem retorno
        this.contact = contact
    }
    getIsAdmin(): boolean {
        return this.isAdmin
      }
    
      setIsAdmin(isAdmin: boolean) {
        this.isAdmin = isAdmin
      }

    toString(): string{
        return JSON.stringify(this)
    }
}
const user = new User('Damaris', 'Uchuaia', 'damaris123', 'damaris@gmail.com', '8383737337', '01854918206', 'rua Gilmar', true);
console.log(user.toString())

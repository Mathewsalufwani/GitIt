export class User {
  constructor(public login:string, public bio:string, public name:string, public avatar_url:string, public followers:number, public following:number, public created_at:Date, public public_repos:number){}
}

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import { CompleteUserInterface, UserInterface } from './user-interface';
import { MessageService } from 'primeng/api';

@Injectable({
  providedIn: 'root',
})
export class UserService {

  private subject = new BehaviorSubject<UserInterface[]>([{
    contrasena:"",
    correoElectronico:"",
    nombre:"",
    perfil:""
  }]);
  users$ = this.subject.asObservable()
  constructor(private http:HttpClient, private messageService:MessageService) { 
  }

  private urlApi = "/usuarios/"

  sendLogin(data:any): Observable<any>{
    return this.http.post(this.urlApi+"auth",data)
  }

  createUser(user: UserInterface): void{
    this.http.post<UserInterface>(this.urlApi+"create", user, {withCredentials:true}).subscribe(
    {
      next: ()=>{this.subject.next([...this.subject.value,user]);},
      error: (error)=>{
        this.messageService.add({ severity: 'danger', summary: 'Error usuarios', detail: 'No se pudo crear el usuario', life: 3000 });
      }
    }
  )
}

  updateUser(user: CompleteUserInterface): void{
    this.http.post<CompleteUserInterface>(this.urlApi+"create", user, {withCredentials:true}).subscribe(
    {
      next:(update)=>{  
        const updatedUser = this.subject.value.map(u=>
          u.nombre === update.nombre ? user: u
        )
        this.subject.next(updatedUser)
      },
      error: (error)=>{
        this.messageService.add({ severity: 'danger', summary: 'Error usuarios', detail: 'No se pudo editar el usuario', life: 3000 });
      }
    })
    
  }

  findUser(username:string): Observable<any>{
    return this.http.get(this.urlApi+"find/"+username, {withCredentials:true})
  }

  getUsers(): void{
    this.http.get<UserInterface[]>(this.urlApi, {withCredentials:true}).subscribe(
    {
      next: (users)=>{
        this.subject.next(users);
      },
      error: (error)=>{
        this.messageService.add({ severity: 'danger', summary: 'Error usuarios', detail: 'No se pudo crear el usuario', life: 3000 });
      }
    })
  }
}

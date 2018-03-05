import { Injectable } from "@angular/core";
import { Http } from "@angular/http";
import {Subject} from 'rxjs/Subject';
import 'rxjs/add/operator/toPromise'

@Injectable()
export class WebServices{
    messageStore = [];
    messageSubject = new Subject();
    messages = this.messageSubject.asObservable();
    BASE_URL = 'http://localhost:3456/api';

    constructor (private http: Http ){

    }

    async postMessages(newMessage){
        // try to see if this can be done via observables 
        console.log('POST::');
        
        var response = await this.http.post(this.BASE_URL + '/messages', newMessage).toPromise();
        this.messageStore.push(response.json());
        this.messageSubject.next(this.messageStore);
    }

    getMessages(){
        this.http.get(this.BASE_URL + '/messages').subscribe( res => {
            console.log(res.json());
            this.messageStore = res.json();
            this.messageSubject.next(this.messageStore);
        })
    }
}
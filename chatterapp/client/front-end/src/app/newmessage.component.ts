import { Component } from "@angular/core";
import { MatInputModule, MatCardModule, MatFormFieldModule } from "@angular/material";
import { FormsModule, ReactiveFormsModule} from '@angular/forms';
import { WebServices } from "./web.services";

@Component({
    selector: 'newmessage',
    template: `
    <mat-card class="newcard">
       <mat-form-field>
            <input matInput type="text" placeholder="message content" [(ngModel)]="newMessage.content">
       </mat-form-field>
       <button mat-raised-button color="warn" (click)="postNewMessage()">SEND</button>

    </mat-card>
    `,

})
export class NewMessage{
    constructor (private webservie: WebServices){

    }
    newMessage = 
        {
            "content": "",
            "owner": "",
            "posted_on": new Date()
        }
    
    // 
    private postNewMessage(){
        // console.log(this.newMessage);
        this.webservie.postMessages(this.newMessage);
        
    }
    
    //doesnt make sense to get msgs
}
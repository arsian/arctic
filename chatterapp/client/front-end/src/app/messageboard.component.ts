import { Component } from "@angular/core";
import { MatInputModule, MatCardModule, MatFormFieldModule } from "@angular/material";
import { WebServices } from "./web.services";
@Component({
    selector: 'message-board',
    template: `
    
    <div *ngFor="let message of webservice.messages | async">

        <mat-card class="singlemsg">
            <p>{{message.owner}}: {{message.content}}</p>
        </mat-card>
    </div>
    `

})
export class MessageBoard{
    constructor (private webservice: WebServices){

    }
    ngOnInit(){
        this.webservice.getMessages();
    }

    
}
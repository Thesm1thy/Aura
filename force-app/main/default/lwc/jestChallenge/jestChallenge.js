import { LightningElement, track } from 'lwc';
import createContact from '@salesforce/apex/contactController.createContact';

export default class JestChallenge extends LightningElement {
    @track firstName = '';
    @track lastName = '';
    accName = 'GenePoint';

    fNameChange(event) {
        this.firstName = event.target.value;
    }

    lNameChange(event) {
        this.lastName = event.target.value;
    }

    handleClick() {
        createContact({ firstName: this.firstName, lastName: this.lastName, accountName: this.accName })
            .then(() => {
                console.log('Contact created successfully');
            })
            .catch(error => {
                console.error('Error creating contact: ', error);
            });
    }
}

import { LightningElement } from 'lwc';

export default class Lwx32 extends LightningElement {

    array = [1, 2, 3];
    new = [];

    inputs = {
        firstname: '',
        lastname: '',
        email: '',
        website: '',
        company: '',
        annualrevenue: '',
    }

    handleInputChange(event) {
        this.firstname = event.detail.value;
        this.lastname = event.detail.value;
        this.email = event.detail.value;
        this.website = event.detail.value;
        this.company = event.detail.value;
        this.annualrevenue = event.detail.value;

        let nameinput = event.target.name;
        let value = event.detail.value;

        this.inputs = {
            [nameinput]: value
        };

        console.log(this.inputs);

    }
    onSpread() {
        this.new[7, 8, 9, 10, 11, this.array];
        console.log(this.new);

        this.new = [7, 8, 9, 10, 11, ...this.array];
        console.log(this.new);
    }



}
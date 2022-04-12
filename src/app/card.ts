export class Card {

    showDetails: boolean;
    n!: number;
    u!: number;

    constructor(public title: string, public steps: any[]) {

        this.showDetails = false;
        this.n = 0;
        this.u = 0;

    }

}

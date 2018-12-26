export class Greeter {

    constructor (public name: string) {}

    greet (): string {

        return `Hello ${this.name}`;
    }
}

export function bootstrap () {

    const greeter  = new Greeter('Alex');
    const headline = document.createElement('h1');

    headline.textContent = greeter.greet();
    document.body.appendChild(headline);
}

window.addEventListener('load', bootstrap);
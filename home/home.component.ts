import { Component } from '@angular/core';

@Component({
    template: `
        <div class="starter-template">
            <h1>{{pageTitle}}</h1>
            <p class="lead">Use this document as a way to quickly start any new project.<br> All you get is this text and a mostly barebones HTML document.</p>
        </div>
    `
})
export class HomeComponent {
    public pageTitle: string = "Welcome";
}
import { NgModule, NO_ERRORS_SCHEMA } from "@angular/core";
import { NativeScriptModule } from "@nativescript/angular";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { TodoComponent } from "./todo/todo.component";

@NgModule({
    bootstrap: [AppComponent],
    imports: [NativeScriptModule, AppRoutingModule],
    declarations: [AppComponent, TodoComponent],
    schemas: [NO_ERRORS_SCHEMA],
})
export class AppModule {}
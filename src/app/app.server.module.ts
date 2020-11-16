import { NgModule } from '@angular/core';
import { ServerModule, ServerTransferStateModule } from '@angular/platform-server';

import { AppModule } from './app.module';
import { AppComponent } from './app.component';
import { ContentService } from './content.service';
import { ContentServerService } from './content-server.service';

@NgModule({
  imports: [
    AppModule,
    ServerModule,
    ServerTransferStateModule
  ],
  providers: [
    {provide: ContentService, useClass: ContentServerService}
  ],
  bootstrap: [AppComponent],
})
export class AppServerModule {}
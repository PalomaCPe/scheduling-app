import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';		
import { AppModule } from './app.module';
import {RoleModule} from './role/role.module';	
 		
platformBrowserDynamic().bootstrapModule(AppModule,RoleModule);
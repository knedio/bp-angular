import { NgModule, Optional, SkipSelf } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { EnsureModuleLoadedOnceGuard } from './ensureModuleLoadedOnceGuard';

import { AuthenticationService } from './authentication/authentication.service';

// Interceptors
import { ApiPrefixInterceptor } from './interceptors/api-prefix/api-prefix.interceptor';
import { HttpTokenInterceptor } from './interceptors/http-token/http-token.interceptor';

@NgModule({
  imports: [
    CommonModule,
		FormsModule,
    ReactiveFormsModule,
		HttpClientModule,
  ],
	exports: [
		FormsModule,
		ReactiveFormsModule,
		HttpClientModule,
	],
	providers: [
		AuthenticationService,
		{
			provide: HTTP_INTERCEPTORS,
			useClass: HttpTokenInterceptor,
			multi: true
		},
		{
			provide: HTTP_INTERCEPTORS,
			useClass: ApiPrefixInterceptor,
			multi: true,
		},
	],
})
export class CoreModule extends EnsureModuleLoadedOnceGuard {    // Ensure that CoreModule is only loaded into AppModule
	// Looks for the module in the parent injector to see if it's already been loaded (only want it loaded once)
	constructor(@Optional() @SkipSelf() parentModule: CoreModule) {
		super(parentModule);
	}
}

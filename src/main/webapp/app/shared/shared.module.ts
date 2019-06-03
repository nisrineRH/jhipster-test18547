import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { Test18547SharedLibsModule, Test18547SharedCommonModule, JhiLoginModalComponent, HasAnyAuthorityDirective } from './';

@NgModule({
  imports: [Test18547SharedLibsModule, Test18547SharedCommonModule],
  declarations: [JhiLoginModalComponent, HasAnyAuthorityDirective],
  entryComponents: [JhiLoginModalComponent],
  exports: [Test18547SharedCommonModule, JhiLoginModalComponent, HasAnyAuthorityDirective],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class Test18547SharedModule {
  static forRoot() {
    return {
      ngModule: Test18547SharedModule
    };
  }
}

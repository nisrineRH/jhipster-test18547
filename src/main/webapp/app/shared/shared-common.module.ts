import { NgModule } from '@angular/core';

import { Test18547SharedLibsModule, JhiAlertComponent, JhiAlertErrorComponent } from './';

@NgModule({
  imports: [Test18547SharedLibsModule],
  declarations: [JhiAlertComponent, JhiAlertErrorComponent],
  exports: [Test18547SharedLibsModule, JhiAlertComponent, JhiAlertErrorComponent]
})
export class Test18547SharedCommonModule {}

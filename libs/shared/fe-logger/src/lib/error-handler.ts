import { ErrorHandler, Injectable } from '@angular/core';
import { EsLogger } from './logger';

/**
 * Provides a hook for centralized exception handling.
 * This is an extension of Angular's default error handling implementation, `ErrorHandler`.
 *
 * @usageNotes
 * When providing this service in your root module, add it like this:
 * ```
 * const ErrorHandlerProvider: Provider = {
 *     provide: ErrorHandler,
 *     useClass: EsErrorHandler
 * };
 * @NgModule({
 *     imports: [...],
 *     declarations: [...],
 *     providers: [
 *         ...
 *         ErrorHandlerProvider
 *     ],
 *     bootstrap: [AppComponent]
 * })
 * ```
 */
@Injectable({
  providedIn: 'root',
})
export class EsErrorHandler extends ErrorHandler {
  constructor(private _logger: EsLogger) {
    super();
  }

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  handleError(error: any): void {
    super.handleError(error);
    this._logger.error(error.message);
  }
}

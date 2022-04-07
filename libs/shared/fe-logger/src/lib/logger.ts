import { Inject, Injectable } from '@angular/core';
import { LoggingLevel } from './types';

/**
 * A service to log messages to the console and any other configured service, such as Sentry.
 *
 * @usageNotes
 * Provide this service in your root module like so:
 * ```
 * const LoggerProvider: Provider = {
 *     provide: EsLogger,
 *     useFactory: () => new EsLogger(LoggingLevel.Info)
 * };
 * @NgModule({
 *     imports: [...],
 *     declarations: [...],
 *     providers: [
 *         ...
 *         LoggerProvider
 *     ],
 *     bootstrap: [AppComponent]
 * })
 * ```
 */
@Injectable({
  providedIn: 'root',
})
export class EsLogger {
  readonly loggingLevel: LoggingLevel;

  constructor(@Inject('loggingLevel') loggingLevel: LoggingLevel) {
    this.loggingLevel = loggingLevel;
  }

  error(message: string): void {
    if (!this._shouldLog(LoggingLevel.Errors)) {
      return;
    }
    console.error(message);
  }

  warn(message: string): void {
    if (!this._shouldLog(LoggingLevel.Warnings)) {
      return;
    }
    console.warn(message);
  }

  info(message: string): void {
    if (!this._shouldLog(LoggingLevel.Info)) {
      return;
    }
    // eslint-disable-next-line no-restricted-syntax
    console.info(message);
  }

  log(message: string): void {
    // eslint-disable-next-line no-restricted-syntax
    console.log(message);
  }

  private _shouldLog(level: LoggingLevel): boolean {
    if (this.loggingLevel === LoggingLevel.None) {
      return false;
    }

    if (this.loggingLevel === LoggingLevel.Errors) {
      return level === LoggingLevel.Errors;
    }

    if (this.loggingLevel === LoggingLevel.Warnings) {
      return level === LoggingLevel.Errors || level === LoggingLevel.Warnings;
    }

    if (this.loggingLevel === LoggingLevel.Info) {
      return level === LoggingLevel.Errors || level === LoggingLevel.Warnings || level === LoggingLevel.Info;
    }

    return true;
  }
}

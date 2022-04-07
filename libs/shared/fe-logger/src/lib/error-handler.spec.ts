import { ErrorHandler, Provider } from '@angular/core';
import { createServiceFactory, SpectatorService } from '@ngneat/spectator/jest';
import { EsErrorHandler } from './error-handler';
import { EsLogger } from './logger';
import { LoggingLevel } from './types';

describe('EsErrorHandler', () => {
  let spectator: SpectatorService<EsErrorHandler>;
  let superHandler: jest.SpyInstance<any>;
  let loggerErrorSpy: jest.SpyInstance<any>;

  const ErrorHandlerProvider: Provider = {
    provide: ErrorHandler,
    useClass: EsErrorHandler,
  };
  const LoggerProvider: Provider = {
    provide: EsLogger,
    useFactory: () => new EsLogger(LoggingLevel.Info),
  };

  const createService = createServiceFactory({
    service: EsErrorHandler,
    providers: [ErrorHandlerProvider, LoggerProvider],
  });

  beforeEach(() => {
    spectator = createService();
    superHandler = jest.spyOn(ErrorHandler.prototype, 'handleError');
    loggerErrorSpy = jest.spyOn(spectator.service['_logger'], 'error');
  });

  describe('handleError', () => {
    it('should call the super class handleError', () => {
      const error = new Error();
      spectator.service.handleError(error);
      expect(superHandler).toHaveBeenCalledWith(error);
    });

    it('should call the error method from EsLogger', () => {
      const error = new Error('an example error msg');
      spectator.service.handleError(error);
      expect(loggerErrorSpy).toHaveBeenCalledWith('an example error msg');
    });
  });
});

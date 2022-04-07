import { createServiceFactory, SpectatorService } from '@ngneat/spectator/jest';
import { EsLogger } from './logger';
import { LoggingLevel } from './types';

describe('EsLogger', () => {
  let spectator: SpectatorService<EsLogger>;

  describe('LoggingLevel.None', () => {
    const createService = createServiceFactory({
      service: EsLogger,
      providers: [{ provide: 'loggingLevel', useValue: LoggingLevel.None }],
    });

    beforeEach(() => (spectator = createService()));

    it('error - should NOT emit', () => {
      const consoleError = jest.spyOn(console, 'error');
      spectator.service.error('message');
      expect(consoleError).not.toHaveBeenCalledWith('message');
    });

    it('warn - should NOT emit', () => {
      const consoleWarn = jest.spyOn(console, 'warn');
      spectator.service.warn('message');
      expect(consoleWarn).not.toHaveBeenCalledWith('message');
    });

    it('info - should NOT emit', () => {
      const consoleInfo = jest.spyOn(console, 'info');
      spectator.service.info('message');
      expect(consoleInfo).not.toHaveBeenCalledWith('message');
    });

    it('log - should emit', () => {
      const consoleLog = jest.spyOn(console, 'log');
      spectator.service.log('message');
      expect(consoleLog).toHaveBeenCalledWith('message');
    });
  });

  describe('LoggingLevel.Errors', () => {
    const createService = createServiceFactory({
      service: EsLogger,
      providers: [{ provide: 'loggingLevel', useValue: LoggingLevel.Errors }],
    });

    beforeEach(() => (spectator = createService()));

    it('error - should emit', () => {
      const consoleError = jest.spyOn(console, 'error');
      spectator.service.error('message');
      expect(consoleError).toHaveBeenCalledWith('message');
    });

    it('warn - should NOT emit', () => {
      const consoleWarn = jest.spyOn(console, 'warn');
      spectator.service.warn('message');
      expect(consoleWarn).not.toHaveBeenCalledWith('message');
    });

    it('info - should NOT emit', () => {
      const consoleInfo = jest.spyOn(console, 'info');
      spectator.service.info('message');
      expect(consoleInfo).not.toHaveBeenCalledWith('message');
    });

    it('log - should emit', () => {
      const consoleLog = jest.spyOn(console, 'log');
      spectator.service.log('message');
      expect(consoleLog).toHaveBeenCalledWith('message');
    });
  });

  describe('LoggingLevel.Warnings', () => {
    const createService = createServiceFactory({
      service: EsLogger,
      providers: [{ provide: 'loggingLevel', useValue: LoggingLevel.Warnings }],
    });

    beforeEach(() => (spectator = createService()));

    it('error - should emit', () => {
      const consoleError = jest.spyOn(console, 'error');
      spectator.service.error('message');
      expect(consoleError).toHaveBeenCalledWith('message');
    });

    it('warn - should emit', () => {
      const consoleWarn = jest.spyOn(console, 'warn');
      spectator.service.warn('message');
      expect(consoleWarn).toHaveBeenCalledWith('message');
    });

    it('info - should NOT emit', () => {
      const consoleInfo = jest.spyOn(console, 'info');
      spectator.service.info('message');
      expect(consoleInfo).not.toHaveBeenCalledWith('message');
    });

    it('log - should emit', () => {
      const consoleLog = jest.spyOn(console, 'log');
      spectator.service.log('message');
      expect(consoleLog).toHaveBeenCalledWith('message');
    });
  });

  describe('LoggingLevel.Info', () => {
    const createService = createServiceFactory({
      service: EsLogger,
      providers: [{ provide: 'loggingLevel', useValue: LoggingLevel.Info }],
    });

    beforeEach(() => (spectator = createService()));

    it('error - should emit', () => {
      const consoleError = jest.spyOn(console, 'error');
      spectator.service.error('message');
      expect(consoleError).toHaveBeenCalledWith('message');
    });

    it('warn - should emit', () => {
      const consoleWarn = jest.spyOn(console, 'warn');
      spectator.service.warn('message');
      expect(consoleWarn).toHaveBeenCalledWith('message');
    });

    it('info - should emit', () => {
      const consoleInfo = jest.spyOn(console, 'info');
      spectator.service.info('message');
      expect(consoleInfo).toHaveBeenCalledWith('message');
    });

    it('log - should emit', () => {
      const consoleLog = jest.spyOn(console, 'log');
      spectator.service.log('message');
      expect(consoleLog).toHaveBeenCalledWith('message');
    });
  });
});

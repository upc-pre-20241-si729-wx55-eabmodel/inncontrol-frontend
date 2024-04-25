import { FakeApiService } from './fake-api-task';

describe('FakeApiService', () => {
  it('should create an instance', () => {
    // @ts-ignore
    expect(new FakeApiService()).toBeTruthy();
  });
});

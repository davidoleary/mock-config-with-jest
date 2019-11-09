import { process } from './process';
import { menuService } from './config';

describe('test', () => {
  test('set true', () => {
    menuService.isEnabled = true
    const result = process();
    expect(result).toEqual('is enabled')
  })
  
  test('set false', () => {
    menuService.isEnabled = false

    const result = process();
    expect(result).toEqual('is not enabled')
  })
})
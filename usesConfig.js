import { menuService } from './config';

const doSomething = () => {
  if (menuService.isEnabled){
    console.log('menuService.isEnabled', menuService.isEnabled)
    return 'is enabled';
  } else {
    console.log('menuService.isEnabled', menuService.isEnabled)
    return 'is not enabled';
  }
}

export { doSomething };

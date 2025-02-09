import { WebPlugin } from '@capacitor/core';
import type { CapacitorException, PluginListenerHandle } from '@capacitor/core';
import type { CapacitorNodeJSPlugin } from './implementation';

export class CapacitorNodeJSWeb extends WebPlugin implements CapacitorNodeJSPlugin {
  protected unavailableNodeJS(): CapacitorException {
    return this.unavailable('The NodeJS engine is not available in the browser!');
  }

  start(): Promise<void> {
    throw this.unavailableNodeJS();
  }

  send(): Promise<void> {
    throw this.unavailableNodeJS();
  }

  whenReady(): Promise<void> {
    throw this.unavailableNodeJS();
  }
  //eslint-disable-next-line @typescript-eslint/no-unused-vars
  override addListener(eventName: string, _listenerFunc: (data: any) => void): Promise<PluginListenerHandle> & PluginListenerHandle {
    const handle: PluginListenerHandle = {
      remove: async () => {
        console.warn(`Listener for event "${eventName}" is not available in the browser.`);
      }
    };

    return Object.assign(Promise.resolve(handle), handle);
  }
}

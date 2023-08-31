export class EventEmitter {
  listeners: Record<string, any[]> = {};

  on(eventName: string, callback: (data: any) => Promise<void>) {
    if (!this.listeners[eventName]) {
      this.listeners[eventName] = [];
    }
    this.listeners[eventName].push(callback);
  }

  async emit(eventName: string, data: any) {
    const eventListeners = this.listeners[eventName];
    if (eventListeners) {
      for (const callback of eventListeners) {
        await callback(data);
      }
      this.listeners[eventName] = [];
    }
  }
}

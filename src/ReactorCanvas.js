/*
 * Copyright (C) 2020 Eliastik (eliastiksofts.com)
 *
 * This file is part of "JSGameTools".
 *
 * "JSGameTools" is free software: you can redistribute it and/or modify
 * it under the terms of the GNU General Public License as published by
 * the Free Software Foundation, either version 3 of the License, or
 * (at your option) any later version.
 *
 * "JSGameTools" is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 * GNU General Public License for more details.
 *
 * You should have received a copy of the GNU General Public License
 * along with "JSGameTools".  If not, see <http://www.gnu.org/licenses/>.
 */
import Reactor from "./Reactor";

export default class ReactorCanvas extends Reactor {
  registerEvent(eventName) {
    if(!this.events[eventName]) this.events[eventName] = [];
  }

  dispatchEvent(eventName, ...eventArgs) {
    if(this.events[eventName]) {
      const events = this.events[eventName];
      events.forEach(event => event && event.callback && event.callback(...eventArgs));
    }
  }

  dispatchEventComponent(eventName, component, ...eventArgs) {
    if(this.events[eventName]) {
      const events = this.events[eventName];
      events.forEach(event => event && event.callback && event.component == component && event.callback(...eventArgs));
    }
  }

  addEventListener(eventName, component, callback) {
    if(this.events[eventName]) {
      this.events[eventName].push({
        "component": component,
        "callback": callback
      });
    }
  }

  removeEventListener(eventName, callback) {
    if(this.events[eventName]) this.events[eventName].filter(event => event && event.callback != callback);
  }

  removeEventListenerComponent(eventName, component) {
    if(this.events[eventName]) this.events[eventName].filter(event => event && event.component != component);
  }

  removeAllEventListener() {
    this.events = [];
  }
}
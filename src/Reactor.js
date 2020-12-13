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
import Event from "./Event";

export default class Reactor {
  constructor() {
    this.events = {};
  }

  registerEvent(eventName) {
    this.events[eventName] = new Event(eventName);
  }

  dispatchEvent(eventName, ...eventArgs) {
    if(this.events[eventName]) {
      const callbacks = this.events[eventName].callbacks;
      callbacks.forEach(callback => callback && callback(...eventArgs));
    }
  }

  addEventListener(eventName, callback) {
    if(this.events[eventName]) this.events[eventName].registerCallback(callback);
  }

  removeEventListener(eventName, callback) {
    if(this.events[eventName]) this.events[eventName].removeCallback(callback);
  }

  removeAllEventListener(eventName) {
    if(this.events[eventName]) this.events[eventName].removeAllCallbacks();
  }
}
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
import Component from "./Component";
import Menu from "./Menu";
import NotificationMessage from "./NotificationMessage";
import Tooltip from "./Tooltip";
import Input from "./Input";
import Container from "./Container";

export default class Scene extends Container {
  constructor(...components) {
    super();
    this.addAll(...components);
  }

  draw(context) {
    super.draw(context);

    const canvas = context.canvas;
    const ctx = canvas.getContext("2d");
    ctx.save();

    canvas.style.cursor = "default";

    const componentsBackground = super.components.filter(component => component && component instanceof Component && !(component instanceof Menu) && !(component instanceof Tooltip) && !(component instanceof NotificationMessage));
    const menus = super.components.filter(component => component  && component instanceof Menu)
    const menuOpened = menus.filter(menu => !menu.disabled)[0];
    const tooltips = super.components.filter(component => component && component instanceof Tooltip);
    const inputs = super.components.filter(component => component && component instanceof Input);
    const notificationsBackground = super.components.filter(component => component && component instanceof NotificationMessage && ((component.style && !component.style.foreground) || !component.style));
    const notificationsForeground = super.components.filter(component => component && component instanceof NotificationMessage && component.style && component.style.foreground);

    // Set inputs canvas
    inputs && inputs.forEach(input => input.canvas = this.canvas);

    // Disable background components if a menu is opened
    this.disableBackgroundComponents(menuOpened, componentsBackground);

    // Draw background components, background notifications and tooltips
    this.drawBackgroundComponents(componentsBackground, ctx, notificationsBackground, tooltips);

    // Draw menu and foreground notifications
    this.drawForegroundComponents(menuOpened, ctx, notificationsForeground);

    ctx.restore();
  }

  disableBackgroundComponents(menuOpened, componentsBackground) {
    if(menuOpened) {
      componentsBackground && componentsBackground.forEach(component => component.disable());
    } else {
      componentsBackground && componentsBackground.forEach(component => component.enable());
    }
  }

  drawForegroundComponents(menuOpened, ctx, notificationsForeground) {
    menuOpened && menuOpened.draw(ctx);
    notificationsForeground && notificationsForeground.forEach(notification => this.isComponentVisible(notification) && notification.draw(ctx));
  }

  drawBackgroundComponents(componentsBackground, ctx, notificationsBackground, tooltips) {
    componentsBackground && componentsBackground.forEach(component => this.isComponentVisible(component) && component.draw(ctx));
    notificationsBackground && notificationsBackground.forEach(notification => this.isComponentVisible(notification) && notification.draw(ctx));
    tooltips && tooltips.forEach(tooltip => this.isComponentVisible(tooltip) && tooltip.draw(ctx));
  }

  get x() {
    return 0;
  }

  get y() {
    return 0;
  }
}
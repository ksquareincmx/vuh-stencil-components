import { Component, h, Prop } from '@stencil/core';
import clsx from 'clsx';

@Component({
  tag: 'k-icon',
  styleUrl: 'k-icon.scss',
  shadow: true
})
export class Icon {
  @Prop() size?: 'small' | 'medium' | 'large' | 'extra-large' = 'small';
  @Prop() name:
    | 'alert-circle'
    | 'assistant'
    | 'attachment'
    | 'bookmark-border'
    | 'bookmark'
    | 'cached'
    | 'check-circle'
    | 'close'
    | 'cloud-upload'
    | 'colorize'
    | 'delete'
    | 'done'
    | 'drag-indicator'
    | 'edit'
    | 'event'
    | 'file-copy'
    | 'finish-1'
    | 'finish-2'
    | 'finish-3'
    | 'flip-camera-ios'
    | 'school'
    | 'highlight-off'
    | 'info'
    | 'insert-drive-file'
    | 'keyboard-arrow-down'
    | 'keyboard-arrow-left'
    | 'keyboard-arrow-right'
    | 'keyboard-arrow-up'
    | 'menu'
    | 'network-wired'
    | 'notifications-active'
    | 'notifications'
    | 'person'
    | 'photo-camera'
    | 'playlist-add-check'
    | 'question-answer'
    | 'remove-red-eye'
    | 'ribbon'
    | 'search'
    | 'settings'
    | 'supervised-user-circle'
    | 'swap-vert'
    | 'swap-vert-down'
    | 'swap-vert-up'
    | 'tune'
    | 'view-week'
    | 'visibility-off'
    | 'add-circle'
    | 'bookmarks'
    | 'dashboard';

  render() {
    return (
      <i
        class={clsx(`vuh-${this.name}`, [this.size && `KIcon--${this.size}`])}
      />
    );
  }
}

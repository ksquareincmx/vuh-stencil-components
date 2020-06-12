import { Component, h, Prop } from '@stencil/core';

@Component({
  tag: 'k-icon',
  styleUrl: 'k-icon.scss',
  shadow: true
})
export class KIcon {
  @Prop() size?: 'small' | 'medium' | 'large' | 'extra-large' = 'small';
  @Prop() name:
    | 'alert_circle'
    | 'assistant'
    | 'attachment'
    | 'bookmark_border'
    | 'bookmark'
    | 'cached'
    | 'check_circle'
    | 'close'
    | 'cloud_upload'
    | 'colorize'
    | 'delete'
    | 'done'
    | 'drag_indicator'
    | 'edit'
    | 'event'
    | 'file_copy'
    | 'finish_1'
    | 'finish_2'
    | 'finish_3'
    | 'flip_camera_ios'
    | 'graduate_cap'
    | 'highlight_off'
    | 'info'
    | 'insert_drive_file'
    | 'keyboard_arrow_down'
    | 'keyboard_arrow_left'
    | 'keyboard_arrow_right'
    | 'keyboard_arrow_up'
    | 'menu'
    | 'network_wired'
    | 'notifications_active'
    | 'notifications'
    | 'person'
    | 'photo_camera'
    | 'playlist_add_check'
    | 'question_answer'
    | 'remove_red_eye'
    | 'ribbon'
    | 'search'
    | 'settings'
    | 'supervised_user_circle'
    | 'swap_vert'
    | 'tune'
    | 'view_week'
    | 'visibility_off';

  render() {
    return <i class={`vuh-${this.name} ${this.size}`} />;
  }
}

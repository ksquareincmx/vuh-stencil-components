import { Component, h } from '@stencil/core';

@Component({
  tag: 'k-drawer',
  styleUrl: 'k-drawer.scss',
  shadow: true
})
export class KDrawer {
  render() {
    return (
      <div class="KDrawer">
        <div class="KDrawer-sidenav"></div>
      </div>
    );
  }
}

import { Component, h } from "@stencil/core";

@Component({
  tag: 'my-modal',
  styleUrl: 'my-modal.scss'
})

export class MyModal {
  render() {
    return <h1>Hello from my modal</h1>
  }
}

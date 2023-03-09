import { Component, h, Prop, Element } from '@stencil/core';
// import { defineComponent, createApp } from 'vue';
import { defineComponent, createApp } from 'vue/dist/vue.esm-bundler';
import MyVue3Component from './MyVue3Component.vue';

@Component({
  tag: 'my-vue',
  shadow: false,
})
export class Vue3ComponentWrapper {

  @Element() el: HTMLElement;

  @Prop() title: string;
  @Prop() message: string;

  private vue3Instance: any;

  componentDidLoad() {
    this.vue3Instance = defineComponent({
      components: { MyVue3Component },
      template: `<MyVue3Component :title="title" :message="message" />`,
      // template: '<div><slot></slot></div>',
      props: {
        title: String,
        message: String,
      },
      setup(props) {
        console.log('props.message', props.message)
      }
    });

    const el = this.el.querySelector('.vue-component-container');

    createApp(this.vue3Instance, {
        title: this.title,
        message: this.message,
      },).mount(el)
  }

  render() {
    return <div class="vue-component-container"></div>;
  }
}

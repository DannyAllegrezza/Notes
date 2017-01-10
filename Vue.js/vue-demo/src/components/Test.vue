<template>
   <div class="test">
    <input type="text" v-model="msg"><br />
    <h1>Hello from {{myTitle}}</h1>
    <p v-if="active">My secret message</p>

    <ul>
        <li v-for="item in items">{{item.title}}</li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'test',
  data() {
    return {
      msg: 'Danny',
      active: true,
      items: [
          { title: 'Item one' },
          { title: 'Item two' },
          { title: 'Item three' },
      ],
    };
  },
  props: {
    myTitle: { type: String, default: 'Hellooooo from Test.vue' },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>

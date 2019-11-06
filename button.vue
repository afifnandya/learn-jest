<template>
  <div>
    <button @click="onClick">my button</button>
  </div>
</template>
<script>
export default {
  name: "my-button",
  methods: {
    onClick() {
      this.$emit("click");
    }
  }
};
</script>
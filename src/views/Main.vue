<template>
  <div>
    <Nav></Nav>
    <router-view />
  </div>
</template>
<script>
import Nav from "@/components/Nav.vue";
export default {
  name: "Main",
  components: {
    Nav
  }
};
</script>

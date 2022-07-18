<script lang="ts">
export default defineComponent({
  setup() {
    const { isLoggedin } = useAuth();
  
    return { isLoggedin };
  },
});
</script>

<template>
  <div class="w-50 mx-auto py-5 wrapper-main">
    <AuthCard v-if="!isLoggedin()" />
    <h2 v-else class="text-center">You already logged in.</h2>
  </div>
</template>

<style scoped>
@media (max-width: 768px) {
  .wrapper-main {
    width: 100% !important;
    padding: 7px;
  }
}
</style>

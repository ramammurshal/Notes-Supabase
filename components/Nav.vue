<script lang="ts">
export default defineComponent({
  setup() {
    const { signOut, isLoggedin } = useAuth();

    return { signOut, isLoggedin };
  },
});
</script>

<template>
  <nav class="px-3 py-2 bg-primary text-white">
    <div class="container d-flex justify-content-between align-items-center">
      <NuxtLink to="/" class="text-white text-decoration-none brand-link">Notes App</NuxtLink>
      <div class="d-flex align-items-center">
        <NuxtLink to="/my-notes" class="me-4 text-decoration-none hovered-link" v-if="isLoggedin()">Your Notes</NuxtLink>
        <p class="m-0 hovered-link" v-if="isLoggedin()" @click="signOut">Logout</p>
      </div>
    </div>
  </nav>
</template>

<style scoped>
.brand-link {
  font-size: 30px;
}

.hovered-link {
  cursor: pointer;
  color: rgb(210, 210, 210);
}

.hovered-link:hover {
  color: #fff;
}
</style>

<script lang="ts">
export default defineComponent({
  setup() {
    const authState = ref<'Login' | 'Register'>('Login');
    const userInput = reactive({
      email: '',
      password: '',
    });
    const authError = ref('');
    const router = useRouter();
    const showConfirmEmailMessage = ref(false);

    const { signUp, user, signIn } = useAuth();

    const toggleAuthState = () => {
      authError.value = '';
      showConfirmEmailMessage.value = false;

      userInput.email = userInput.password = '';

      if (authState.value === 'Login') authState.value = 'Register';
      else authState.value = 'Login';
    };

    const handleSubmit = async () => {
      authError.value = '';
      showConfirmEmailMessage.value = false;

      try {
        if (authState.value === 'Login') {
          await signIn({
            email: userInput.email,
            password: userInput.password,
          });
          router.push('/my-notes');
        } else {
          await signUp({
            email: userInput.email,
            password: userInput.password,
          });
          showConfirmEmailMessage.value = true;
        }
        userInput.email = userInput.password = '';
      } catch (error) {
        authError.value = error.message;
      }
    };

    return { authState, toggleAuthState, handleSubmit, user, userInput, authError, showConfirmEmailMessage };
  },
});
</script>

<template>
  <div class="card p-4">
    <h2 class="mb-3">{{ authState }}</h2>
    <p>{{ user ? 'User Logged In' : null }}</p>
    <form @submit.prevent="handleSubmit">
      <div class="alert alert-danger" role="alert" v-if="authError">{{ authError }}</div>
      <div class="alert alert-success" role="alert" v-if="showConfirmEmailMessage">Please confirm your email for account verification. If it doesn't exist, it means that the email is <b>already in use</b>.</div>
      <div class="mb-3">
        <label for="email" class="form-label">Email</label>
        <input type="email" class="form-control" id="email" v-model="userInput.email" />
      </div>
      <div class="mb-3">
        <label for="password" class="form-label">Password</label>
        <input type="password" class="form-control" id="password" v-model="userInput.password" />
      </div>
      <button type="submit" class="btn btn-primary mb-3">{{ authState }}</button>
      <p v-if="authState === 'Login'">
        Don't have an account?
        <span @click="toggleAuthState" class="text-primary text-decoration-underline toggle-auth">Register Here!</span>
      </p>
      <p v-else>
        Already have an account?
        <span @click="toggleAuthState" class="text-primary text-decoration-underline toggle-auth">Login Here!</span>
      </p>
    </form>
  </div>
</template>

<style scoped>
.toggle-auth {
  cursor: pointer;
}
</style>

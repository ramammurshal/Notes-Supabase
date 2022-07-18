export default defineNuxtRouteMiddleware(() => {
  const { isLoggedin } = useAuth();

  if (!isLoggedin()) {
    return navigateTo('/');
  }
});

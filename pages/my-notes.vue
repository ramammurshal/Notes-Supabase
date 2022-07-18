<script lang="ts">
export default defineComponent({
  setup() {
    definePageMeta({
      middleware: ['auth'],
    });

    const { supabase } = useSupabase();
    const { user } = useAuth();

    const notes = ref(null);

    onMounted(async () => {
      notes.value = await supabase.from('notes').select().eq('user_id', user.value.id);
    });

    return { notes };
  },
});
</script>

<template>
  <div>
    <NotesForm />
    <div v-if="notes">
      <div class="card" v-for="note in notes.data" :key="note.id">
        <div class="card-body">
          <h5 class="card-title">{{ note.title }}</h5>
          <p class="card-text">{{ note.note }}</p>
        </div>
      </div>
    </div>
  </div>
</template>

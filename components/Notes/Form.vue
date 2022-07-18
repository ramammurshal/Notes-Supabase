<script lang="ts">
export default defineComponent({
  setup() {
    const { supabase } = useSupabase();
    const { user } = useAuth();

    const notesInput = reactive({
      title: '',
      note: '',
    });

    const handleSubmit = async () => {
      if (!notesInput.title || !notesInput.note) {
        alert('Please input the title and note first...');
        return;
      }

      await supabase.from('notes').insert({
        title: notesInput.title,
        note: notesInput.note,
        user_id: user.value.id,
      });

      notesInput.title = '';
      notesInput.note = '';
    };

    return { notesInput, handleSubmit };
  },
});
</script>

<template>
  <div class="py-3">
    <h3>Write your notes to manage your activity</h3>
    <form @submit.prevent="handleSubmit">
      <div class="mb-3">
        <label for="title" class="form-label">Title</label>
        <input type="text" class="form-control" id="title" v-model="notesInput.title" />
      </div>
      <div class="mb-3">
        <label for="notes" class="form-label">Notes</label>
        <input type="text" class="form-control" id="notes" v-model="notesInput.note" />
      </div>
      <button class="btn btn-primary">Submit</button>
    </form>
  </div>
</template>

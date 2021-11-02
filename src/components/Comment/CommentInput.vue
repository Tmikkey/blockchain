<template>
  <div class="comment-input">
    <input v-model="comment" type="text" class="" placeholder="Type your comment..." />
    <button class="btn-submit">
      <icon class="news__item__top__image" data="@/assets/svg/submit.svg" alt="image" :original="true" />
    </button>
  </div>
</template>

<script>
export default {
  data: function () {
    return {
      comment: '',
    }
  },
}
</script>

<template>
  <div class="new-page__comments__item">
    <div class="new-page__comments__user">
      <img class="new-page__comments__image" src="@/assets/images/news-page__avatar.png" alt="image" :original="true" />
      <div>
        <p class="new-page__comments__name">{{ comment.author.name }}</p>
        <p class="new-page__comments__time">{{ comment.time }}</p>
      </div>
      <div class="new-page__comments__statistics">
        <button class="dislike">
          <icon class="dislike__icon" data="@/assets/svg/dislike.svg" alt="dislikes" :original="true" />
          {{ comment.downvote }}
        </button>
        <button>
          <icon class="like__icon" data="@/assets/svg/like.svg" alt="likes" :original="true" />
          {{ comment.upvote }}
        </button>
      </div>
    </div>
    <p class="new-page__comments__text">
      {{ comment.text }}
    </p>
    <Complain />
  </div>
</template>

<script>
import AvatarView from '@/components/AvatarView/AvatarView'
import Complain from '@/components/Comment/Complain'

export default {
  components: { AvatarView, Complain },
  props: {
    news: {
      type: Object,
      default: null,
    },
    user: {
      type: Object,
      default() {
        return {
          notifications: {
            amount: 3,
          },
          name: 'John Dunkans',
        }
      },
    },
    comment: {
      type: Object,
      default() {
        return {
          text: 'But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system, and expound the actual teachings of the.',
          author: {
            name: 'Random Dude',
          },
          time: '3 min ago',
          upvote: 34,
          downvote: 78,
        }
      },
    },
  },
}
</script>

<style lang="scss">
@import 'style';
</style>

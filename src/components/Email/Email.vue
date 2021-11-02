<template>
  <div class="email">
    <div class="activation">
      <h3 class="">
        {{ activation.message }}
      </h3>
      <a class="purple-button" :href="link">
        {{ activation.btn }}
      </a>
    </div>
    <p>
      Can’t see the button? Please follow the link or copy this link and paste to browser's address bar to active your
      account:
      <br />
      <a href="">{{ link }}</a>
    </p>
    <p>If you did not register on the website bcwallet.io, just ignore this email.</p>
    <p>
      If you have any questions, you can write to us on
      <br />
      <a href="">Telegram-chat</a> or <a href="">hello@bcdot.network</a>
    </p>

    <div class="footer">
      <div class="footer-logo">
        <router-link to="/main">
          <svg width="30" height="29" viewBox="0 0 30 29" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
              d="M23.67 25.7979C23.67 25.1719 23.8556 24.5599 24.2034 24.0394C24.5512 23.519 25.0455 23.1133 25.6238 22.8737C26.2022 22.6342 26.8385 22.5715 27.4525 22.6936C28.0664 22.8158 28.6304 23.1172 29.073 23.5598C29.5157 24.0025 29.8171 24.5664 29.9392 25.1804C30.0614 25.7943 29.9987 26.4307 29.7591 27.0091C29.5196 27.5874 29.1139 28.0817 28.5934 28.4295C28.0729 28.7772 27.461 28.9629 26.835 28.9629C26.4187 28.9653 26.0061 28.885 25.621 28.7268C25.2359 28.5685 24.8861 28.3355 24.5917 28.0411C24.2974 27.7468 24.0643 27.3969 23.9061 27.0118C23.7479 26.6268 23.6676 26.2142 23.67 25.7979Z"
              fill="#6DB78B"
            />
            <path
              d="M0.5 18.3884V0.5H4.26895V11.417V11.917H4.76895H4.84862H5.12225L5.26975 11.6866C6.44667 9.84767 8.64298 8.63019 11.4598 8.63019C13.7076 8.63019 16.0266 9.44022 17.7796 11.0743C19.5244 12.7008 20.7361 15.1692 20.7361 18.5471C20.7361 24.2711 16.5631 28.464 10.5808 28.464C7.56832 28.464 5.05558 27.4621 3.2978 25.7243C1.54089 23.9873 0.5 21.4774 0.5 18.3884ZM16.9243 18.5471C16.9243 16.6905 16.292 15.0681 15.1645 13.9073C14.0356 12.745 12.4402 12.0765 10.5756 12.0765C8.71083 12.0765 7.12492 12.7438 6.00601 13.9071C4.88897 15.0683 4.26895 16.6906 4.26895 18.5471C4.26895 20.4035 4.88878 22.0258 6.00575 23.1871C7.12459 24.3503 8.71052 25.0177 10.5756 25.0177C12.4402 25.0177 14.0357 24.3507 15.1647 23.189C16.2923 22.0286 16.9243 20.4061 16.9243 18.5471Z"
              fill="#F1F0FE"
              stroke="#F1F0FE"
            />
          </svg>
        </router-link>
      </div>
      <div class="teambc">
        <p>Team blockchain.ru</p>
      </div>
    </div>
  </div>
</template>

<script>
import AvatarView from '@/components/AvatarView/AvatarView'
export default {
  components: { AvatarView },
  props: {
    news: {
      type: Object,
      default: null,
    },
    activation: {
      type: Object,
      default() {
        return {
          notifications: {
            amount: 3,
          },
          message: 'To activate your account it is necessary to confirm the registration',
          btn: 'Click to activate account!',
        }
      },
    },
    link: {
      type: String,
      default: 'https://beta.bcdot.network/activate/618a6a0325df48bba79cfe675616a9d6',
    },
  },
  data() {
    return {
      isOpen: false,
      lang: false,
      selected: '',
      currentLanguage: 'EN',
      langs: [
        {
          id: 'en',
          title: 'English',
        },
      ],
    }
  },
}
</script>

<style lang="scss">
@import 'style';
</style>

<template>
  <div class="new-page__comments__tag">
    <a href="javascript:" @click.prevent="makeComplain = !makeComplain">Complain</a>
    <div v-if="makeComplain" class="complainModal">
      <div class="modalWrapper">
        <div class="header">
          Complaint
          <svg
            width="14"
            height="15"
            viewBox="0 0 14 15"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            class="close"
            @click.prevent="makeComplain = !makeComplain"
          >
            <path d="M1 1.5L7 7.5L13 1.5" stroke="#F1F0FF" stroke-width="2" stroke-linecap="round" />
            <path d="M1 13.5L7 7.5L13 13.5" stroke="#F1F0FF" stroke-width="2" stroke-linecap="round" />
          </svg>
        </div>
        <div class="body">
          <form v-if="!complaintSent" class="" @submit.prevent="onSubmit">
            <p class="title">Reason for complaint</p>
            <div v-for="(com, index) in complain" :key="com.title" class="form-group">
              <input :id="com.title" v-model="picked" type="radio" :value="com.title" />
              <label :for="com.title">{{ com.title }}</label>
              <icon
                class="information"
                data="@/assets/svg/complaint.svg"
                :original="true"
                @mouseover.native="active = index"
                @mouseout.native="active = null"
              />
              <div v-if="active === index" class="box problem">
                <p>{{ com.description }}</p>
              </div>
            </div>
            <br />
            <button class="complaint__submit" type="submit" :disabled="!picked" @click="onSubmit">
              Send a complaint
            </button>
          </form>
          <div v-if="complaintSent" class="success">
            <div class="title">
              <svg width="49" height="48" viewBox="0 0 49 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M47.9424 24C47.9424 36.7026 37.6449 47 24.9424 47C12.2398 47 1.94235 36.7026 1.94235 24C1.94235 11.2975 12.2398 1 24.9424 1C37.6449 1 47.9424 11.2975 47.9424 24Z"
                  stroke="#4EBE96"
                  stroke-width="2"
                />
                <path
                  d="M15.5 24.7213C15.4989 24.8849 15.528 25.0471 15.5858 25.198C15.6435 25.3489 15.7287 25.4854 15.836 25.5993L22.0191 32.5389C22.1366 32.6805 22.2792 32.7944 22.4383 32.8737C22.5973 32.953 22.7694 32.9959 22.9442 33C23.1196 33.001 23.2932 32.9603 23.4529 32.8807C23.6126 32.8011 23.7547 32.6844 23.8692 32.5389L35.164 20.1448C35.2706 20.0304 35.3552 19.8937 35.4129 19.7429C35.4706 19.5921 35.5002 19.4303 35.4999 19.2668C35.5011 19.1008 35.4723 18.9362 35.415 18.7825C35.3578 18.6287 35.2733 18.489 35.1665 18.3712C35.0597 18.2534 34.9326 18.16 34.7926 18.0963C34.6526 18.0325 34.5025 17.9998 34.3509 18C34.1932 18.002 34.0375 18.0383 33.8928 18.1067C33.748 18.1751 33.6171 18.2743 33.5076 18.3985L22.9442 30.0054L17.4913 23.853C17.3818 23.7288 17.2508 23.6296 17.1061 23.5612C16.9613 23.4928 16.8056 23.4565 16.648 23.4545C16.4965 23.4545 16.3464 23.4873 16.2066 23.5511C16.0667 23.6149 15.9398 23.7083 15.8331 23.8261C15.7264 23.9439 15.642 24.0836 15.5848 24.2372C15.5277 24.3909 15.4989 24.5554 15.5 24.7213Z"
                  fill="#4EBE96"
                />
              </svg>
              <span class="title-text">Your complaint has been sent</span>
            </div>
            <p>We will examine the message and example of a measure. Thank you for helping to improve the community.</p>
            <button @click.prevent="makeComplain = !makeComplain" class="close-btn">Close</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data: function () {
    return {
      makeComplain: false,
      picked: '',
      active: 1,
      complaintSent: false,
      complain: [
        {
          title: 'Spam',
          description: 'Distribution of advertising information in inappropriate places.',
        },
        {
          title: 'Insult',
          description: 'Distribution of advertising information in inappropriate places.',
        },
        {
          title: 'Drug propaganda',
          description: 'Distribution of advertising information in inappropriate places.',
        },
        {
          title: 'Call for bullying',
          description: 'Distribution of advertising information in inappropriate places.',
        },
        {
          title: 'Call for suicide',
          description: 'Distribution of advertising information in inappropriate places.',
        },
        {
          title: 'Misleading',
          description: 'Distribution of advertising information in inappropriate places.',
        },
        {
          title: 'Fraud',
          description: 'Distribution of advertising information in inappropriate places.',
        },
        {
          title: 'Extremism',
          description: 'Distribution of advertising information in inappropriate places.',
        },
        {
          title: 'Hostile speech',
          description: 'Distribution of advertising information in inappropriate places.',
        },
      ],
    }
  },
  methods: {
    onSubmit() {
      console.log('submit')
      this.complaintSent = true
      //   this.$store.dispatch(SIGNIN_REQUEST, {
      //     complain: this.picked,
      //   })
    },
    mouseOver: function () {
      this.active = !this.active
    },
  },
}
</script>

<template>
  <div class="change_picture">
    <!-- <img src="previewImage" /> -->
    <img src="@/assets/images/Avatar.png" />

    <input id="file-input" type="file" accept="image/*" @change="uploadImage" />
    <label for="file-input">
      <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path
          d="M10 14.2C11.7674 14.2 13.2 12.7674 13.2 11C13.2 9.23274 11.7674 7.80005 10 7.80005C8.23274 7.80005 6.80005 9.23274 6.80005 11C6.80005 12.7674 8.23274 14.2 10 14.2Z"
          fill="#F1F0FE"
        />
        <path
          d="M7 1L5.17 3H2C0.9 3 0 3.9 0 5V17C0 18.1 0.9 19 2 19H18C19.1 19 20 18.1 20 17V5C20 3.9 19.1 3 18 3H14.83L13 1H7ZM10 16C7.24 16 5 13.76 5 11C5 8.24 7.24 6 10 6C12.76 6 15 8.24 15 11C15 13.76 12.76 16 10 16Z"
          fill="#F1F0FE"
        />
      </svg>
    </label>
  </div>
</template>

<script>
export default {
  name: 'ChangePicture',
  data() {
    return {
      previewImage: null,
    }
  },
  methods: {
    uploadImage(e) {
      const image = e.target.files[0]
      const reader = new FileReader()
      reader.readAsDataURL(image)
      reader.onload = (e) => {
        this.previewImage = e.target.result
        console.log(this.previewImage)
      }
    },
  },
} // missing closure added
</script>

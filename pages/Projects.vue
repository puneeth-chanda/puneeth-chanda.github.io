<template>
  <div class="about page  animate__animated animate__fadeIn">
    <h2>Recent Project</h2>
    <div class="container">
      <div class="row" v-for="(project, index) in projects" :key="index">
        <div class="col-md-5">
          <img
            :src="project.image_cover"
            :alt="project.title"
            class="project-cover"
          />
        </div>
        <div class="col-md-5">
          <h2 class="mt-3" style="text-align: left;">
            {{ project.title }}
            <hr class="dope" />
          </h2>
          <b-card class="mt-3 mb-3 text-left text-dark">
            <p>{{ project.description }}</p>
            <b-card :href="project.link"
              >{{ project.tech }}</b-card>
          </b-card>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import LinkIcon from "vue-ionicons/dist/md-link.vue";
import GithubIcon from "vue-ionicons/dist/logo-github.vue";

export default {
  components: {
    GithubIcon,
    LinkIcon
  },
  data() {
    return {
      projects: [
        {
          title: "rmvAds",
          tag: "Script",
          description:
            "A simple way to avoid listening to Spotify ads for non-premium users using Spotify API.",
          image_cover: require("@/assets/speak.jpg"),
          github_url: "https://github.com/AsaoluElijah/say-it/",
          tech: "Python, Spotify API"
        },
        {
          title: "OCR",
          tag: "Freelance",
          description:
            "Scans the video or image in real-time in front of a camera and checks if what is needed is present it sends a message",
          image_cover: require("@/assets/illustration.jpg"),
          github_url: "",
          tech: "Python, google-cloud-vision"
        },
        {
          title: "Schedule Bot",
          tag: "bot",
          description:
            "This bot sends the respective schedule for the day fetched from the database and send it to the user using Telegram API.",
          image_cover: require("@/assets/qr-1.png"),
          github_url: "https://github.com/AsaoluElijah/qrcode",
          tech: "Python, GraphQl, Telegram API"
        }
      ],
    };
  },
  methods: {
    isEven(n) {
      if (n % 2 == 0) {
        return true;
      } else {
        return false;
      }
    }
  },
  head: {
    title: "Recent Projects 💻 - Puneeth Chanda",
    meta: [
      {
        hid: "description",
        name: "description",
        content:
          "View all the recents open-sourced projects built with ♥ by Puneeth Chanda, open-sourced means this project source code are publicly available for everyone to use or modify."
      },
      {
        hid: "og:title",
        name: "og:title",
        content: "Recent Projects 💻 - Puneeth Chanda"
      },
      {
        property: "og:description",
        content:
          "View all the recents open-sourced projects built with ♥ by Puneeth Chanda, open-sourced means this project source code are publicly available for everyone to use or modify."
      },
      {
        hid: "og:image",
        name: "og:image",
        content: require("@/assets/man-computer.png")
      }
    ]
  }
};
</script>
<style scoped>
.row {
  margin-top: 70px;
}
.project-cover {
  width: inherit;
  border-radius: 3px;
}
hr.dope {
  border: 0;
  width: 90px;
  border-top: 2px solid #dc3545;
  text-align: left;
  margin: initial;
  margin-top: 7px;
  margin-left: 5px;
}
</style>

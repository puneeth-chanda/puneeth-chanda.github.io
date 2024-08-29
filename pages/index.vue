<template>
  <b-row style="margin-left: 0;margin-right: 0;">
    <b-col md="4">
      <b-img
        :src="avatar"
        id="avatar-img"
        alt="Puneeth Chanda Memoji"
        @mouseenter="changeAvatar"
        @mouseleave="changeAvatar"
      />
    </b-col>

    <b-col md="8">
      <h2 class="intro animate__animated animate__fadeInUp animate__fast">
        Hi 👋,
        <br />I<span>'m Puneeth&nbsp;Chanda</span>.
      </h2>

      <div class="col-md-10 info">
        A <b>Software developer</b> passionate
        about solving real-life problems with tech.<br />
        Currently i'm exploring the cloud ecosystem.
        <br />
        <b-button
          class="action-btn animate__animated animate__wobble animate__delay-4s animate__fast"
          to="/projects"
        >
          Explore >
        </b-button>

        <b-button class="action-btn" to="/contact" variant="primary">
          Get In Touch
        </b-button>

        <!-- .SOCIAL LINKS SECTION -->
        <div
          class="social-icons animate__animated animate__fadeInUp animate__delay-1s"
        >
          <social-link :to="socialLinks.github">
            <GithubIcon />
          </social-link>

          <social-link :to="socialLinks.linkedin">
            <LinkedinIcon />
          </social-link>

          <social-link :to="socialLinks.twitter">
            <TwitterIcon />
          </social-link>

          <social-link :to="socialLinks.facebook">
            <FacebookIcon />
          </social-link>

          <social-link :to="socialLinks.mail">
            <MailIcon />
          </social-link>

          <social-link :to="socialLinks.youtube">
            <YoutubeIcon />
          </social-link>
        </div>
      </div>
    </b-col>
  </b-row>
</template>

<script>
import GithubIcon from "vue-ionicons/dist/logo-github.vue";
import LinkedinIcon from "vue-ionicons/dist/logo-linkedin.vue";
import TwitterIcon from "vue-ionicons/dist/logo-twitter.vue";
import FacebookIcon from "vue-ionicons/dist/logo-facebook.vue";
import YoutubeIcon from "vue-ionicons/dist/logo-youtube.vue";
import MailIcon from "vue-ionicons/dist/md-mail.vue";

export default {
  components: {
    GithubIcon,
    LinkedinIcon,
    TwitterIcon,
    FacebookIcon,
    YoutubeIcon,
    MailIcon
  },

  data() {
    return {
      avatar: require("@/assets/avatar-1.webp"),
      // ADD YOUR SOCIAL LINKS HERE 👇
      socialLinks: {
        github: "http://github.com/puneeth2001",
        linkedin: "https://www.linkedin.com/in/puneeth-chanda-2001/",
        twitter: "https://twitter.com/ChandaPuneeth",
        mail: "mailto:chandapuneeth@gmail.com",
        youtube: ""
      }
    };
  },

  head: {
    title: "Portfolio ⚡ - Puneeth Chanda",
    meta: [
      {
        hid: "description",
        name: "description",
        content:
          "Puneeth Chanda is an awesome front-end developer and technical writer, passionate about building solutions that works across multiple platforms with high accessibility approach. Elijah has vast knowledge in web development with over 3+ years experience in building actual products"
      },
      {
        hid: "og:title",
        name: "og:title",
        content: "Portfolio ⚡ - Puneeth Chanda"
      },
      {
        property: "og:description",
        content:
          "Puneeth Chanda is an awesome front-end developer and technical writer, passionate about building solutions that works across multiple platforms with high accessibility approach. Elijah has vast knowledge in web development with over 3+ years experience in building actual products"
      },
      {
        hid: "og:image",
        name: "og:image",
        content: require("@/assets/coding.png")
      }
    ]
  },
  methods: {
    changeAvatar() {
      if (this.avatar == require("@/assets/avatar-2.webp")) {
        this.avatar = require("@/assets/avatar-1.webp");
      } else {
        this.avatar = require("@/assets/avatar-2.webp");
      }
    }
  },
  mounted() {
    this.$nextTick(() => {
      this.$nuxt.$loading.start();

      setTimeout(() => this.$nuxt.$loading.finish(), 500);
    });
  }
};
</script>

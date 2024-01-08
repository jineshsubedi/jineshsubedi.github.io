import DefaultTheme from 'vitepress/theme-without-fonts'
import './css/custom.css'
import Tag from "./components/Tag.vue";
import Forex from "./components/Forex.vue";
import BadgeBlog from "./components/Badge.vue";
import VideoCard from "./components/VideoCard.vue";
import ArticleCard from "./components/ArticleCard.vue";
import LandingBlog from "./components/LandingBlog.vue";
import SectionTitle from "./components/SectionTitle.vue";
import BlogContainer from "./components/BlogContainer.vue";
import VideoContainer from "./components/VideoContainer.vue";
import ForexConversion from "./components/ForexConversion.vue";

export default {
      extends: DefaultTheme,
      enhanceApp(ctx) {
            ctx.app.component('Tag', Tag);
            ctx.app.component('Forex', Forex);
            ctx.app.component('BadgeBlog', BadgeBlog);
            ctx.app.component('VideoCard', VideoCard);
            ctx.app.component('ArticleCard', ArticleCard);
            ctx.app.component('LandingBlog', LandingBlog);
            ctx.app.component('SectionTitle', SectionTitle);
            ctx.app.component('BlogContainer', BlogContainer);
            ctx.app.component('VideoContainer', VideoContainer);
            ctx.app.component('ForexConversion', ForexConversion);
      }
}
import VueI18n from "vue-i18n";
import Vue from "vue";
import store from "@/store/index";
Vue.use(VueI18n);

const i18nMsg = {
  CN: require("@/assets/lang/cn"),
  EN: require("@/assets/lang/en"),
  JPN:require("@/assets/lang/JPN")
};
const i18n = new VueI18n({
  locale: store.state.i18n,
  messages: i18nMsg
});
export default i18n;

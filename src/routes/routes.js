import NewsLetterDetail from '../components/NewsLetterDetail.vue';
import NewsOverview from '../components/NewsOverview.vue';

const routes = [
  { path: '/', component: NewsOverview },
  { path: '/:id/details', component: NewsLetterDetail }
];

export default routes;

import { createRouter, createWebHistory } from "vue-router";
import CarrierRoutes from '@/carrier/router';

const Carriers = () => import(/* webpackChunkName: "Carriers" */ '@/carrier/components/carrier-list-container/carrier-list.container.vue');


const routes: any = [
  { path: '/', name: 'default', redirect: 'carriers' },
  {
    path: '/carriers', name: 'Carriers', component: Carriers, children: CarrierRoutes
  }
];

const router = createRouter({
  history: createWebHistory(),
  routes
});

export default router;

const CarrierForm = () => import(/* webpackChunkName: "CarrierForm" */ '@/carriers/components/carrier-form-container/carrier-form.container.vue');
const CarrierRoutes: any = [
    { path: 'add', component: CarrierForm }
]
export default CarrierRoutes
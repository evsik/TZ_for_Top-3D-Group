import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        dropMenuItems: [
            {title: '3D-принтеры'},
            {title: '3D-сканеры'},
            {title: 'Станки'},
            {title: 'Роботы'},
            {title: 'Образование'},
            {title: 'Стоматологам'},
            {title: 'Гаджеты'},
            {title: 'Материалы'},
            {title: 'ПО'},
            {title: 'Решения'},
            {title: 'Учебный центр'},
            {title: 'Услуги'},
        ],
        mainNavItems: [
            {title: 'Акции'},
            {title: 'О нас'},
            {title: 'Мероприятия'},
            {title: 'Оплата и доставка'},
            {title: 'Что с моим заказом?'},
            {title: 'Гос. закупки'},
            {title: 'Блог'},
            {title: 'Мастер-классы'},
            {title: 'Контакты'},
        ]
    },
    mutations: {},
    actions: {},
    modules: {}
})

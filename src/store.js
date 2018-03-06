import Vuex from 'vuex'
import Vue from 'vue'
import items from './mocks/task'
import { remove, reject } from 'lodash'
const uuidv4 = require('uuid/v4');
Vue.use(Vuex)
var store = new Vuex.Store({
    state: {
        isShowForm: false,
        orderBy: 'name',
        orderDir: 'desc',
        task: items,
        itemSelected: {
            id: '',
            name: '',
            level: 0
        },
        search: ''
    },
    mutations: {
        CHANGE_SEARCH(state, search) {
            state.search = search;
        },
        CHANGE_SORT(state, order) {
            state.orderBy = order.orderBy;
            state.orderDir = order.orderDir;
        },
        CLOSE_FORM(state) {
            state.isShowForm = false;
        },
        OPEN_FORM(state) {
            state.isShowForm = true;
        },
        TOGGLE_FORM(state) {
            state.isShowForm = !state.isShowForm;
        },
        DELETE_ITEM(state, id) {
            for (var i = state.task.length - 1; i >= 0; i--) {
                if (state.task[i].id === id) {
                    state.task.splice(i, 1);
                }
            }
        },
        SUBMIT_FORM(state, item) {
            let id = null;
            if (item.id !== '') {
                state.task = reject(state.task, { id: item.id });
                id = item.id;
            }
            else {
                id = uuidv4();
            }
            state.task.push({
                id: id,
                name: item.name,
                level: +item.level
            });
        },
        SELECTED_ITEM(state, item) {
            state.itemSelected = item;
        },
        UNSELECT_ITEM(state) {
            state.itemSelected = { id: '', name: '', level: 0 };
        }
    },
    actions: {
        CLOSE_FORM: function ({ commit }) { commit('CLOSE_FORM') },
        TOGGLE_FORM: function ({ commit }) { commit('TOGGLE_FORM') },
        OPEN_FORM: function ({ commit }) { commit('OPEN_FORM') },
        CHANGE_SEARCH: function ({ commit }, search) { commit('CHANGE_SEARCH', search) },
        CHANGE_SORT: function ({ commit }, order) { commit('CHANGE_SORT', order) },
        DELETE_ITEM: function ({ commit }, id) { commit('DELETE_ITEM', id) },
        SUBMIT_FORM: function ({ commit }, id) { commit('SUBMIT_FORM', id) },
        SELECTED_ITEM: function ({ commit }, item) { commit('SELECTED_ITEM', item) },
        UNSELECT_ITEM: function ({ commit }) { commit('UNSELECT_ITEM') }
    }
});

export default store;
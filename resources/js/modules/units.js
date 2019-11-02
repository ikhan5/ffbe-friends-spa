import UnitAPI from "../api/axios.js";

export const units = {
    state: {
        units: [],
        unitsLoadStatus: 0,
        profile: {},
        profileLoadStatus: 0
    },
    actions: {
        loadUnits({ commit }) {
            commit("setUnitsLoadStatus", 1); //load started = 1

            UnitAPI.getUnits()
                .then(res => {
                    commit("setCafes", res.data);
                    commit("setUnitsLoadStatus", 2); // load finished successfully = 2
                })
                .catch(err => {
                    commit("setUnits", []);
                    commit("setUnitsLoadStatus", 3); // load finished with errors
                });
        },
        loadProfile({ commit }, data) {
            commit("setProfileLoadStatus", 1);

            UnitAPI.getUserProfile(data.id)
                .then(res => {
                    commit("setProfile", res.data);
                    commit("setProfileLoadStatus", 2);
                })
                .catch(err => {
                    commit("setProfile", {});
                    commit("setProfileLoadStatus", 3);
                });
        }
    },
    mutations: {
        setUnitsLoadStatus(state, status) {
            state.unitsLoadStatus = status;
        },
        setUnits(state, units) {
            state.units = units;
        },
        setProfileLoadStatus(state, status) {
            state.profileLoadStatus = status;
        },
        setProfile(state, profile) {
            state.profile = profile;
        }
    },
    getters:{
        getUnitsLoadStatus(state){
            return state.unitsLoadStatus;
        },
        getUnits(state){
            return state.units;
        },
        getProfileLoadStatus(state){
            return state.profileLoadStatus;
        },
        getProfile(state){
            return state.profile;
        }
    }
};

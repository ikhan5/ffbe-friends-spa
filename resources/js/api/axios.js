import axios from "axios";
export default {
    getUnits() {
        return axios.get("/api/units");
    },

    addUnit(rarity, name, atk, def, mag, spr, build) {
        return axios.post("/api/units", {
            rarity: rarity,
            name: name.name,
            atk: atk,
            def: def,
            mag: mag,
            spr: spr,
            build: build
        });
    },

    editUnit(rarity, name, atk, def, mag, spr, build, unitID) {
        return axios.put("/api/units" + unitID, {
            rarity: rarity,
            name: name.name,
            atk: atk,
            def: def,
            mag: mag,
            spr: spr,
            build: build
        });
    },

    deleteUnit(unitID) {
        return axios.delete("./api/units/" + unitID);
    },

    getUserUnits(userID) {
        return axios.get("./api/units/" + userID);
    },

    getUserProfile(userID) {
        return axios.get("./api/profiles" + userID);
    },
    updateUserProfile(userID, friendCode, ign) {
        return axios.put("./api/profiles" + userID, {
            friendCode,
            ign
        });
    }
};

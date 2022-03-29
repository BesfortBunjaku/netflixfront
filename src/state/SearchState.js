import { makeAutoObservable } from "mobx"


class SearchState {
    value = ''

    constructor() {
        makeAutoObservable(this)
    }

    setSearch(value) {
        this.value = value
    }
}

const search = new SearchState()

export default search
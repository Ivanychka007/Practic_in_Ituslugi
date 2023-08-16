import { createStore } from 'vuex';


interface Account {
  name: string;
  address: string;
  accountNumber: number | null;
}
interface Meter {
  type: string;
  number: string;
  lastReading: number;
  lastReadingDate: string;
  currentReading: string;
  consumption: number | null;
}

interface RootState {
  account: Account | null;
  meters: Meter[];
}

const store = createStore<RootState>({
  state: {
    account: null,
    meters: [],
  },
  getters: {
    getAccount(state) {
      return state.account;
    },
    getState(state) {
      return state;
    },
    getMeters(state) {
      return state.meters;
    },
  },
  mutations: {
    setAccount(state, account) {
      state.account = account.account;
      state.meters = account.meters;
    },
    upMeter(state, { meter, currentReading }) {
      for (let i = 0; i < state.meters.length; i++) {
        if (state.meters[i] === meter) meter.currentReading = currentReading;
      }
    },
  },

  actions: {
    async findAccount({ commit }, accountNumber) {
      try {
        const response = await fetch("http://localhost:8080/file.json");
        if (response.ok) {
          const data = await response.json();
          const length = data.accounts.length;
          const account = data.accounts.find(
            (item: RootState) => item.account?.accountNumber == accountNumber
          );
          if (account) {
            commit("setAccount", account);

            return account;
          } else {
            throw new Error("Аккаунт не найден");
          }
        } else {
          throw new Error("Ошибка загрузки данных");
        }
      } catch (error) {
        throw new Error("Ошибка загрузки данных");
      }
    },
  },
});

export default store
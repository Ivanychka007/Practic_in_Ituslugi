<!-- Сделать отдельный компонен таблицы  , переделать input  , 
минус подсвечивался красным, информация о том что расход не может быть отрицательным. Окно о том что иформация
успешна передана и переход на главную-->
<template>
  <div>
    <h2>Форма передачи показаний</h2>
    <div v-if="account">
      <p>Имя: {{ account.name }}</p>
      <p>Адрес: {{ account.address }}</p>
      <p>Номер ЛС: {{ account.accountNumber }}</p>
    </div>

    <div>
      <TableComponent
        v-if="meters"
        :columns="tableColumns"
        :rows="meters"
        :tableStyles="tableStyles"
        :thtdStyles="thtdStyles"
      />
    </div>
    <button @click="saveReadings">Сохранить</button>
    <div v-if="showMessageYes" class="over" @click="closeOverYes">
      <div class="window">
        <p>Информация успешно передана.</p>
        <button @click="navigateToHome">На главную</button>
      </div>
    </div>
    <div v-if="showMessageNo" class="over" @click="closeOverNo">
      <div class="window">
        <p>Значение поля расхода не может быть отрицательным.</p>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import useStore from "../store/store";
import TableComponent from "./Table/TableComponent.vue";

export default defineComponent({
  components: {
    TableComponent,
  },

  data() {
    return {
      showMessageYes: false,
      showMessageNo: false,
      tableColumns: [
        { field: "type", label: "Тип ПУ" },
        { field: "number", label: "Номер ПУ" },
        { field: "lastReading", label: "Последние показания" },
        { field: "lastReadingDate", label: "Дата последних показаний",  cellState: (meter: any) => {
            return `<a href="${meter.lastReadingDate}">${meter.lastReadingDate}</a>`;
          }, },
        {
          field: "currentReading",
          label: "Текущие показания",
          editor: {
            type: "input",
            params: {
              pattern: "^\\d{5}\\.\\d{2}$",
              maxlength: 25,
              onInput: (event: Event, meter: any) => {
                meter.currentReading = parseFloat(
                  (event.target as HTMLInputElement).value
                );
                const store = useStore;
                store.commit("upMeter", {
                  meter,
                  currentReading: meter.currentReading,
                });
              },
            },
          },
        },
        {
          field: "",
          label: "Расход",
          formatter: (rowData: any) => {
            if (rowData.currentReading != "") {
              rowData.consumption =
                rowData.currentReading - rowData.lastReading;
              return rowData.consumption;
            }
            return null;
          },
          styleState: (meter: any) => {
            return meter.consumption < 0 ? "red" : "black";
          },
        },
      ],

      tableStyles: {
        width: "100%",
        borderCollapse: "collapse",
      },
      thtdStyles: {
        border: "1px solid black",
        padding: "8px",
      },
    };
  },
  computed: {
    state() {
      const store = useStore;
      return store.getters.getState;
    },
    account() {
      const store = useStore;

      return store.getters.getAccount;
    },
    meters() {
      const store = useStore;
      return store.getters.getMeters;
    },
  },
  methods: {
    closeOverYes() {
      this.showMessageYes = false;
    },
    closeOverNo() {
      this.showMessageNo = false;
    },

    saveReadings() {
      let isTrue = true;
      for (let i = 0; i < this.meters.length; i++) {
        const value = this.meters[i].consumption;
        if (value < 0) {
          isTrue = false;
          break;
        }
      }
      if (isTrue) {
        const account = JSON.stringify(this.account);
        const meters = JSON.stringify(this.meters);
        window.localStorage.setItem("account", account);
        console.log(account);
        console.log(meters);
        this.showMessageYes = true;
        this.showMessageNo = false;
      } else {
        this.showMessageNo = true;
        this.showMessageYes = false;
      }
    },
    navigateToHome() {
      this.$router.push("/");
    },
  },
});
</script>

<style>
.over {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
}
.red {
  color: red;
}
.window {
  background-color: white;
  padding: 20px;
  border-radius: 8px;
  text-align: center;
}
</style>

<script>
import {defineComponent} from 'vue'
import FullCalendar from '@fullcalendar/vue3'
import dayGridPlugin from '@fullcalendar/daygrid'
import timeGridPlugin from '@fullcalendar/timegrid'
import interactionPlugin from '@fullcalendar/interaction'
import {INITIAL_EVENTS,} from '/src/event-utils'
import SelectLanguage from "@/components/SelectLanguage.vue";

export default defineComponent({
  components: {
    SelectLanguage,
    FullCalendar,
  },

  data() {
    return {
      calendarOptions: {
        plugins: [
          dayGridPlugin,
          timeGridPlugin,
          interactionPlugin,
        ],
        headerToolbar: {
          left: 'prev,next,today',
          center: 'title',
          right: 'dayGridMonth,timeGridWeek,timeGridDay'
        },
        initialView: 'dayGridMonth',
        events: INITIAL_EVENTS,
        editable: true,
        selectable: true,
        unselectAuto: false,
        selectMirror: true,
        dayMaxEvents: true,
        weekends: true,
        select: this.handleDateSelect,
      },
    }
  },
  methods: {
    handleDateSelect(model) {
      let dateStartObj = model.start;
      let startMonth = ("0" + (dateStartObj.getMonth() + 1)).slice(-2);
      let startDate = ("0" + (dateStartObj.getDate())).slice(-2);
      let dateStartFormat = dateStartObj.getFullYear() + "-" + startMonth + "-" + startDate;

      this.calendarOptions.events.push({
        title: 'Шоу',
        start: dateStartFormat,
        rendering: 'background',
        iconUrl: 'uzb.png',
        isNew: true,
      });
    },
  }
})
</script>

<template>
  <div class='demo-app'>
    <div class='demo-app-main'>
      <select-language class="select-lang"></select-language>
      <FullCalendar
          class='demo-app-calendar'
          :options='calendarOptions'
      >
        <template v-slot:eventContent='arg'>
          <img class="icon" v-bind:src="'/assets/' + arg.event.extendedProps.iconUrl" alt="ipc">
          <i>{{ arg.event.title }}<br></i>
          <i>{{ arg.event.extendedProps.progress }}<br></i>
        </template>
      </FullCalendar>
    </div>
  </div>
</template>

<style lang='css'>

.icon {
  width: 2em;
  height: 2em;
  margin-right: 1em;
}

h2 {
  margin: 0;
  font-size: 16px;
}

ul {
  margin: 0;
  padding: 0 0 0 1.5em;
}

li {
  margin: 1.5em 0;
  padding: 0;
}

b { /* used for event dates/times */
  margin-right: 3px;
}

.select-lang {
  padding-top: 2em;
}

.demo-app {
  display: flex;
  min-height: 100%;
  font-family: Arial, Helvetica Neue, Helvetica, sans-serif;
  font-size: 14px;
}

.demo-app-main {
  flex-grow: 1;
  padding: 1em;
}

</style>
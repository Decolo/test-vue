
const Tab = {
  name: 'tab-vue',
  props: {
    tabNames: Array,
  },
  data: function() {
    return ({
      selectTabName: this.tabNames[0]
    })
  },
  methods: {
    select: function(tabName) {
      this.selectTabName = tabName
    }
  },
  computed: {
    currentComponent: function() {
      return this.selectTabName
    }
  },
  components: {
    ...tabComponents
  },
  template: `
    <div class="tab-container">
      <ul class="tab-pane">
        <li 
          v-for="tabName in tabNames" 
          @click="select(tabName)" 
          :class="{ active: tabName === selectTabName }"
        >
          {{ tabName }}
        </li> 
      </ul>
      <component :is="currentComponent"></component>
    </div>
  `
}



new Vue({
  el: '#foo',
  template: `
    <div class="content">
      <tab
        :tabNames="['home', 'about']"
      ></tab>
    </div>
  `,
  components: {
    'tab': Tab
  }
})
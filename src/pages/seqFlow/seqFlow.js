import $ from 'jQuery';
import '@/assets/js/sFlow.js';
export default {
  data() {
    return {
      tableData: []
    }
  },
  created () {
  },
  mounted () {
    $('#apply_detail_flow').flowList({
      gap: 50,
      vGap: 30,
      ext_height: 0,
      url: '',
      data: [{
        addClass: 'item',
        title: new Date(),
        text: 'aaaa',
        arrowClass: 'itemArrow'
      }, {
        addClass: 'item',
        title: new Date(),
        text: 'aaaa',
        arrowClass: 'itemArrow'
      }, {
        addClass: 'item',
        title: new Date(),
        text: 'aaaa',
        arrowClass: 'itemArrow'
      }, {
        addClass: 'item',
        title: new Date(),
        text: 'aaaa',
        arrowClass: 'itemArrow'
      }, {
        addClass: 'item',
        title: new Date(),
        text: 'aaaa',
        arrowClass: 'itemArrow'
      }, {
        addClass: 'item',
        title: new Date(),
        text: 'aaaa',
        arrowClass: 'itemArrow'
      }, {
        addClass: 'item',
        title: new Date(),
        text: 'aaaa',
        arrowClass: 'itemArrow'
      }, {
        addClass: 'item',
        title: new Date(),
        text: 'aaaa',
        arrowClass: 'itemArrow'
      }, {
        addClass: 'item',
        title: new Date(),
        text: 'aaaa',
        arrowClass: 'itemArrow'
      }, {
        addClass: 'item',
        title: new Date(),
        text: 'aaaa',
        arrowClass: 'itemArrow'
      }, {
        addClass: 'item',
        title: new Date(),
        text: 'aaaa',
        arrowClass: 'itemArrow'
      }, {
        addClass: 'item',
        title: new Date(),
        text: 'aaaa',
        arrowClass: 'itemArrow'
      }, {
        addClass: 'item',
        title: new Date(),
        text: 'aaaa',
        arrowClass: 'itemArrow'
      }]
    })
  },
  methods: {
  }
}

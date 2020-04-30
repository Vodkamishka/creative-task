class Checkbox {
    constructor(el) {
      this.creativePage = el;
      this.list = ["home", "about", "services", "careers", "news", "documentation", "selectall"];
      this.init();
      
    }
    init() {
      this.findDom();
      this.hiddenOneBox();
      this.hiddenAllBoxes();
    }
  
    findDom = () => this.list.forEach(el => this[`$${el}`] = this.creativePage.find(`#${el}`))
    hiddenOneBox = () => this.list.forEach((el, index) => index !== this.list.length-1 ? this[`$${el}`].on('input', () => $(`.${el}`).toggleClass('main_hidden')) : null);
    hiddenAllBoxes = () => this.$selectall.on('input', () => this.list.forEach(el => {
      $(`.${el}`).toggleClass('main_hidden');
      if ($('#selectall').attr('checked')) {
        $(`#${el}`).removeAttr('checked')
      } else {
        $(`#${el}`).attr('checked', 'checked')
      }
    
    }))
}
  
  
  $('.creative-page').each((index, el) => new Checkbox($(el)));
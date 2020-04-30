class Header {
    constructor(el) {
      this.creativePage = el;
      this.init();
    }
  
    init() {
      this.findDom();
      this.addEventListeners();
    }
  
    findDom() {
      this.$burger = this.creativePage.find('.burger');
      this.$sidebar = this.creativePage.find('.sidebar');
    }
    changedBurgerMenu = () => this.$burger.toggleClass('burger_changed');
    showedHiddenSidebar = () => this.$sidebar.toggleClass('sidebar_hidden');

    addEventListeners() {
      this.$burger.on('click', () => {
        this.changedBurgerMenu();
        this.showedHiddenSidebar();
      });
    }
  }
  
  $('.creative-page').each((index, el) => new Header($(el)));
  
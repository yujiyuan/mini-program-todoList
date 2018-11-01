//index.js
//获取应用实例
const app = getApp();

Page({
  data: {
    currentTab: 0,
    type:"全部",
    inputValue: '',
    todoList: [],
    todoNav: ['全部', '已完成', '未完成']
  },
  onLoad() {},
  //增加todo
  addTodo() {
    this.setData({
      inputValue: '',
      todoList: [
        ...this.data.todoList,
        {
          message: this.data.inputValue,
          isComplete: false,
          id: new Date().getTime()
        }
      ]
    })
  },
  //将输入框的值保存起来
  bindKeyInput(event) {
    this.setData({
      inputValue: event.detail.value
    })
  },
  //点击todo的时候切换完成状态
  itemChange(event) {
    const id = event.target.id
    const { todoList } = this.data

    this.setData({
      todoList: todoList.map(item => {
        if (Number(item.id) === Number(id)) {
          item.isComplete = !item.isComplete
        }
        return item
      })
    })
  },
  navTabChange(event) {
    const currentTab = event.target.dataset.current;
    const type = event.target.dataset.type;
    this.setData({ currentTab, type})
  },
})

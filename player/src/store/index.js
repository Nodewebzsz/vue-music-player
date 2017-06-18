import vue from 'vue'
import Vuex from 'vuex'
import api from '../api'

vue.use(Vuex)

const state = {
	hidNav: true,//一级菜单nav是否显示（初始值true：显示）
	hidFoot:false,//foot是否显示，fasle:隐藏，true:显示
	transitionName: '',//一级菜单nav切换动画
	transitionName2: '',//二级music菜单 nav切换动画
	musicNavIsActive: 1,//音乐列表和排行表nav切换（初始值1：音乐列表nav是active状态）
	scrollToBelow: false,//歌曲列表页面下滑时顶端是否出现搜索条（初始值false：隐藏搜索条）
	hidSidebar:false,
	recoListId:'',
	persRecoLists:[],//个性推荐歌单
	recoMvLists:[],//推荐mv
	stationLists:[],//主播电台
	subscribedCount:0,//订阅数目
	commentCount:0, //评论数目
	shareCount:0, //分享数目
	musicLists:[], //歌单
	trackCount:0, //歌单内歌曲数目
	rankingListName:'',//榜单子页面的名字
	name:'', //歌单名称
	nickname:'',//歌单创建者名称
	coverImgUrl:'',//背景图片
	avatarUrl:'',//歌单创建者头像
	playCount:'',//播放量
	searchKeyWord:'',//search的关键词
	typeId:0,//search的类型（单曲(1)，歌手(100)，专辑(10)，歌单(1000)，用户(1002) *(type)*）
	songListID:'',//歌单id
	index:0,
	artist:[],//search artists数据
	albums:[],//search albums数据
	playlists:[],//search playlists数据
	notFound:[false,false,false],//search数据是否找到（初始false值：api请求找到数据）
	showResultPage: false,//search searchResult结果页是否显示（初始值false：隐藏）
	currentMusic:'',//当前播放歌曲的id
	currentindex:0,//当前播放歌曲在歌单中的排序位置位置
	playing:false,//是否要播放
	playTime:'0:00',//播放时间
	second:0,//歌曲播放用时
	changeSong:0,//是否改变当前播放歌曲，下一首-1，上一首1
}

const mutations = {
	change:(state,type) => {state.hidNav = type},
	getRecoListId:(state,id) =>{state.recoListId = id,console.log(id)}
}
const actions = {
	changeAsync ({commit},type){
		setTimeout(() => {
			commit('change',type)
		},1000)
	}
}
export default new Vuex.Store({
  state : state,
  mutations:mutations,
  actions:actions
})

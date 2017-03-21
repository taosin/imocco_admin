module.exports = {
	name: 'im-select',
	props: ['datas', 'placeholder'],
	inherit: true,
	data() {
		return{
			show:false,
			input:'',
			left:0,
			top:0
		};
	},
	methods: {
		showLi(e){

			this.show = !this.show;
			this.left = e.target.offsetLeft + 200;
			this.top = e.target.offsetTop + this.datas.length * 30 + 8;
		},
		choose(val, text){
			this.input = text;
			this.show = false;
		}
	}
};

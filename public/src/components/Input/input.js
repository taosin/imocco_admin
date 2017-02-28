module.exports = {
    name: 'im-input',
    props:['option'],
    data() {
        return {
            required:false,
            msg:'',
            type:'text'
        }
    },
    attached() {
        if(this.option.type === 'password'){
            this.type = 'password';
        }
    },
    methods: {
        validate(){
            if(this.option.required){
                if(this.option.value && this.option.value.trim()){
                    this.required = false;
                }else{
                    this.required = true;
                    this.msg = this.option.text;
                }
            }
        }
    }
}
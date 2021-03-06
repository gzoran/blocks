import index from './index'
import selectList from './selectList/index.vue'
import ensureRef from '../ensureRef/index.vue'
index.props['settingDefinition'] = {
    setting: {
        allData: {
            type: 'selectList',
            label: '',
            require: true,
            componentData: {
                value: [{
                    label: '默认',
                    value: ''
                }]
            }
        },
        detail: {
            type: 'el-input',
            label: '文案',
            require: true,
            componentData: {
                value: ''
            }
        },
        selectRef: {
            type: 'ensureRef',
            label: '绑定字段',
            require: true,
            componentData: {
                value:''
            }
        }
    },
    components: {
        selectList,
        ensureRef
    },
    computed: {
        submitData: function () {
            return {
                // allData: getData,
                // checkList: getList,
                allData: this.allData.value,
                detail: this.detail.value,
                selectRef: this.selectRef.value     
            }
        }
    },
    methods: {
        backFill: function(submitData) {
            this.allData.value = submitData.allData
            // this.checkList.value = submitData.checkList
            this.detail.value = submitData.detail
            this.selectRef.value = submitData.selectRef
        }
    }
}
export default index

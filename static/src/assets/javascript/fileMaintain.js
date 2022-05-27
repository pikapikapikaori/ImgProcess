export default {
    data: {
        fileList: []
    },
    fileMethods: {
        // 返回当前登录中的用户的id
        saveFileList(filename) {
            this.fileList = JSON.parse(sessionStorage.getItem('fileList') || '[]')

            let tmp = {fileName: filename}

            if (this.fileList.find(val => val.fileName === filename) === undefined) {
                console.log(this.fileList.find(val => val.fileName === filename))
                this.fileList.push(tmp)
                sessionStorage.setItem('fileList', JSON.stringify(this.fileList))
            }


        },
        curFileList() {
            this.fileList = JSON.parse(sessionStorage.getItem('fileList') || '[]')
            return this.fileList
        }
    }
}
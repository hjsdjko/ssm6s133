const base = {
    get() {
                return {
            url : "http://localhost:8080/ssm6s133/",
            name: "ssm6s133",
            // 退出到首页链接
            indexUrl: 'http://localhost:8080/ssm6s133/front/index.html'
        };
            },
    getProjectName(){
        return {
            projectName: "日语词汇学习"
        } 
    }
}
export default base

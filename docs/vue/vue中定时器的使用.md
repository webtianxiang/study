# Vue中定时器的使用

js中定时器有两种：
1⃣️ 一个是循环执行：setInterval
2⃣️ 另一个是定时执行：setTimeout

## 循环执行：setInterval

    1. 定义：循环执行就是设置一个时间间隔，每过一段时间都会执行一次这个方法,直到这个定时器被销毁
    掉
    2.用法：用法是setInterval（“方法名或方法”，“延时”）， 第一个参数为方法名或者方法，注意为方
    法名的时候不要加括号,第二个参数为时间间隔
    3.停止执行：clearInterval，用于停止 setInterval() 方法执行的函数代码
    4.用例:
        if (this.timer) clearInterval(this.timer)
        this.timer = setInterval(() => {
          this.getQueryRealTimeMetricState()
        }, this.intervalTime)

## 定时执行：setTimeout

    1.定义：定时执行setTimeout是设置一个时间，等待时间到达的时候只执行一次，但是执行完以后定时
    器还在，只是没有运行
    2.用法：是setTimeout(“方法名或方法”, “延时”); 第一个参数为方法名或者方法，注意为方法名的
    时候不要加括号,第二个参数为时间间隔
    3.用例：
        if (this.timer) clearTimeout(this.timer)
            this.timer = setTimeout(() => {
            this.loading = true
            this.remoteMethod(val, (data = []) => {
                if (!Array.isArray(data)) {
                    return console.log(new Error(`the arguments must be an array`)）
                }
                if (Array.isArray(this.value)) {
                    // 多选
                    // 需将之前选中的同样增加到items中，防止之前选中的不显示（实际任然存在）
                    this.$emit('update:items', this.value.concat(data))
                } else {
                    // 单选
                    this.$emit('update:items', data)
                }
            }).then(() => {
                this.loading = false
            }).catch(() => {
                this.loading = false
            })
            }, 300)

## 定时器使用注意事项

    1. 定时器需要在页面销毁的时候清除掉，不然会一直存在！！！
    2.在使用setInterval方法时，每一次启动都需要对setInterval方法返回的值做一个判断，判断是否
    是空值，若不是空值，则要停止定时器并将值设为空，再重新启动，如果不进行判断并赋值，有可能会造
    成计时器循环调用，在同等的时间内同时执行调用的代码，并会随着代码的运行时间增加而增加，导致功
    能无法实现，甚至占用过多资源而卡死奔溃。因此在每一次使用setInterval方法时，都需要进行一次判
    断。
    3.vue中的setInterval在页面离开之后仍会执行，在切换多个路由之后，定时器的速度会越来越快。
    解决方法：
        beforeDestroy() {
            if(this.timer) {
                clearInterval(this.timer);
            }
        }

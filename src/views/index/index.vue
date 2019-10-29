<template>

    <div id="box">
    </div>

</template>
<script>
export default {
    data() {
        return {
        }
    },
    components: {
    },
    mounted() {
        this.$tip('bbbb')
    },
    methods: {
        sort(arr) {
            for(let i = 0; i < arr.length; i++) {
                for(let j = i; j < arr.length; j++) {
                    if (arr[i] > arr[j]) {
                        let min = arr[j]
                        arr[j] = arr[i]
                        arr[i] = min
                    }
                }
            }
        },
        quickSort(arr) {
            let fn = (list) => {
                let rightArr = [], leftArr = []
                if (list.length <= 1) {
                    return list
                }
                let middle = list[Math.floor(list.length / 2)]
                for(let i = 0; i < list.length; i++) {
                    if (list[i] < middle) {
                        leftArr.push(list[i])
                    } else if (list[i] > middle) {
                        rightArr.push(list[i])
                    }
                }
                
                return fn(leftArr).concat(middle, fn(rightArr))
            }
            console.log(fn(arr))
        }
    }
}
</script>
<style scoped>

</style>
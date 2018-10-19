module.exports = function () {
    let data = []

    this.leng = function () {
        return data.length
    }

    this.disPlay = function () {
        return data
    }

    this.addData = function (element) {
        data.push(element)
    }

    this.delData = function (element) {
        data.splice(data.indexOf(element), 1)
    }

    this.sum = function () {
        let summation = 0
        data.forEach(el => {
            summation += el
        })
        return summation
    }

    this.mean = function () {
        return (this.sum() / data.length).toFixed(2)
    }

    this.median = function () {
        if (data.length % 2 === 0) {
            medindex = data.length / 2
            return ((data[medindex - 1] + data[medindex]) / 2).toFixed(2)
        } else if (data.length % 2 !== 0) {
            medindex = Math.ceil(data.length / 2)
            return data[medindex - 1].toFixed(2)
        }
    }

    this.frequency = function (element) {
        return data.filter(x => x === element).length
    }

    this.mode = function () {
        let count = []
        data.forEach(element => {
            count.push(this.frequency(element));
        })
        lenmax = Math.max(...count)
        countmax = count.indexOf(lenmax)
        return data[countmax]
    }

    this.maxi = function () {
        return Math.max(...data)
    }

    this.mini = function () {
        return Math.min(...data)
    }

    this.range = function () {
        return this.maxi() - this.mini()
    }
}

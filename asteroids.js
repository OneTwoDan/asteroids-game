let canvas
let ctx
let canvasWidth = 1400
let canvasHeight = 1000
let keys = []

document.addEventListener("DOMContentLoaded", SetupCanvas)

function SetupCanvas() {
    canvas = document.getElementById("my-canvas")
    ctx = canvas.getContext("2d")
    canvas.width = canvasWidth
    canvas.heigth = canvasHeight
    ctx.fillStyle = "black"
    ctx.fillRect(0, 0, canvas.width, canvas.heigth)
    document.body.addEventListener("keydown", function (e) {
        keys[e.keyCode] = true
    })
    document.body.addEventListener("keyup", function (e) {
        keys[e.keyCode] = false
    })
    Render()
}

function Render() {

}
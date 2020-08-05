const VibrateApp = (ms: number[]) => {
    if ("vibrate" in navigator) {
        navigator.vibrate(ms)
    }
}

export default VibrateApp
export default {
    jump: new KeyboardEvent('keydown', {key: 'space', keyCode: 21}),
    dispatch(event){
        document.dispatchEvent(this[event]);
    }
}
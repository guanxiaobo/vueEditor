export default {
    bind(el, binging) {
        console.log(el);
        $(el).on('click', () => {
            console.log('点击');
        })
    }
}

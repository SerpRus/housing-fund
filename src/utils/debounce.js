export default function debounce(fn, wait = 500) {
    let timer;

    return function(...args){
        if(timer) {
            clearTimeout(timer);
        }

        const context = this;
        timer = setTimeout(()=>{
            fn.apply(context, args);
        }, wait);
    };
};

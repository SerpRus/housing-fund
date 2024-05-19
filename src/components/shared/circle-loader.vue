<template>
    <div class="circle-loader">
        <div class="circle-loader__loader"></div>
    </div>
</template>

<style lang="scss" scoped>
.circle-loader {
    display: flex;
    justify-content: center;

    &__loader {
        $size: 30px;

        position: relative;

        width: rem($size);
        height: rem($size);

        animation: rotate 1s linear infinite;

        border-radius: 50%;

        &::before {
            position: absolute;
            inset: 0;

            content: "";
            animation: prixClipFix 2s linear infinite ;

            border: rem(4) solid $color-bright;
            border-radius: 50%;
        }
    }
}

@keyframes rotate {
    100% {transform: rotate(360deg)}
}

@keyframes prixClipFix {
    0%   {clip-path:polygon(50% 50%,0 0,0 0,0 0,0 0,0 0)}
    25%  {clip-path:polygon(50% 50%,0 0,100% 0,100% 0,100% 0,100% 0)}
    50%  {clip-path:polygon(50% 50%,0 0,100% 0,100% 100%,100% 100%,100% 100%)}
    75%  {clip-path:polygon(50% 50%,0 0,100% 0,100% 100%,0 100%,0 100%)}
    100% {clip-path:polygon(50% 50%,0 0,100% 0,100% 100%,0 100%,0 0)}
}
</style>

<template>
  <div class="dashboard" tabindex="0" @keyup.space="handleKeyPressed">
        <div class="color-container" v-for="color in palette" :key="color.hex">
            <div
                v-bind:style="{
                    'background': `rgba(${color.rgb[0]}, ${color.rgb[1]}, ${color.rgb[2]}, 255)`
                }"
            >
                <span 
                    class="hex" 
                    v-bind:style="{
                        'color': `${color.textColor}`
                    }"
                >
                    {{ color.hex }}
                </span>
                <span 
                    class="color-name"
                    v-bind:style="{
                        'color': `${color.textColor}`
                    }"
                >
                    {{ color.name }} ({{ color.confidence }}%)
                </span>
            </div>
        </div>
  </div>
</template>

<script lang="ts">
import {
    generateRandomPalette,
    rgbToHex
} from '../../utils/colors';

export default {
    name: 'dashboard',
    data() {
        const palette = generateRandomPalette(6);
        return {
            palette
        }
    },
    methods: {
        rgbToHex,
        handleKeyPressed: function () {
            this.palette = generateRandomPalette(6);
        }
    }
}
</script>

<style scoped>
.dashboard {
    width: 100%;
    height: 100%;

    display: flex;
    flex-direction: row;
    align-items: flex-start;
    justify-content: flex-start;
}

.color-container {
    flex: 1;
    height: 100%;
}

.color-container>div {
    width: 100%;
    height: 100%;
    position: relative;
}

.color-container>div .hex {
    position: absolute;
    bottom: 15%;
    left: 50%;
    transform: translateX(-50%);
    color: white;
    text-transform: uppercase;
    font-weight: bold;
    letter-spacing: 1px;
}

.color-container>div .color-name {
    position: absolute;
    bottom: 12%;
    left: 50%;
    transform: translateX(-50%);
    color: white;
    text-transform: capitalize;
    font-weight: normal;
    letter-spacing: 1px;
    font-size: 0.7rem;
    text-align: center;
    white-space: nowrap;
}

@media screen and (max-width: 820px) {
    .dashboard {
        width: 100%;
        height: 100%;

        display: flex;
        flex-direction: column;
        align-items: flex-start;
        justify-content: flex-start;
    }

    .color-container {
        flex: 1;
        width: 100%;
    }

    .color-container>div .hex {
        position: absolute;
        bottom: 50%;
        left: 5%;
        transform: translateX(0);
    }

    .color-container>div .color-name {
        position: absolute;
        bottom: 30%;
        left: 5%;
        transform: translateX(0);
    }
}
</style>
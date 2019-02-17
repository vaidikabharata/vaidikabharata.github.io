<template>
    <div class="in-news-style">
        <div class="text_center" style="width: 265px; margin-bottom: 10px">
            <h3>In News</h3>
        </div>

        <div class="text_center" style="width: 530px">
            <div>
                <a href="http://www.organiser.org/Encyc/2018/7/19/extinct-tradition-Shankhayan-Shakha.html" target="_blank" >
                    Organiser: Revival of an ‘extinct’ tradition
                </a>
            </div>

            <div>
                <a href="http://www.organiser.org//Encyc/2018/6/22/inculcating-Dharma-in-Young-Minds.html" target="_blank" >
                Organiser: Sanskaar Deeksha Shivir
                </a>
            </div>
            <div>
                <a href="http://epaper.patrika.com/c/29755111" target="_blank" >
                Rajasthan Patrika: Reviving 550 years old Manuscript (Hindi)
                </a>
            </div>

            <div>
                <a href="http://indiafacts.org/after-millenia-tradition-reborn-vaidika-bharata/" target="_blank" >
                IndiaFacts: After millennium a Tradition is Reborn
                </a>
            </div>

            <div>
                <a href="https://grin.news/the-keeper-of-the-scrolls-b75d71f24055" target="_blank" >
                Grin News: The keeper of the scrolls
            </a>
           </div>
        </div>

        <div class="col-md-12">
            <img class="img_responsive" src="img\events-held\shankhayana\Collage_shankhayana_2.jpg">
        </div>
    </div>
</template>

<script>
    module.exports = {
    }
</script>

<style scoped>

    .text_center {
        margin-left: auto;
        margin-right: auto;
        text-align: left;
        font-family: Calibri;
        font-size: 20px;
        padding: 10px;
        cursor: pointer;
    }

    .img_responsive {
        width: 100%;
        height: auto;
    }

    a {
        color: #213999;
        font-weight: 500;
        -webkit-transition: color 0.2s;
        transition: color 0.2s;
        transition: transform 0.2s;
        display: inline-block;
        text-decoration: none;
        position: relative;
        padding: 0 0.25em;
    }

    a:hover {
        color: #d04c3f;
    }

    a::before,
    a::after {
        position: absolute;
        top: 0;
        font-weight: 100;
        font-size: 150%;
        line-height: 1;
        opacity: 0;
        -webkit-transition: opacity 0.2s, -webkit-transform 0.2s;
        transition: opacity 0.2s, transform 0.2s;
    }

    a::before {
        left: -0.1em;
        content: '[';
        -webkit-transform: translateX(-100%);
        transform: translateX(-100%);
    }

    a::after {
        right: -0.1em;
        content: ']';
        -webkit-transform: translateX(100%);
        transform: translateX(100%);
    }

    a:hover::before,
    a:hover::after {
        opacity: 1;
        -webkit-transform: translateX(0);
        transform: translateX(0);
    }
</style>
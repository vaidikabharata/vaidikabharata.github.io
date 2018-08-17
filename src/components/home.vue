<template>
    <div>
        <div id="vb-carousel" class="carousel slide" data-ride="carousel">
            <ol class="carousel-indicators">
                <li data-target="#carousel" data-slide-to="0" class="active"></li>
                <li data-target="#carousel" data-slide-to="1"></li>
                <li data-target="#carousel" data-slide-to="2"></li>
                <li data-target="#carousel" data-slide-to="3"></li>
                <li data-target="#carousel" data-slide-to="4"></li>
                <li data-target="#carousel" data-slide-to="5"></li>
            </ol>
            <div class="carousel-inner">
                <div class="item">
                    <img class="d-block w-60" src="img\carousel\DSC_0072.JPG" alt="First slide">
                </div>
                <div class="item">
                    <img class="d-block w-60" src="img\carousel\DSC_0107.JPG" alt="Second slide">
                </div>
                <div class="item">
                    <img class="d-block w-60" src="img\carousel\DSC_0279.JPG" alt="Third slide">
                </div>
                <div class="item">
                    <img class="d-block w-60" src="img\carousel\DSC_0673.JPG" alt="Fourth slide">
                </div>
                <div class="item">
                    <img class="d-block w-60" src="img\carousel\DSCN0335.JPG" alt="Fifth slide">
                </div>
                <div class="item active">
                    <img class="d-block w-60" src="img\carousel\vEyagAnam_003.jpg" alt="Sixth slide">
                </div>
            </div>
        </div>
        <div class="home__poem">
            <p>“हम कौन थे, क्या हो गए हैं, और क्या होंगे अभी</p>
            <p>आओ विचारें आज मिल कर, ये समस्याएँ सभी</p>
            <p>भू-लोक का गौरव प्रकृति का पुण्य लीला-स्थल कहाँ</p>
            <p>फैला मनोहर गिरि हिमालय और गंगाजल कहाँ</p>
            <p>सम्पूर्ण देशों से अधिक, किस देश का उत्कर्ष है</p>
            <p>उसका कि जो ऋषि-भूमि है, वह कौन, भारतवर्ष है</p>
            <p>यह पुण्य-भूमि प्रसिद्ध है, इसके निवासी आर्य हैं</p>
            <p>विद्या, कला, कौशल्य, सबके जो प्रथम आचार्य हैं</p>
            <p>सन्तान उनकी आज यद्यपि, हम अधोगति में पड़े</p>
            <p>पर चिन्ह उनकी उच्चताके, आज भी कुछ हैं खड़े</p>
            <p>वे आर्य ही थे, जो कभी अपने लिए जीते न थे</p>
            <p>वे स्वार्थरत हो मोह की मदिरा कभी पीते न थे</p>
            <p>वे मन्दिनी-तल में, सुकृति के बीज बोते थे सदा</p>
            <p>पर दु:ख देख, दयालुता से द्रवित होते थे सदा</p>
            <p>संसार के उपकार हित, जब जन्म लेते थे सभी</p>
            <p>निश्चेष्ट हो कर किस तरह से बैठ सकते थे कभी</p>
            <p>फैला यहीं से ज्ञान का आलोक सब संसार में</p>
            <p>जागी यहीं थी, जग रही जो ज्योति अब संसार में</p>
            <p>ये मोह-बन्धक मुक्त थे, स्वच्छंद थे, स्वाधीन थे</p>
            <p>सम्पूर्ण सुख-संयुक्त थे, वे शान्ति-शिखरासीन थे</p>
            <p>मनसे, वचनसे, कर्मसे, वे प्रभु-भजन में लीन थे</p>
            <p>विख्यात ब्रह्मानन्द नद के, वे मनोहर मीन थे”</p>
            <p>•	कविप्रवर श्री मैथिली शरण गुप्त की रचना "भारत - भारती" से उद्धृत</p>
        </div>
    </div>
</template>

<script>
    module.exports = {}
</script>

<style>
    .home__poem {
        margin-left: 35%;
        margin-right: 21%;
        margin-top: 2%;
        width: 44%;
        font-size: 25px;
    }
    .carousel-inner > .item {
        height: 57vh;
        background: #ff9933;
    }

    .carousel-inner > .item > img {
        position: absolute;
        top: 50%;
        left: 50%;
        -webkit-transform: translate(-50%, -50%);
        -ms-transform: translate(-50%, -50%);
        transform: translate(-50%, -50%);
        max-height: 400px;
        width: auto;
    }

    .carousel-control.left,
    .carousel-control.right {
        background-image: none;
    }
</style>
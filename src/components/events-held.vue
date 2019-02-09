<template>
    <div>
        <div class="text_center" style="width: 245px">
            <h3>Events Held</h3>
            <p @click="showModal1=!showModal1" class="event_name">Samskara diksha shivira-s</p>
            <p @click="showModal2=!showModal2" class="event_name">Mitravinda shrauta ishti 2017</p>
            <p @click="showModal3=!showModal3" class="event_name">Samaveda parayanam 2017</p>
            <p @click="showModal4=!showModal4" class="event_name">Chaturmasya 2017</p>
            <p @click="showModal5=!showModal5" class="event_name">Mitravinda shrauta ishti 2018</p>
            <p @click="showModal6=!showModal6" class="event_name">Rgveda shankhayana parayanam 2018</p>
            <p @click="showModal7=!showModal7" class="event_name">Samaveda parayanam 2018</p>
            <p>**Click on each of them to know more</p>
        </div>
        <div v-show="showModal1" class="modal-backdrop">
            <div class="modal">
                <div class="modal-header">
                    <div class="col-md-11">
                        <h3>Samskara diksha shivira-s</h3>
                    </div>
                    <div class="col-md-1 modal-header-close_button">
                        <i @click="showModal1=false" class="fas fa-times"></i>
                    </div>

                </div>
                <div class="modal-body">
                    <p>The education system as it was laid down by the ancient Rshi-s has almost vanished from the face of
                    bharatavarsha, the progeny of those who said विद्ययामृतमश्नुते don’t have the least bit idea of
                    what विद्या even is. Samskara diksha shivira, is an attempt at introducing young
                    boys to the gurukula education system over a period of 8-10 days. </p>
                    <p>In the residential camps, children learn to do the basic rituals like sandhyopasanam,
                    samidaadhaanam, yogabhyaasa, basic introduction to true indian history and also
                    practice the lifestyle of a brahmachari in a gurukula. Least of all, this plants the
                    seed of dharma in these boys and we hope a day may come when this seed
                    transforms to a full grown tree.</p>
                    <p>The latest such shivira was held from 3 rd – 10 th June 2018 in Palwal, Haryana.</p>
                    <div class="col-md-12">
                        <img class="img_responsive"
                             src="img\events-held\samskara_shivira\Collage_samskara_shivira_1.jpg">
                    </div>
                    <div class="col-md-12">
                        <img class="img_responsive"
                             src="img\events-held\samskara_shivira\Collage_samskara_shivira_2.jpg">
                    </div>
                </div>
            </div>
        </div>
        <div v-show="showModal2">
            <div class="modal-backdrop">
                <div class="modal">
                    <div class="modal-header">
                        <div class="col-md-11">
                            <h3>Mitravinda shrauta ishti 2017</h3>
                        </div>
                        <div class="col-md-1 modal-header-close_button">
                            <i @click="showModal2=false" class="fas fa-times"></i>
                        </div>
                    </div>
                    <div class="modal-body">
                        <p>अग्ग्निः सोमो व्वरुणो मित्त्रऽइन्द्रो बृहस्पतिः सविता यः सहस्री ।</p>
                        <p>पूषा नो गोभिरवसा सरस्वती त्त्वष्ट्टा रूपाणि समनक्तु यज्ञैः ॥</p>
                        <p>सविता राष्ट्ट्रं राष्ट्ट्रपतिः राष्ट्ट्रमस्म्मिन्न्यज्ञे मयि दधातु ।</p>

                        <p>May Agni, Soma, Varuna, Mitra, Indra, Brhaspati, Savita, Pusha, Sarasvati and Tvashta help
                        us obtain Anna, Rajya, Kshatra, Bala, Brahmavarchasa, Rashtra and most of all, Mitra.
                        The shrauta rites and rituals form the very backbone of the vaidika tradition, these are called
                        as the hands of the veda purusha. But it is a tragic situation today that no one even knows the names
                        of these practices let alone actually perform these. Vaidika Bharata aims to restore these rituals
                            to the places where it was originated, in the heartlands of the area flooded by sarasvati-ganga-yamuna.</p>
                        <p>In this direction we organised mitravinda shrauta ishti on phalguna shukla 9, 2073 i.e. 6th march
                            2017 by nitya agnihotri shri madhavarao agnihotri from buldhana, Maharashtra.</p>
                        <div class="col-md-12">
                            <img class="img_responsive"
                                 src="img\events-held\mitravinda_2017\Collage_Mitravinda_2017.jpg">
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div v-show="showModal3">
            <div class="modal-backdrop">
                <div class="modal">
                    <div class="modal-header">
                        <div class="col-md-11">
                            <h3>Samaveda parayanam 2017</h3>
                        </div>
                        <div class="col-md-1 modal-header-close_button">
                            <i @click="showModal3=false" class="fas fa-times"></i>
                        </div>

                    </div>
                    <div class="modal-body">
                        <p>वेदानां सामवेदोऽस्मि देवानामस्मि वासवः ।</p>
                        <p>इन्द्रियाणां मनश्चास्मि भूतानामस्मि चेतना ॥१०।२२ गीता॥</p>
                        <p>amongst the veda-s, I am the sama veda, thus spoke shri kRshna.</p>
                        <p>A sama veda parayanam of the kauthumiya shakha, madra paddhati, was organised from phalguna krshna 4-6, 2073 i.e. Feb
                            14-17, 2017 in Noida, UP by scholars invited from tirupati and Chennai.</p>
                        <div class="col-md-12">
                            <img class="img_responsive" src="img\events-held\sAmapArAyaNam\Collage_sAmapArAyaNam.jpg">
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div v-show="showModal4">
            <div class="modal-backdrop">
                <div class="modal">
                    <div class="modal-header">
                        <div class="col-md-11">
                            <h3>Chaturmasya 2017</h3>
                        </div>
                        <div class="col-md-1 modal-header-close_button">
                            <i @click="showModal4=false" class="fas fa-times"></i>
                        </div>
                    </div>
                    <div class="modal-body">
                        <p>The chaturmasya-s, shrauta yaga-s to be performed every four months by a nitya
                        agnihotri, have become an almost extinct feature in whole of bharata and practically
                            extinct in uttara bharata.</p>
                        <p>In our endeavour to re-establish shrauta karma in the antarvedi, i.e. the land between the holy
                        waters of Yamuna and Ganga, we have been organising shrauta karma, and also supporting people
                        who study it and practice it. We held the Shukla yajurvediya chaturmasya yaaga-s, on the banks
                        of the narayani river, in narayangadh, Nepal in the yajamanatva of nitya agnihotri shri Ravilal
                            Sapkota ji.</p>
                        <div class="col-md-12">
                            <img class="img_responsive" src="img\events-held\chAturmAsyAni\Collage_chAturmAsyAni.jpg">
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div v-show="showModal5">
            <div class="modal-backdrop">
                <div class="modal">
                    <div class="modal-header">
                        <div class="col-md-11">
                            <h3>Mitravinda shrauta ishti 2018</h3>
                        </div>
                        <div class="col-md-1 modal-header-close_button">
                            <i @click="showModal5=false" class="fas fa-times"></i>
                        </div>
                    </div>
                    <div class="modal-body">
                        <p>अग्ग्निः सोमो व्वरुणो मित्त्रऽइन्द्रो बृहस्पतिः सविता यः सहस्री ।</p>
                        <p>पूषा नो गोभिरवसा सरस्वती त्त्वष्ट्टा रूपाणि समनक्तु यज्ञैः ॥</p>
                        <p>सविता राष्ट्ट्रं राष्ट्ट्रपतिः राष्ट्ट्रमस्म्मिन्न्यज्ञे मयि दधातु ।</p>
                        <p>May Agni, Soma, Varuna, Mitra, Indra, Brhaspati, Savita, Pusha, Sarasvati and Tvashta help
                        us obtain Anna, Rajya, Kshatra, Bala, Brahmavarchasa, Rashtra and most of all, Mitra.
                        The shrauta rites and rituals form the very backbone of the vaidika tradition, these are called
                        as the hands of the veda purusha. But it is a tragic situation today that no one even knows the names
                        of these practices let alone actually perform these. Vaidika Bharata aims to restore these rituals
                        to the places where it was originated, in the heartlands of the area flooded by sarasvati-ganga-yamuna.</p>
                        <p>Our scholars were requested by gyan pravah, kashi to perorm mitravinda shrauta ishti on phalguna
                        amavasya, 2074 i.e. 15 th February 2018 by nitya agnihotri shri Ravilal Sapkota.</p>
                        <div class="col-md-12">
                            <img class="img_responsive"
                                 src="img\events-held\mitravinda_2018\Collage_mitravinda_2018.jpg">
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div v-show="showModal6">
            <div class="modal-backdrop">
                <div class="modal">
                    <div class="modal-header">
                        <div class="col-md-11">
                            <h3>Rgveda shankhayana parayanam 2018</h3>
                        </div>
                        <div class="col-md-1 modal-header-close_button">
                            <i @click="showModal6=false" class="fas fa-times"></i>
                        </div>
                    </div>
                    <div class="modal-body">
                        <p>Revival of Shankhayana shakha of the Rgveda is the most important project we are running, you
                            can read more about this here.</p>
                        <p>To commemorate shri abhijit’s completion of studying the Shankhayana samhita, we organised a
                        Shankhayana Rgveda parayanam from Jyeshtha shukla 11 - jyeshtha krshna 2, 2075 i.e. 23 rd June –
                        30 th June 2018. The event was very much appreciated and was a watershed moment in the history
                            and revival of vaidika traditions in uttara bharata. It was also very well covered by media.</p>
                        <div class="col-md-12">
                            <img class="img_responsive" src="img\events-held\shankhayana\Collage_shankhayana_1.jpg">
                            <img class="img_responsive" src="img\events-held\shankhayana\Collage_shankhayana_2.jpg">
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    
     <div v-show="showModal7">
            <div class="modal-backdrop">
                <div class="modal">
                    <div class="modal-header">
                        <div class="col-md-11">
                            <h3>Samaveda parayanam 2017</h3>
                        </div>
                        <div class="col-md-1 modal-header-close_button">
                            <i @click="showModal3=false" class="fas fa-times"></i>
                        </div>

                    </div>
                    <div class="modal-body">
                        <p>वेदानां सामवेदोऽस्मि देवानामस्मि वासवः ।</p>
                        <p>इन्द्रियाणां मनश्चास्मि भूतानामस्मि चेतना ॥१०।२२ गीता॥</p>
                        <p>amongst the veda-s, I am the sama veda, thus spoke shri kRshna.</p>
                        <p>A sama veda parayanam of the kauthumiya shakha, madra paddhati, was organised from kartika shukla ekadashi to purnima, 2075 i.e. Nov
                            19-23, 2018 in Kanchi Kamakshi Mandiram, Delhi by scholars invited from Kashi, shishya-s of the great acharya vedamurti
                            shri gagankumara chattopadhyaya.</p>
                        <div class="col-md-12">
                            <img class="img_responsive" src="img\events-held\sAmapArAyaNam\Collage_sAmapArAyaNam.jpg">
                        </div>
                    </div>
                </div>
            </div>
        </div>
       
</template>

<script>
    module.exports = {
        data() {
            return {
                showModal1: false,
                showModal2: false,
                showModal3: false,
                showModal4: false,
                showModal5: false,
                showModal6: false
            }
        }
    }
</script>

<style>
    .text_center {
        margin-left: auto;
        margin-right: auto;
        text-align: left;
    }

    .modal-backdrop {
        position: fixed;
        top: 7.5%;
        bottom: 0;
        left: 0;
        background-color: rgba(0, 0, 0, 0.3);
        display: flex;
        justify-content: center;
        align-items: center;
    }

    .modal {
        background: #FFFFFF;
        box-shadow: 2px 2px 20px 1px;
        overflow-x: auto;
        overflow-y: scroll;
        display: flex;
        flex-direction: column;
        top: 8.5%;
        bottom: 0;
        left: 2%;
        right: 2%;
    }

    .modal-header {
        border-bottom: 1px solid #eeeeee;
        text-align: center;
    }

    .modal-header-close_button {
        text-align: right;
        padding-right: 0;
    }

    .modal-body {
        position: relative;
        padding: 2% 15%;
        text-align: center;
    }

    .event_name {
        cursor: pointer;
    }

    .img_responsive {
        width: 100%;
        height: auto;
    }

</style>

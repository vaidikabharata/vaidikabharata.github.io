<template>
    <div>
        <div class="text_center" style="width: 245px">
            <h3>Our Projects</h3>
            <p @click="showModal1=!showModal1" class="project_name">Revival of shankhayana shakha</p>
            <p @click="showModal2=!showModal2" class="project_name">Digitization of manuscripts</p>
            <p @click="showModal3=!showModal3" class="project_name">Veda pathashala</p>
            <p @click="showModal4=!showModal4" class="project_name">Revival of syv shrauta karma</p>
            <p @click="showModal5=!showModal5" class="project_name">Holding veda parayanam-s</p>
            <p @click="showModal6=!showModal6" class="project_name">Samskara deekshaa shivira-s</p>
            <p>**Click on each of them to know more</p>
        </div>
        <div v-show="showModal1" class="modal-backdrop">
            <div class="modal">
                <div class="modal-header">
                    <div class="col-md-11">
                        <h3>Revival of shankhayana shakha</h3>
                    </div>
                    <div class="col-md-1 modal-header-close_button">
                        <i @click="showModal1=false" class="fas fa-times"></i>
                    </div>

                </div>
                <div class="modal-body">
                    <p>Maharshi patanjali in his vyakarana mahabhashya says ‘एकविंशतिधा बाहवृच्यम्  एकशतम्
                    अध्वर्युशाखा: सहस्रवर्त्मा सामवेद: नवधाऽथर्वणोवेद:’, which means, there are 21 shakha-s of rgveda,
                    101 of yajurveda, 1000 of samaveda and 9 of the atharvaveda. Of these total 1131 shakha-
                    s, barely 10 have survived the last thousand or so years of foreign rule. Of the 21 shakha-s
                    of the rgveda, only 2 have survived, the shakala/ashvalayana and the shankhayana. The
                    shankhayana shakha is practiced amongst the nagara brahmana community of south
                    rajasthan and Gujarat. The samhita reciters of this shakha are found only in banswada,
                    rajasthan. There are only two Acharya-s here who, even though about 80 years of age, are
                    physically fit to teach, vedamurti shri indrashankara jha and vedamurti shri harashad nagar.
                    But due to the advent of modern ideas, these two Acharya-s did not find a single student
                        who would study at least the rgveda samhita, all through their lives.</p>
                    <p>The vaidika bharata trust has ensured that this shakha lives on by assigning a vaidika
                    scholar, shri abhijit dinkar savale from tryambakeshvar, to study this shakha from these
                    Acharya-s. Shri Abhijit has completed his samhita and a full parayanam was held from 23 rd
                    june to 30 th june in banswada, rajasthan, under the watchful eyes of the acharya-s. Shri
                    Abhijit has now moved on to study shrauta and grhya karma of the shankhayana shakha.
                    We pray he may become the torch bearer of this most important vaidika tradition and
                        ensures a full-fledged revival of the shakha.</p>
                    <p>We have also digitised no less than 43,000 pages of rare and important manuscripts in the
                    possession of these Acharya-s, we hope these will provide the scriptural guidance towards
                    the resurrection of the shankhayana shakha. Read more about our efforts in mansucripts
                        digitisation here.</p>
                    <p>All this has been possible because of the generous help we have always received from
                    dharmika sajjana-s all over bharata and beyond. May parameshvara keep his benevolent
                        eye on us all.</p>

                    <p>To read more about our efforts in this direction, please see the link below.</p>
                    <p><a>http://www.organiser.org/Encyc/2018/7/19/extinct-tradition-Shankhayan-Shakha.html</a></p>

                    <p><a>http://indiafacts.org/after-millenia-tradition-reborn-vaidika-bharata/</a></p>
                </div>
            </div>
        </div>

        <div v-show="showModal2" class="modal-backdrop">
            <div class="modal">
                <div class="modal-header">
                    <div class="col-md-11">
                        <h3>Digitization of manuscripts</h3>
                    </div>
                    <div class="col-md-1 modal-header-close_button">
                        <i @click="showModal2=false" class="fas fa-times"></i>
                    </div>

                </div>
                <div class="modal-body">
                    <div class="col-md-12">
                        <img class="img_responsive"
                             src="img\our-projects\digitization_of_manuscripts\Collage_digitization_of_manuscripts.jpg">
                    </div>
                    <h4>भग्नपृष्टि: कटिग्रीवो बन्धमुष्टिरधोमुखः</h4>
                    <h4>कष्टेन लिखितं ग्रन्थं यज्ञेन परिपालयेत्</h4>
                    <h4><i>My back is broken, my fingers don't work and I find it hard to look straight,
                        yet I write this grantha, do the yajna-s and protect it, look after it.</i></h4>
                    <p>This is what the AchArya who wrote this grantha appealed to the next generations.
                    Bharata had a great treasure of knowledge, when over the last thousand years, slowly as the
                    traditional teaching systems died out as the nation lost its sovereignty, this knowledge got more and
                        more condensed and confined to texts written on paper, palm leafs and various other materials.</p>
                    <p>A huge number of ancient manuscripts lie uncared for, a great number lying unorganized here and
                    there like pieces of garbage. It is very much obvious that in order to understand what our ancestors
                    have left us, we must begin studying these manuscripts, but given their humongous volume and the
                    limited resources, it is a gigantic task. Also, before getting to the stage of studying, we must ensure
                    that the knowledge must be preserved for posterity, that can be ensured by preserving the
                    manuscripts. That can be done by digitizing them. Vaidika Bharata has digitized very important and
                    rare manuscripts related to shankhayana shakha of the rgveda (read more here) and we also have
                        been digitizing rare manuscripts from all over bharata, here’s a list of centres we’re running:</p>
                    <p>a) ASR, Melkote, Karnataka</p>
                    <p>b) Raghunath Temple Library, Jammu (in association with the engangotri trust)</p>
                    <p>c) Panjab University, Chandigarh (in association with the engangotri trust)</p>
                    <p>d) Shri Krishna Museum, Kurukshetra (in association with the engangotri trust)</p>
                   
                </div>
            </div>
        </div>

        <div v-show="showModal3" class="modal-backdrop">
            <div class="modal">
                <div class="modal-header">
                    <div class="col-md-11">
                        <h3>Veda pathashala</h3>
                    </div>
                    <div class="col-md-1 modal-header-close_button">
                        <i @click="showModal3=false" class="fas fa-times"></i>
                    </div>

                </div>
                <div class="modal-body">
                    Coming Soon!
                </div>
            </div>
        </div>

        <div v-show="showModal4" class="modal-backdrop">
            <div class="modal">
                <div class="modal-header">
                    <div class="col-md-11">
                        <h3>Revival of syv shrauta karma</h3>
                    </div>
                    <div class="col-md-1 modal-header-close_button">
                        <i @click="showModal4=false" class="fas fa-times"></i>
                    </div>

                </div>
                <div class="modal-body">
                    <p>छन्दः पादौ तु वेदस्य हस्तौ कल्पोऽथ पठ्यते</p>
                    <p>ज्योतिषामयनं चक्षुर्निरुक्तं श्रोत्रमुच्यते।</p>
                    <p>शिक्षा घ्राणं तु वेदस्य मुखं व्याकरणं स्मृतम्</p>
                    <p>तस्मात्सांगमधीत्यैव ब्रह्मलोके महीयते॥</p>
                    <p>The 6 vedanga-s are indispensable in the study of veda-s, therefore, they are imagined as being
                        limbs of the vedapurusha.</p>
                    <p>The above shloka says, chhanda is the feet, kalpa is the hands, jyotisha is the eyes, nirukta is the
                        ears, shiksha is the nose and vyakarana is the face of the vedapurusha.</p>
                    <p>Kalpa covers shrauta, grhya and dharma sutra-s, which define how every moment of a vaidika’s life
                    must be spent. Hence, a revival of this vendaga essentially means revival of the vaidika way of life.
                    The shrauta sutra-s lay out how the yajna-s as mentioned the shruti, the veda-s, must be performed.
                    The grhya sutra-s explain how to perform the rites relating to one’s family and the dharma sutra-s
                        detail about the varnashrama dharma.</p>
                    <p>Kalpa is the ultimate culmination and utilisation of studying all other vedanga-s. You need to know
                    shiksha to chant mantra-s, nirukta to know applicability of the mantra-s, vyakarana to do Uha as per
                    the ritual in progress, jyotisha to know when and where to do the particular ritual and chhanda to
                        know the correct meter at the very least amongst other purposes.</p>
                    <p>While dakshina bharata still retains the tradition and actual practitioners of the shrauta yajna-s to a
                    good extent, uttara bharata, the land which is purified by the waters of sarasvati-ganga-yamuna, has
                    lost the great culture it was once known for. Our effort is to aim for revival and resurrection of this
                    most basic and yet most important part of our dharma, without which, no true reclamation of our
                        past can ever be possible, neither the dharma can continue into future.</p>
                    <p>For this, we have been supporting some promising shukla yajurveda shrauta students/practitioners
                    and rgvediya shankhayana shrauta student/s. We hold ishti-s/yaga-s in uttara bharata from time to
                    time to encourage the remaining handful practitioners. To know more about past events, check the
                        events held tab.</p>
                </div>
            </div>
        </div>

        <div v-show="showModal5" class="modal-backdrop">
            <div class="modal">
                <div class="modal-header">
                    <div class="col-md-11">
                        <h3>Holding veda parayanam-s</h3>
                    </div>
                    <div class="col-md-1 modal-header-close_button">
                        <i @click="showModal5=false" class="fas fa-times"></i>
                    </div>

                </div>
                <div class="modal-body">
                    <p>The madhyadesha of bharata or the land bound by the sarasvati-ganga-yamuna, has always been
                    praised by Rshi-s and Acharya-s for being the upholder of the highest virtues of dharma. But what a
                    heart breaking tragedy we’ve witnessed, the same land is now almost completely devoid of vaidika
                        traditions and practitioners of the vaidika knowledge.</p>
                    <p>In our endeavour of re-establishing the veda
                    dharma in this land dear to the deva-s, we have been holding veda-parayanam-s so that an
                    awareness can be created in the general public about vaidika culture and studies. We held sama
                    veda parayanam in February, 2017, shukla yajurveda parayanam in 2015 and are going to hold
                        madhyandina ghana parayanam very soon.</p>
                </div>
            </div>
        </div>

        <div v-show="showModal6" class="modal-backdrop">
            <div class="modal">
                <div class="modal-header">
                    <div class="col-md-11">
                        <h3>Samskara deekshaa shivira-s</h3>
                    </div>
                    <div class="col-md-1 modal-header-close_button">
                        <i @click="showModal6=false" class="fas fa-times"></i>
                    </div>

                </div>
                <div class="modal-body">
                    <p>The education system as it was laid down by the ancient Rshi-s has almost vanished from the face of
                    bharatavarsha, the progeny of those who said विद्ययामृतमश्नुते don’t have the least bit idea of
                    what विद्या even is. Samskara diksha shivira, is an attempt at introducing young
                        boys to the gurukula education system over a period of 8-10 days.</p>
                    <p>Every Year, Since 2015, in summer vacations, we organize residential camps for 8-10 days, getting
                    upanayam done of the attending students (it pains to see that even this basic and essential ritual has
                    practically lost all its importance from North India, even more from N-W India) and teaching them
                    duties of a Brahmachari, True Indian History, Indian sports and SamskrtaSambhaashana. This year,
                    we had 75 students. We also regularly keep in touch with our students to guide them if they face
                        difficulties of any kind whatsoever in upholding Dharma.</p>
                    <p>Least of all, this plants the seed of dharma in these boys and we hope a day may
                        come when this seed transforms to a full grown tree.</p>
                    <p>The Organiser had published a story about our work which you can read here.</p>
                    <p><a>http://www.organiser.org//Encyc/2018/6/22/inculcating-Dharma-in-Young-Minds.html</a></p>
                    <p>You can see the pictures of the earlier shivira-s in Events held tab.</p>
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

    .project_name {
        cursor: pointer;
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

    .img_responsive {
        width: 50%;
        height: auto;
        margin-bottom: 10px;
    }
</style>
